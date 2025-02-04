import { BookOpen } from 'lucide-react';
import { QuizConfig } from '../types';

interface QuizHeaderProps {
  quizConfig: QuizConfig;
}

export function QuizHeader({ quizConfig }: QuizHeaderProps) {
  const accentColor = quizConfig.themeColor;
  
  return (
    <div className="w-full bg-white shadow-sm mb-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-3">
          <BookOpen className={`text-${accentColor}-600`} size={24} />
          <h1 className={`text-2xl font-bold text-${accentColor}-600`}>
            {quizConfig.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
