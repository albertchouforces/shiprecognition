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
      description: "Test your knowledge of Major Surface Combatants from the Russian Federation Navy.",
      themeColor: 'emerald',
      service: "rfn_major",
      startScreenImage: "https://cafrank.pages.dev/services/navy-emblem.svg"
    },
    questions: [
      {
        id: 1,
        question: "Identify this ship",
        correctAnswer: "Kuznetsov CV",
        description: "This ship measures 302.3 metres (991.8 ft)",
        fact: "The Kuznetsov is undergoing refit for the Russian navy. The Kuznetsov-class ships were originally designed as aircraft cruisers with twelve launchers for SS-N-19 Shipwreck anti-ship surface-to-surface missiles.",
        imageUrl: "/images/RFN Major Combatants/Kuznetsov CV.png"
      },
      {
        id: 2,
        question: "Identify this ship",
        correctAnswer: "Kirov CGN",
        description: "This ship measures 252.0 metres (826.8 ft)",
        fact: "The Kirov-class is the largest and heaviest surface combatant in operation in the world (not including aircraft carriers and amphibious assault ships).",
        imageUrl: "/images/RFN Major Combatants/Kirov CGN.png"
      },
      {
        id: 3,
        question: "Identify this ship",
        correctAnswer: "Slava CG",
        description: "This ship measures 186.4 metres (611.5 ft)",
        fact: "The Slava-class are strike cruisers, with a strong surface warfare capability, an area air defense capability, and a self-defense antisubma­rine capability. One of the Slava-class ships, the Moskva, was sunk by Ukrainian forces on April 14, 2022.",
        imageUrl: "/images/RFN Major Combatants/Slava CG.png"
      },
      {
        id: 4,
        question: "Identify this ship",
        correctAnswer: "Grigorovich FFG",
        description: "This ship measures 124.8 metres (409.4 ft)",
        fact: "The Admiral Grigorovich-class ships are intended to complement heavier Admiral Gorshkov-class frigates. Ship's main armament are eight VLS cells for Kalibr or Oniks cruise missiles.",
        imageUrl: "/images/RFN Major Combatants/Grigorovich FFG.png"
      },
      {
        id: 5,
        question: "Identify this ship",
        correctAnswer: "Sovremennyy I DDG",
        description: "This ship measures 156.0 metres (511.8 ft)",
        fact: "The Sovremenny-class are anti-ship and anti-aircraft guided-missile destroyers. They carry a total of eight SS-N-22 Sunburn surface-to-surface missiles.",
        imageUrl: "/images/RFN Major Combatants/Sovremennyy I DDG.png"
      },
      {
        id: 6,
        question: "Identify this ship",
        correctAnswer: "Bykov FFLG",
        description: "This ship measures 94.0 metres (308.4 ft)",
        fact: "The Vasily Bykov-class incorporates signature-reduction measures to enhance stealth. One of the key features of this design is a modular mission bay, which is adaptable to carry extra troops and personnel, assault craft, unmanned systems, or a wide variety of sensors and equipment.",
        imageUrl: "/images/RFN Major Combatants/Bykov FFLG.png"
      },
      {
        id: 7,
        question: "Identify this ship",
        correctAnswer: "Gorshkov FFG",
        description: "This ship measures 135.0 metres (442.9 ft)",
        fact: "The Admiral Gorshkov-class are multi-role frigates. Their primary weaponry includes 16 VLS cells for Kalibr, Oniks, Zircon anti-ship cruise missiles or Otvet anti-submarine missiles.",
        imageUrl: "/images/RFN Major Combatants/Gorshkov FFG.png"
      },
      {
        id: 8,
        question: "Identify this ship",
        correctAnswer: "Neustrashimyy FF",
        description: "This ship measures 129.6 metres (425.2 ft)",
        fact: "The pair of Neustrashimyy-class guided-missile frigates are designed as general purpose anti-submarine warfare (ASW) platforms.",
        imageUrl: "/images/RFN Major Combatants/Neustrashimyy FF.png"
      },
      {
        id: 9,
        question: "Identify this ship",
        correctAnswer: "Udaloy I DD",
        description: "This ship measures 163.5 metres (536.4 ft)",
        fact: "The Udaloy I-class has two deck guns on the forward deck. ",
        imageUrl: "/images/RFN Major Combatants/Udaloy I DD.png"
      },
      {
        id: 10,
        question: "Identify this ship",
        correctAnswer: "Udaloy II DD",
        description: "This ship measures 163.5 metres (536.4 ft)",
        fact: "The Udaloy II-class has one deck gun on the forward deck.",
        imageUrl: "/images/RFN Major Combatants/Udaloy II DD.png"
      },
      {
        id: 11,
        question: "Identify this ship",
        correctAnswer: "Steregushchiy I FF",
        description: "This ship measures 104.5 metres (342.8 ft)",
        fact: "The Steregushchiy I-class has Kashtan CIWS and main gun on the forward deck.",
        imageUrl: "/images/RFN Major Combatants/Steregushchiy I FF.png"
      },
      {
        id: 12,
        question: "Identify this ship",
        correctAnswer: "Steregushchiy II FF",
        description: "This ship measures 104.5 metres (342.8 ft)",
        fact: "The Steregushchiy II-class  has VLS and main gun on the forward deck.",
        imageUrl: "/images/RFN Major Combatants/Steregushchiy II FF.png"
      },
      {
        id: 13,
        question: "Identify this ship",
        correctAnswer: "Stereguchshiy III FFG",
        description: "This ship measures 106.0 metres (347.8 ft)",
        fact: "Steregushchiy III has a larger VLS and main gun on the forward deck than the Steregushchiy II-class.",
        imageUrl: "/images/RFN Major Combatants/Stereguchshiy III FFG.png"
      },
      {
        id: 14,
        question: "Identify this ship",
        correctAnswer: "Gepard I FF",
        description: "This ship measures 102.1 metres (335.0 ft)",
        fact: "The Gepard I-class has a large radar dome on main mast, light raked antenna array on main mast, and light antenna array aft.",
        imageUrl: "/images/RFN Major Combatants/Gepard I FF.png"
      },
      {
        id: 15,
        question: "Identify this ship",
        correctAnswer: "Gepard II FF",
        description: "This ship measures 102.1 metres (335.0 ft)",
        fact: "The Gepard II-class has a small radar dome on its mainmast, a prominent raked array on the main mast and a prominent antenna mast with radar dome aft.",
        imageUrl: "/images/RFN Major Combatants/Gepard II FF.png"
      },
      {
        id: 16,
        question: "Identify this ship",
        correctAnswer: "Grisha III FFL",
        description: "This ship measures 71.2 metres (233.6 ft)",
        fact: "The Grisha III-class has a cluttered main antenna array compared to the Grisha V-class.",
        imageUrl: "/images/RFN Major Combatants/Grisha III FFL.png"
      },
      {
        id: 17,
        question: "Identify this ship",
        correctAnswer: "Grisha V FFL",
        description: "This ship measures 71.2 metres (233.6 ft)",
        fact: "The Grisha V-class has a cleaner main antenna array than the Grisha III-class.",
        imageUrl: "/images/RFN Major Combatants/Grisha V FFL.png"
      },
      {
        id: 18,
        question: "Identify this ship",
        correctAnswer: "Krivak II FF",
        description: "This ship measures 123.5 metres (405.2 ft)",
        fact: "The Krivak II-class’ unique features (the bow missile box, the stack and the angled mast), earned it a rap-like nickname among U.S. sailors that comes from their foreign ship silhouette identification training — 'Hot dog pack, Smokestack, Knife in the Back, two Guns in the Back — Krivak'.",
        imageUrl: "/images/RFN Major Combatants/Krivak II FF.png"
      }
    ]
  },
  {
    config: {
      id: "rfn_minor",
      title: "RFN Minor Surface Combatants",
      description: "Test your knowledge of Minor Surface Combatants from the Russian Federation Navy.",
      themeColor: 'blue',
      service: "rfn_minor",
      startScreenImage: "/images/rfn-quiz-start.png"
      // No studyGuide field, so no study guide button will appear
    },
    questions: [
      {
        id: 1,
        question: "Identify this ship",
        correctAnswer: "",
        description: "This ship measures  metres ( ft)",
        fact: "",
        imageUrl: "/images/RFN Minor Combatants/.png"
      },
      {
        id: 2,
        question: "Identify this ship",
        correctAnswer: "",
        description: "This ship measures  metres ( ft)",
        fact: "",
        imageUrl: "/images/RFN Minor Combatants/.png"
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
