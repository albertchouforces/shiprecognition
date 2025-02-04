import { RotateCcw, Trophy, Clock } from 'lucide-react';
import { Timer } from './Timer';
import { BestRun, QuizConfig } from '../types';

interface ScoreDisplayProps {
  correct: number;
  total: number;
  highScore: number;
  onRestart: () => void;
  isFinished: boolean;
  totalQuestions: number;
  currentTime: number;
  bestRun: BestRun | null;
  quizConfig: QuizConfig;
}

export function ScoreDisplay({ 
  correct, 
  total, 
  highScore, 
  onRestart,
  isFinished,
  totalQuestions,
  currentTime,
  bestRun,
  quizConfig
}: ScoreDisplayProps) {
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
  const accentColor = quizConfig.themeColor;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4 text-lg font-semibold flex-wrap justify-center">
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
          <span className="text-gray-600">Score: </span>
          <span className={`text-${accentColor}-600`}>{correct}/{total}</span>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
          <span className="text-gray-600">Accuracy: </span>
          <span className={`text-${accentColor}-600`}>{percentage}%</span>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2">
          <Trophy size={16} className={`text-${accentColor}-600`} />
          <span className="text-gray-600">Best: </span>
          <span className={`text-${accentColor}-600`}>
            {highScore}
            {bestRun && ` (${bestRun.accuracy}%)`}
          </span>
        </div>
        <Timer time={currentTime} accentColor={accentColor} />
        {bestRun && (
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2">
            <Clock size={16} className={`text-${accentColor}-600`} />
            <span className="text-gray-600">Best: </span>
            <span className={`text-${accentColor}-600 font-mono`}>
              {Math.floor(bestRun.time / 60000).toString().padStart(2, '0')}:
              {Math.floor((bestRun.time % 60000) / 1000).toString().padStart(2, '0')}.
              {Math.floor((bestRun.time % 1000) / 10).toString().padStart(2, '0')}
            </span>
          </div>
        )}
      </div>

      {isFinished && (
        <div className="bg-white p-6 rounded-xl shadow-lg text-center mt-4">
          <div className="flex items-center justify-center mb-4">
            <Trophy className={`text-${accentColor}-500`} size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
          <p className="text-gray-600 mb-4">
            You correctly identified {correct} out of {totalQuestions} questions.
          </p>
          {correct > highScore && (
            <p className={`text-${accentColor}-600 font-semibold mb-4`}>New High Score!</p>
          )}
          {bestRun && (
            correct >= bestRun.score && currentTime < bestRun.time ? (
              <p className={`text-${accentColor}-600 font-semibold mb-4`}>New Best Time!</p>
            ) : null
          )}
        </div>
      )}

      <button
        onClick={onRestart}
        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-${accentColor}-600 hover:text-${accentColor}-700 transition-colors`}
      >
        <RotateCcw size={16} />
        {isFinished ? 'Start New Quiz' : 'Restart Quiz'}
      </button>
    </div>
  );
}
