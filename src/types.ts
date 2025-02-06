export interface QuestionData {
  id: number;
  question: string;   // The question to display
  correctAnswer: string;   // The correct answer
  description: string;    // Brief context shown with the question
  fact: string;          // Interesting fact shown after answering
  imageUrl: string;      // Path to question image
}

export interface HighScoreEntry {
  userName: string;
  score: number;
  accuracy: number;
  time: number;
  date: string;
}

export interface BestRun {
  userName: string;
  time: number;
  score: number;
  accuracy: number;
}

export interface QuizStats {
  highScore: number;
  bestRun: BestRun | null;
  highScores: HighScoreEntry[];
}

export interface QuizConfig {
  id: string;          // Unique identifier for the quiz
  title: string;
  description: string;
  themeColor: 
    | 'blue' 
    | 'green' 
    | 'sky' 
    | 'red' 
    | 'purple' 
    | 'orange' 
    | 'pink'
    | 'indigo'
    | 'teal'
    | 'rose'
    | 'amber'
    | 'lime'
    | 'cyan'
    | 'violet'
    | 'fuchsia'
    | 'emerald';
  service: string;     // Represents the quiz_name for storage and identification
  startScreenImage?: string;
  studyGuide?: string; // Optional URL or path to study guide image
  advancedChallenge?: boolean; // Indicates if this is an advanced challenge
  hidden?: boolean;    // Optional flag to hide the quiz from display
}

export interface QuizDefinition {
  config: QuizConfig;
  questions: QuestionData[];
}
