// =================================================================
// QUIZ COLLECTION - HOW TO ADD YOUR OWN QUIZZES
// =================================================================
//
// This template allows you to create multiple image-based multiple choice quizzes.
// Follow these steps to add a new quiz:
//
// 1. PREPARE YOUR IMAGES:
//    - Place all question images in the public/images/{quiz-name}/ folder
//    - Recommended image dimensions: 800x600px or similar 4:3/16:9 ratio
//    - Supported formats: PNG, JPG, SVG
//    - Example path: public/images/animals/lion.jpg will be referenced as "/images/animals/lion.jpg"
//
// 2. ADD YOUR QUIZ CONFIGURATION:
//    - Add a new quiz configuration to the QUIZ_COLLECTION below
//    - Each quiz needs:
//      * id: Unique identifier for the quiz
//      * title: Quiz title
//      * description: Brief quiz description
//      * themeColor: Choose from available theme colors
//      * service: Unique identifier for storage (use snake_case) - represents the quiz_name
//      * startScreenImage: Optional image for quiz card
//      * studyGuide: Optional URL or path to study guide image
//      * questions: Array of questions following the QuestionData format
//
// Available theme colors:
// - Basic: 'blue', 'green', 'red', 'purple', 'orange', 'pink'
// - Cool: 'sky', 'cyan', 'teal', 'indigo', 'violet'
// - Warm: 'rose', 'amber', 'fuchsia'
// - Nature: 'lime', 'emerald'
//
// =================================================================

import type { QuestionData, QuizConfig } from '../types';

interface QuizDefinition {
  config: QuizConfig;
  questions: QuestionData[];
}

// Collection of all available quizzes
export const QUIZ_COLLECTION: QuizDefinition[] = [
  {
    config: {
      id: "rfn_major",
      title: "RFN Major Surface Combatants",
      description: "Test your knowledge of Major Surface Combatants from the Russian Federation Navy",
      themeColor: 'emerald',
      service: "rfn_major",
      startScreenImage: "https://cafrank.pages.dev/services/navy-emblem.svg"
    },
    questions: [
      {
        id: 1,
        question: "What is this animal?",
        correctAnswer: "Red Panda",
        description: "This animal is native to the eastern Himalayas and southwestern China",
        fact: "Red pandas are not closely related to giant pandas - they're actually in their own unique family!",
        imageUrl: "/images/nature/red-panda.jpg"
      },
      {
        id: 2,
        question: "What type of tree is this?",
        correctAnswer: "Giant Sequoia",
        description: "Found in California's Sierra Nevada mountains",
        fact: "These trees can live for over 3,000 years!",
        imageUrl: "/images/nature/sequoia.jpg"
      }
    ]
  },
  {
    config: {
      id: "rfn_major",
      title: "RFN Minor Surface Combatants",
      description: "Test your knowledge of Minor Surface Combatants from the Russian Federation Navy",
      themeColor: 'blue',
      service: "rfn_minor",
      startScreenImage: "/images/rfn-quiz-start.png"
      // No studyGuide field, so no study guide button will appear
    },
    questions: [
      {
        id: 1,
        question: "What is this famous landmark?",
        correctAnswer: "Eiffel Tower",
        description: "An iconic iron lattice tower in Paris",
        fact: "The Eiffel Tower was originally intended to be a temporary structure!",
        imageUrl: "/images/landmarks/eiffel-tower.jpg"
      },
      {
        id: 2,
        question: "Name this ancient wonder",
        correctAnswer: "Petra",
        description: "A historic and archaeological city in Jordan",
        fact: "Petra was carved directly into rose-colored rock faces",
        imageUrl: "/images/landmarks/petra.jpg"
      }
    ]
  }
];

// =================================================================
// EXAMPLE OF ADDING A NEW QUIZ
// =================================================================
/*
// Add this to the QUIZ_COLLECTION array:
{
  config: {
    id: "music",
    title: "Musical Instruments",
    description: "Test your knowledge of musical instruments",
    themeColor: 'violet',
    service: "musical_instruments_quiz",
    startScreenImage: "/images/music/music-start.jpg",
    studyGuide: "/images/music/study-guide.jpg"  // Optional study guide image
  },
  questions: [
    {
      id: 1,
      question: "What instrument is this?",
      correctAnswer: "Grand Piano",
      description: "A large keyboard instrument",
      fact: "A modern grand piano has about 230 strings!",
      imageUrl: "/images/music/grand-piano.jpg"
    },
    // Add more questions...
  ]
}
*/

// =================================================================
// TIPS FOR CREATING GOOD QUIZZES
// =================================================================
// 1. Use a consistent theme for each quiz
// 2. Choose appropriate theme colors that match the quiz content
// 3. Organize images in separate folders for each quiz
// 4. Use high-quality, clear images
// 5. Keep questions focused and unambiguous
// 6. Add interesting facts to make the quiz educational
// 7. Test all image paths before deploying
// 8. If providing a study guide, ensure it's clear and relevant
// =================================================================
