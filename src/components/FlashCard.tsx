import { useState, useEffect } from 'react';
import type { QuestionData } from '../types';
import { BookOpen, Check, ImageOff, X } from 'lucide-react';

interface FlashCardProps {
  question: QuestionData;
  options: string[];
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
}

export function FlashCard({ 
  question, 
  options: initialOptions, 
  onAnswer, 
  onNext,
  questionNumber,
  totalQuestions
}: FlashCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [options, setOptions] = useState<string[]>([]);

  // Set options only when question changes, ensuring uniqueness
  useEffect(() => {
    const uniqueOptions = Array.from(new Set(initialOptions));
    if (uniqueOptions.length < 4) {
      console.warn('Duplicate options detected, filling with placeholders');
      const placeholders = ['Option A', 'Option B', 'Option C', 'Option D']
        .slice(0, 4 - uniqueOptions.length);
      setOptions([...uniqueOptions, ...placeholders]);
    } else {
      setOptions(uniqueOptions);
    }
  }, [question.id, initialOptions]);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
    setImageLoaded(false);
    setImageError(false);
  }, [question]);

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    const correct = answer === question.correctAnswer;
    onAnswer(correct);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const getOptionStyles = (option: string) => {
    if (!showResult) {
      return "bg-gray-100 hover:bg-gray-200";
    }
    if (option === question.correctAnswer) {
      return "bg-green-100 border-2 border-green-500";
    }
    if (selectedAnswer === option) {
      return "bg-red-100 border-2 border-red-500";
    }
    return "bg-gray-100";
  };

  return (
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg">
      <div className="flex flex-col w-full">
        {/* Question Section - Reduced padding and more compact header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{question.question}</h3>
            <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">Question {questionNumber} of {totalQuestions}</span>
          </div>
          
          {/* Image Container with improved sizing */}
          <div className="flex flex-col items-center mb-3">
            <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden bg-transparent mb-3 max-h-[36vh]">
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
                  <div className="text-gray-400 text-center px-4">
                    <div className="text-sm font-medium mb-1">Loading Image</div>
                  </div>
                </div>
              )}
              {imageError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-400">
                  <ImageOff size={32} />
                  <p className="text-sm mt-2">Image not available</p>
                </div>
              ) : (
                <img
                  src={question.imageUrl}
                  alt="Question"
                  className={`w-full h-full object-contain ${imageLoaded ? 'block' : 'hidden'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={handleImageError}
                />
              )}
            </div>
            <p className="text-sm text-gray-600 italic text-center max-w-xl">{question.description}</p>
          </div>
        </div>

        {/* Options Section - Slightly more compact */}
        <div className="w-full p-4 border-b border-gray-100">
          <div className="grid grid-cols-1 gap-2 w-full max-w-xl mx-auto">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={showResult}
                className={`w-full min-h-[50px] p-3 text-left rounded-lg transition-colors flex items-center justify-between ${getOptionStyles(option)}`}
              >
                <span>{option}</span>
                {showResult && (
                  <span>
                    {option === question.correctAnswer && (
                      <Check className="text-green-600" size={20} />
                    )}
                    {selectedAnswer === option && option !== question.correctAnswer && (
                      <X className="text-red-600" size={20} />
                    )}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Result Section - More compact with smaller padding */}
        {showResult && (
          <div className="w-full p-4 flex flex-col gap-4">
            <div className="flex justify-center w-full">
              <button
                onClick={onNext}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {questionNumber === totalQuestions ? 'Finish Quiz' : 'Next Question'}
              </button>
            </div>

            {/* Only show "Did you know" section if there's a fact */}
            {question.fact && (
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 max-w-xl mx-auto">
                <div className="flex items-center gap-2 text-blue-800 mb-1">
                  <BookOpen size={18} />
                  <span className="font-semibold text-sm">Did you know?</span>
                </div>
                <p className="text-sm text-blue-900">{question.fact}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
