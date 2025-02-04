import { useState, useEffect, useMemo } from 'react';
import { FlashCard } from './components/FlashCard';
import { ScoreDisplay } from './components/ScoreDisplay';
import { StartScreen } from './components/StartScreen';
import { UserNameInput } from './components/UserNameInput';
import { Footer } from './components/Footer';
import { QuizHeader } from './components/QuizHeader';
import { QUIZ_COLLECTION } from './data/quizData';
import { shuffleArray, getRandomOptions } from './lib/utils';
import type { QuizStats, QuestionData, HighScoreEntry } from './types';

type GameState = 'selection' | 'playing' | 'entering-name';

const INITIAL_QUIZ_STATS: QuizStats = {
  highScore: 0,
  bestRun: null,
  highScores: []
};

function App() {
  const [gameState, setGameState] = useState<GameState>('selection');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [randomizedQuestions, setRandomizedQuestions] = useState<QuestionData[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [lastPauseTime, setLastPauseTime] = useState<number | null>(null);
  const [accumulatedTime, setAccumulatedTime] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState<typeof QUIZ_COLLECTION[0] | null>(null);

  // Get all unique possible answers for the current quiz
  const allPossibleAnswers = useMemo(() => 
    selectedQuiz ? Array.from(new Set(selectedQuiz.questions.map(q => q.correctAnswer))) : [],
    [selectedQuiz]
  );

  // Timer effect with pause functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (gameState === 'playing' && startTime && !isPaused) {
      intervalId = setInterval(() => {
        const elapsed = Date.now() - startTime - accumulatedTime;
        setCurrentTime(elapsed);
      }, 10);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [gameState, startTime, isPaused, accumulatedTime]);

  const getStatsForQuiz = (quizService: string): QuizStats => {
    try {
      const statsKey = `quiz_stats_${quizService}`;
      const storedStats = localStorage.getItem(statsKey);
      if (storedStats) {
        const parsedStats = JSON.parse(storedStats);
        // Validate the structure
        if (typeof parsedStats === 'object' && 
            'highScore' in parsedStats && 
            'highScores' in parsedStats &&
            Array.isArray(parsedStats.highScores)) {
          return parsedStats;
        }
      }
    } catch (error) {
      console.error('Error reading stats from localStorage:', error);
    }
    return INITIAL_QUIZ_STATS;
  };

  const pauseTimer = () => {
    if (!isPaused) {
      setIsPaused(true);
      setLastPauseTime(Date.now());
    }
  };

  const resumeTimer = () => {
    if (isPaused && lastPauseTime) {
      const pauseDuration = Date.now() - lastPauseTime;
      setAccumulatedTime(prev => prev + pauseDuration);
      setIsPaused(false);
      setLastPauseTime(null);
    }
  };

  const updateStats = (userName: string) => {
    if (!selectedQuiz) return;

    try {
      const statsKey = `quiz_stats_${selectedQuiz.config.service}`;
      const currentStats = getStatsForQuiz(selectedQuiz.config.service);
      const accuracy = Math.round((correctAnswers / totalAnswers) * 100);

      const newHighScore = Math.max(currentStats.highScore, correctAnswers);

      const shouldUpdateBestRun = !currentStats.bestRun || 
        (correctAnswers >= currentStats.bestRun.score && currentTime < currentStats.bestRun.time);

      const newBestRun = shouldUpdateBestRun ? {
        userName,
        time: currentTime,
        score: correctAnswers,
        accuracy
      } : currentStats.bestRun;

      const newScore: HighScoreEntry = {
        userName,
        score: correctAnswers,
        accuracy,
        time: currentTime,
        date: new Date().toISOString()
      };

      // Ensure we only keep the top 5 scores
      const newHighScores = [...currentStats.highScores, newScore]
        .sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          return a.time - b.time;
        })
        .slice(0, 5);

      const newStats: QuizStats = {
        highScore: newHighScore,
        bestRun: newBestRun,
        highScores: newHighScores
      };

      localStorage.setItem(statsKey, JSON.stringify(newStats));
      console.log('Successfully saved local stats:', newStats);
    } catch (error) {
      console.error('Error saving stats to localStorage:', error);
    }
  };

  const handleSelectQuiz = (quizId: string) => {
    const quiz = QUIZ_COLLECTION.find(q => q.config.id === quizId);
    if (!quiz) return;

    setSelectedQuiz(quiz);
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setTotalAnswers(0);
    setCurrentTime(0);
    setStartTime(Date.now());
    setIsPaused(false);
    setLastPauseTime(null);
    setAccumulatedTime(0);
    
    // Randomize questions order
    setRandomizedQuestions(shuffleArray(quiz.questions));
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) setCorrectAnswers(prev => prev + 1);
    setTotalAnswers(prev => prev + 1);
    pauseTimer();
  };

  const handleNext = () => {
    resumeTimer();
    if (currentQuestionIndex < randomizedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('entering-name');
    }
  };

  const handleRestart = () => {
    setGameState('selection');
    setSelectedQuiz(null);
  };

  const handleUserNameSubmit = (userName: string) => {
    if (!selectedQuiz) return;
    
    try {
      updateStats(userName);
      setGameState('selection');
      setSelectedQuiz(null);
    } catch (error) {
      console.error('Error in handleUserNameSubmit:', error);
    }
  };

  const getCurrentQuestion = () => {
    return randomizedQuestions[currentQuestionIndex];
  };

  const options = useMemo(() => {
    if (!randomizedQuestions.length) return [];
    
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return [];
    
    return getRandomOptions(allPossibleAnswers, currentQuestion.correctAnswer, 4);
  }, [currentQuestionIndex, randomizedQuestions, allPossibleAnswers]);

  const handleResetScores = (quizService: string) => {
    try {
      const statsKey = `quiz_stats_${quizService}`;
      localStorage.setItem(statsKey, JSON.stringify(INITIAL_QUIZ_STATS));
      // Force a re-render to update the display
      setGameState(prev => prev);
    } catch (error) {
      console.error('Error resetting scores:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {gameState !== 'selection' && selectedQuiz && (
        <QuizHeader quizConfig={selectedQuiz.config} />
      )}
      <div className="flex-1 py-8">
        <div className="container mx-auto flex flex-col items-center gap-8">
          {gameState === 'selection' ? (
            <StartScreen 
              onSelectQuiz={handleSelectQuiz}
              getStatsForQuiz={getStatsForQuiz}
              onResetScores={handleResetScores}
            />
          ) : selectedQuiz && (
            <>
              {gameState === 'playing' ? (
                <div className="flex flex-col items-center gap-6">
                  <ScoreDisplay 
                    correct={correctAnswers} 
                    total={totalAnswers} 
                    highScore={getStatsForQuiz(selectedQuiz.config.service).highScore}
                    onRestart={handleRestart}
                    isFinished={false}
                    totalQuestions={randomizedQuestions.length}
                    currentTime={currentTime}
                    bestRun={getStatsForQuiz(selectedQuiz.config.service).bestRun}
                    quizConfig={selectedQuiz.config}
                  />
                  <FlashCard
                    question={getCurrentQuestion()}
                    options={options}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={randomizedQuestions.length}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6">
                  <ScoreDisplay 
                    correct={correctAnswers} 
                    total={totalAnswers} 
                    highScore={getStatsForQuiz(selectedQuiz.config.service).highScore}
                    onRestart={handleRestart}
                    isFinished={true}
                    totalQuestions={randomizedQuestions.length}
                    currentTime={currentTime}
                    bestRun={getStatsForQuiz(selectedQuiz.config.service).bestRun}
                    quizConfig={selectedQuiz.config}
                  />
                  <UserNameInput 
                    onSubmit={handleUserNameSubmit}
                    currentScore={correctAnswers}
                    currentTime={currentTime}
                    highScores={getStatsForQuiz(selectedQuiz.config.service).highScores}
                    quizConfig={selectedQuiz.config}
                    totalQuestions={randomizedQuestions.length}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
