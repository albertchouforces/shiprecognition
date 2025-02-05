import { useState } from 'react';
import { ShipWheel, Globe2 } from 'lucide-react';
import type { QuizStats } from '../types';
import { QuizCard } from './QuizCard';
import { GlobalLeaderboard } from './GlobalLeaderboard';
import { ENABLE_GLOBAL_LEADERBOARD } from '../config/features';
import { QUIZ_COLLECTION } from '../data/quizData';

interface StartScreenProps {
  onSelectQuiz: (quizId: string) => void;
  getStatsForQuiz: (quizName: string) => QuizStats;
  onResetScores: (quizName: string) => void;
}

export function StartScreen({ 
  onSelectQuiz,
  getStatsForQuiz,
  onResetScores
}: StartScreenProps) {
  const [showGlobalLeaderboard, setShowGlobalLeaderboard] = useState(false);

  const handleResetScores = (quizName: string) => {
    onResetScores(quizName);
    // Add reload as fallback
    window.location.reload();
  };

  // Calculate the number of columns needed based on screen size and quiz count
  const getGridColumns = () => {
    const numQuizzes = QUIZ_COLLECTION.length;
    if (numQuizzes <= 2) return 'grid-cols-1 md:grid-cols-2';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <div className="max-w-6xl w-full mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <ShipWheel className="text-orange-600" size={32} />
          <h1 className="text-4xl font-bold text-gray-800">
          Ship Recognition
          </h1>
        </div>
        <h2 className="text-xl text-gray-600">
          Test your knowledge of ship silhouettes from other navies around the world
        </h2>
      </div>

      {/* Quiz Grid - Updated with dynamic column calculation */}
      <div className="flex justify-center mb-12">
        <div className={`grid ${getGridColumns()} gap-8 auto-rows-fr justify-items-center max-w-screen-lg mx-auto`}>
          {QUIZ_COLLECTION.map((quiz) => (
            <QuizCard
              key={quiz.config.id}
              config={quiz.config}
              stats={getStatsForQuiz(quiz.config.service)}
              onStart={() => onSelectQuiz(quiz.config.id)}
              onResetScores={() => handleResetScores(quiz.config.service)}
            />
          ))}
        </div>
      </div>

      {/* Global Leaderboard Button */}
      {ENABLE_GLOBAL_LEADERBOARD && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowGlobalLeaderboard(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors font-semibold shadow-md"
          >
            <Globe2 size={20} />
            View Global Leaderboard
          </button>
        </div>
      )}

      {/* Global Leaderboard Modal */}
      {showGlobalLeaderboard && (
        <GlobalLeaderboard 
          onClose={() => setShowGlobalLeaderboard(false)}
          quizzes={QUIZ_COLLECTION}
        />
      )}
    </div>
  );
}
