import { useState, useEffect } from 'react';
import { HighScoreEntry, QuizConfig } from '../types';
import { saveGlobalScore, getGlobalScores } from '../lib/supabase';
import { MedalIcon, Trophy, Loader } from 'lucide-react';
import { Medal } from './Medal';
import { ENABLE_GLOBAL_LEADERBOARD } from '../config/features';

interface UserNameInputProps {
  onSubmit: (userName: string) => void;
  currentScore: number;
  currentTime: number;
  highScores: HighScoreEntry[];
  quizConfig: QuizConfig;
  totalQuestions: number;
}

export function UserNameInput({ 
  onSubmit, 
  currentScore, 
  currentTime, 
  highScores, 
  quizConfig,
  totalQuestions
}: UserNameInputProps) {
  const [userName, setUserName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [globalRank, setGlobalRank] = useState<number | null>(null);
  const [isLoadingGlobalRank, setIsLoadingGlobalRank] = useState(false);

  // Get potential global ranking
  useEffect(() => {
    if (!ENABLE_GLOBAL_LEADERBOARD) {
      setIsLoadingGlobalRank(false);
      return;
    }

    const fetchGlobalRank = async () => {
      setIsLoadingGlobalRank(true);
      try {
        const globalScores = await getGlobalScores(quizConfig.service);
        const position = globalScores.findIndex(score => {
          if (currentScore > score.score) return true;
          if (currentScore === score.score && currentTime < score.time) return true;
          return false;
        });
        
        setGlobalRank(position === -1 ? globalScores.length + 1 : position + 1);
      } catch (err) {
        console.error('Error checking global rank:', err);
        setGlobalRank(null);
      } finally {
        setIsLoadingGlobalRank(false);
      }
    };

    fetchGlobalRank();
  }, [currentScore, currentTime, quizConfig.service]);

  const calculateLocalRankPosition = (): number | null => {
    const position = highScores.findIndex(score => {
      if (currentScore > score.score) return true;
      if (currentScore === score.score && currentTime < score.time) return true;
      return false;
    });
    
    if (position === -1 && highScores.length < 5) {
      return highScores.length + 1;
    }
    
    return position === -1 ? null : position + 1;
  };

  const localRankPosition = calculateLocalRankPosition();
  const isTopFiveLocal = localRankPosition !== null && localRankPosition <= 5;
  const isTopHundredGlobal = ENABLE_GLOBAL_LEADERBOARD && globalRank !== null && globalRank <= 100;

  const getPositionText = (position: number): string => {
    if (position === 1) return '1st';
    if (position === 2) return '2nd';
    if (position === 3) return '3rd';
    return `${position}th`;
  };

  const getLocalPositionDisplay = (position: number) => {
    if (position <= 3) {
      return (
        <Medal 
          position={position} 
          color={position === 1 ? 'gold' : position === 2 ? 'silver' : 'bronze'} 
        />
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedUserName = userName.trim();
    
    if (!trimmedUserName) {
      setError('Please enter a name');
      return;
    }

    if (submitting) {
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      // Save the username for future reference
      localStorage.setItem('last_username', trimmedUserName);

      // Update local score through callback
      onSubmit(trimmedUserName);

      // Only attempt to save to global database if the feature is enabled
      if (ENABLE_GLOBAL_LEADERBOARD) {
        // Calculate accuracy based on total questions
        const accuracy = Math.round((currentScore / totalQuestions) * 100);
        
        const success = await saveGlobalScore({
          user_name: trimmedUserName,
          score: currentScore,
          accuracy,
          time: currentTime,
          date: new Date().toISOString()
        }, quizConfig.service);

        if (!success) {
          console.error('Failed to save global score');
          setError('Failed to save global score. Your local score has been saved.');
        }
      }
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      setError('An error occurred while saving your score. Your local score has been saved.');
    } finally {
      setSubmitting(false);
    }
  };

  const accentColor = quizConfig.themeColor;
  const isDisabled = !userName.trim() || submitting;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Enter Your Name</h3>
      
      {(isTopFiveLocal || isTopHundredGlobal) && !isLoadingGlobalRank && (
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center gap-2 text-yellow-700 mb-3">
            <Trophy size={20} className="text-yellow-600" />
            <span className="font-semibold">Congratulations!</span>
          </div>
          
          <div className="space-y-2">
            {isTopFiveLocal && (
              <div className="flex items-center gap-2 text-yellow-800">
                {getLocalPositionDisplay(localRankPosition)}
                <span>
                  You've achieved {getPositionText(localRankPosition)} place locally!
                </span>
              </div>
            )}
            
            {isTopHundredGlobal && (
              <div className="flex items-center gap-2 text-yellow-800">
                <MedalIcon size={16} className="text-yellow-600" />
                <span>
                  You've ranked {getPositionText(globalRank)} globally!
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength={30}
          required
          disabled={submitting}
        />
        <button
          type="submit"
          className={`px-6 py-2 ${
            isDisabled 
              ? 'bg-gray-300 cursor-not-allowed' 
              : `bg-${accentColor}-600 hover:bg-${accentColor}-700`
          } text-white rounded-lg transition-colors flex items-center justify-center gap-2`}
          disabled={isDisabled}
        >
          {submitting ? (
            <>
              <Loader className="animate-spin" size={16} />
              Saving Score...
            </>
          ) : (
            'Submit Score'
          )}
        </button>
      </form>
    </div>
  );
}
