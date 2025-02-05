import { useState } from 'react';
import { ImageOff, Play, Trophy, BookOpen } from 'lucide-react';
import type { QuizConfig, QuizStats } from '../types';
import { HighScoresList } from './HighScoresList';

interface QuizCardProps {
  config: QuizConfig;
  stats: QuizStats;
  onStart: () => void;
  onResetScores: () => void;
}

export function QuizCard({ config, stats, onStart, onResetScores }: QuizCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showStudyGuide, setShowStudyGuide] = useState(false);

  const handleReset = () => {
    onResetScores();
    // Add reload as fallback
    window.location.reload();
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Quiz Image with transparent background */}
        {config.startScreenImage && (
          <div className="w-full h-48 relative bg-transparent flex items-center justify-center">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="text-sm font-medium">Loading Image</div>
                </div>
              </div>
            )}
            {imageError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                <ImageOff size={32} />
                <p className="text-sm mt-2">Preview not available</p>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4 bg-transparent">
                <img
                  src={config.startScreenImage}
                  alt={config.title}
                  className={`max-w-full max-h-full object-contain ${imageLoaded ? 'block' : 'hidden'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              </div>
            )}
          </div>
        )}

        {/* Quiz Content */}
        <div className="p-6">
          <h3 className={`text-xl font-bold text-${config.themeColor}-600 mb-2 text-center`}>
            {config.title}
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            {config.description}
          </p>

          {/* Study Guide Button */}
          {config.studyGuide && (
            <div className="mb-6 flex justify-center">
              <button
                onClick={() => setShowStudyGuide(true)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-${config.themeColor}-600 hover:bg-${config.themeColor}-50 rounded-lg transition-colors`}
              >
                <BookOpen size={16} />
                View Study Guide
              </button>
            </div>
          )}

          <div className="mb-6">
            <HighScoresList
              scores={stats.highScores}
              onReset={handleReset}
              title="Local Top Scores"
              headerBackground={false}
              quizConfig={config}
            />
          </div>

          <button
            onClick={onStart}
            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-${config.themeColor}-600 hover:bg-${config.themeColor}-700 text-white rounded-lg transition-colors font-semibold`}
          >
            <Play size={20} />
            Start Quiz
          </button>
        </div>
      </div>

      {/* Study Guide Modal */}
      {showStudyGuide && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className={`p-4 border-b border-gray-200 flex justify-between items-center bg-${config.themeColor}-50`}>
              <h3 className={`text-lg font-semibold text-${config.themeColor}-600`}>Study Guide</h3>
              <button
                onClick={() => setShowStudyGuide(false)}
                className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-4 overflow-auto">
              <img
                src={config.studyGuide}
                alt="Study Guide"
                className="max-w-full h-auto mx-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
                  target.className = 'w-16 h-16 mx-auto text-gray-400';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
