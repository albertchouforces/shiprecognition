import { Trash2, Medal as MedalIcon } from 'lucide-react';
import { Medal } from './Medal';
import { HighScoreEntry, QuizConfig } from '../types';

interface HighScoresListProps {
  scores: HighScoreEntry[];
  onReset: () => void;
  title?: string;
  headerBackground?: boolean;
  quizConfig: QuizConfig;
}

export function HighScoresList({ 
  scores, 
  onReset, 
  title = "Local Top Scores",
  headerBackground = true,
  quizConfig
}: HighScoresListProps) {
  const accentColor = quizConfig.themeColor;

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  const getPositionDisplay = (index: number) => {
    switch (index) {
      case 0:
        return <Medal position={1} color="gold" />;
      case 1:
        return <Medal position={2} color="silver" />;
      case 2:
        return <Medal position={3} color="bronze" />;
      default:
        return <span className="w-7 h-7 flex items-center justify-center">{index + 1}</span>;
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <MedalIcon size={20} className={`text-${accentColor}-600`} />
          {title}
        </h4>
        <button
          onClick={onReset}
          className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium text-${accentColor}-600 hover:bg-${accentColor}-50 transition-colors`}
          title="Reset Local Top Scores"
        >
          <Trash2 size={16} />
          Reset
        </button>
      </div>
      {scores.length > 0 ? (
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          <table className="w-full min-w-[300px]">
            <thead>
              <tr className={headerBackground ? `bg-${accentColor}-50` : ''}>
                <th className="px-3 py-2 text-left text-sm font-semibold text-gray-600 whitespace-nowrap"></th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-gray-600 whitespace-nowrap">Score</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-gray-600 whitespace-nowrap">Time</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={`${score.userName}-${index}`} className="border-t border-gray-100">
                  <td className="px-3 py-2 text-sm text-gray-600 whitespace-nowrap">
                    {getPositionDisplay(index)}
                  </td>
                  <td className="px-3 py-2 text-sm font-medium text-gray-800">{score.userName}</td>
                  <td className="px-3 py-2 text-sm text-gray-600 whitespace-nowrap">
                    {score.score} ({score.accuracy}%)
                  </td>
                  <td className="px-3 py-2 text-sm font-mono text-gray-600 whitespace-nowrap">
                    {formatTime(score.time)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-sm italic">No scores recorded yet</p>
      )}
    </div>
  );
}
