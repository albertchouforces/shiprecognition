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
//      * advancedChallenge: Optional boolean to mark as advanced challenge
//      * hidden: Optional boolean to hide the quiz from display
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
      themeColor: 'amber',
      service: "rfn_major",
      startScreenImage: "images/rfn-quiz-start.png"
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
        fact: "The Udaloy I-class has two deck guns on the forward deck.",
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
      themeColor: 'orange',
      service: "rfn_minor",
      startScreenImage: "images/minor-quiz-start.png"
      // No studyGuide field, so no study guide button will appear
    },
    questions: [
      {
        id: 1,
        question: "Identify this ship",
        correctAnswer: "Dergach PGGA",
        description: "This ship measures 64.5 metres (211.6 ft)",
        fact: "The Dergach-class has both a sidewall hovercraft and a catamaran hull. It is one of the few types of military surface effect ships built solely for combat purposes, rather than troop landing or transport.",
        imageUrl: "/images/RFN Minor Combatants/Dergach PGGA.png"
      },
      {
        id: 2,
        question: "Identify this ship",
        correctAnswer: "Uragan PGG",
        description: "This ship measures 67.0 metres (219.8 ft)",
        fact: "The Uragan-class guided missile corvette is a more seaworthy, blue-water complement to the Buyan-M-class corvettes, designed for the littoral zone.Its primary weaponry consists of 8 VLS cells capable of carrying either Kaliber or Yakhont anti-ship cruise missiles.",
        imageUrl: "/images/RFN Minor Combatants/Uragan PGG.png"
      },
      {
        id: 3,
        question: "Identify this ship",
        correctAnswer: "Tarantul II PGG",
        description: "This ship measures 56.1 metres (184.1 ft)",
        fact: "The Tarantul II-class has a larger main mast array and smaller forward deck gun than the Tarantul III-class.",
        imageUrl: "/images/RFN Minor Combatants/Tarantul II PGG.png"
      },
      {
        id: 4,
        question: "Identify this ship",
        correctAnswer: "Tarantul III PGG",
        description: "This ship measures 56.1 metres (184.1 ft)",
        fact: "The Tarantul III-class has a larger deck gun and a smaller main mast array with a lighter stepped mast astern of the main array.",
        imageUrl: "/images/RFN Minor Combatants/Tarantul III PGG.png"
      },
      {
        id: 5,
        question: "Identify this ship",
        correctAnswer: "Nanuchka III PGG",
        description: "This ship measures  metres ( ft)",
        fact: "The Nanuchka III-class has a smaller main radar dome, smaller rear gun, and messier antenna mast than the Nanuchka IV-class.",
        imageUrl: "/images/RFN Minor Combatants/Nanuchka III PGG.png"
      },
      {
        id: 6,
        question: "Identify this ship",
        correctAnswer: "Nanuchka IV PGG",
        description: "This ship measures 59.3 metres (194.6 ft)",
        fact: "The Nanuchka IV-class has a larger main radar dome, larger rear gun, and neater main antenna mast than the Nanuchka III-class.",
        imageUrl: "/images/RFN Minor Combatants/Nanuchka IV PGG.png"
      },
      {
        id: 7,
        question: "Identify this ship",
        correctAnswer: "Buyan-M",
        description: "This ship measures 74.1 metres (243.1 ft)",
        fact: "The Buyan M-class missile corvettes use stealth technology and have 8 VLS cells for either Kalibr or Yakhont anti-ship cruise missiles. Due to their small tonnage, they can operate even within Russia's extensive inland waterway system. They have a raked superstructure and are longer amidships than the Buyan-class gunboats.",
        imageUrl: "/images/RFN Minor Combatants/Buyan-M.png"
      },
      {
        id: 8,
        question: "Identify this ship",
        correctAnswer: "Smolnyy PST",
        description: "This ship measures 138.0 metres (452.8 ft)",
        fact: "The Smolnyy-class are two training ships built for the Soviet Navy in the late 1970s. The ships were designed to provide seagoing training facilities. The ships have accommodation for 30 instructors and 300 cadets. They have basic armament for self-defense and patrol duties.",
        imageUrl: "/images/RFN Minor Combatants/Smolnyy PST.png"
      },
      {
        id: 9,
        question: "Identify this ship",
        correctAnswer: "Buyan",
        description: "This ship measures 61.5 metres (201.8 ft)",
        fact: "The Buyan-class gunboats have a more angular superstructure and are smaller amidships than the Buyan-M class. They have a draft of less than 10 feet.",
        imageUrl: "/images/RFN Minor Combatants/Buyan.png"
      }
    ]
  },
  {
    config: {
      id: "rfn_combined",
      title: "Combined RFN Surface Combatants",
      description: "Ready for an advanced challenge? Test your knowledge of both Major and Minor Surface Combatants from the Russian Federation Navy.",
      themeColor: 'red',
      service: "rfn_combined",
      startScreenImage: "images/rfn-quiz-start.svg",
	  advancedChallenge: true
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
        fact: "The Udaloy I-class has two deck guns on the forward deck.",
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
      },
      {
        id: 19,
        question: "Identify this ship",
        correctAnswer: "Dergach PGGA",
        description: "This ship measures 64.5 metres (211.6 ft)",
        fact: "The Dergach-class has both a sidewall hovercraft and a catamaran hull. It is one of the few types of military surface effect ships built solely for combat purposes, rather than troop landing or transport.",
        imageUrl: "/images/RFN Minor Combatants/Dergach PGGA.png"
      },
      {
        id: 20,
        question: "Identify this ship",
        correctAnswer: "Uragan PGG",
        description: "This ship measures 67.0 metres (219.8 ft)",
        fact: "The Uragan-class guided missile corvette is a more seaworthy, blue-water complement to the Buyan-M-class corvettes, designed for the littoral zone.Its primary weaponry consists of 8 VLS cells capable of carrying either Kaliber or Yakhont anti-ship cruise missiles.",
        imageUrl: "/images/RFN Minor Combatants/Uragan PGG.png"
      },
      {
        id: 21,
        question: "Identify this ship",
        correctAnswer: "Tarantul II PGG",
        description: "This ship measures 56.1 metres (184.1 ft)",
        fact: "The Tarantul II-class has a larger main mast array and smaller forward deck gun than the Tarantul III-class.",
        imageUrl: "/images/RFN Minor Combatants/Tarantul II PGG.png"
      },
      {
        id: 22,
        question: "Identify this ship",
        correctAnswer: "Tarantul III PGG",
        description: "This ship measures 56.1 metres (184.1 ft)",
        fact: "The Tarantul III-class has a larger deck gun and a smaller main mast array with a lighter stepped mast astern of the main array.",
        imageUrl: "/images/RFN Minor Combatants/Tarantul III PGG.png"
      },
      {
        id: 23,
        question: "Identify this ship",
        correctAnswer: "Nanuchka III PGG",
        description: "This ship measures  metres ( ft)",
        fact: "The Nanuchka III-class has a smaller main radar dome, smaller rear gun, and messier antenna mast than the Nanuchka IV-class.",
        imageUrl: "/images/RFN Minor Combatants/Nanuchka III PGG.png"
      },
      {
        id: 24,
        question: "Identify this ship",
        correctAnswer: "Nanuchka IV PGG",
        description: "This ship measures 59.3 metres (194.6 ft)",
        fact: "The Nanuchka IV-class has a larger main radar dome, larger rear gun, and neater main antenna mast than the Nanuchka III-class.",
        imageUrl: "/images/RFN Minor Combatants/Nanuchka IV PGG.png"
      },
      {
        id: 25,
        question: "Identify this ship",
        correctAnswer: "Buyan-M",
        description: "This ship measures 74.1 metres (243.1 ft)",
        fact: "The Buyan M-class missile corvettes use stealth technology and have 8 VLS cells for either Kalibr or Yakhont anti-ship cruise missiles. Due to their small tonnage, they can operate even within Russia's extensive inland waterway system. They have a raked superstructure and are longer amidships than the Buyan-class gunboats.",
        imageUrl: "/images/RFN Minor Combatants/Buyan-M.png"
      },
      {
        id: 26,
        question: "Identify this ship",
        correctAnswer: "Smolnyy PST",
        description: "This ship measures 138.0 metres (452.8 ft)",
        fact: "The Smolnyy-class are two training ships built for the Soviet Navy in the late 1970s. The ships were designed to provide seagoing training facilities. The ships have accommodation for 30 instructors and 300 cadets. They have basic armament for self-defense and patrol duties.",
        imageUrl: "/images/RFN Minor Combatants/Smolnyy PST.png"
      },
      {
        id: 28,
        question: "Identify this ship",
        correctAnswer: "Buyan",
        description: "This ship measures 61.5 metres (201.8 ft)",
        fact: "The Buyan-class gunboats have a more angular superstructure and are smaller amidships than the Buyan-M class. They have a draft of less than 10 feet.",
        imageUrl: "/images/RFN Minor Combatants/Buyan.png"
      }
    ]
  },
  {
    config: {
      id: "irin",
      title: "IRIN Naval Combatants and Support Ships",
      description: "Test your knowledge of multi-role naval combatants and support ships from the Islamic Republic of Iran Navy.",
      themeColor: 'green',
      service: "irn",
      startScreenImage: "images/irin-quiz-start.png",
	  advancedChallenge: false
    },
    questions: [
      {
        id: 1,
        question: "Identify this ship",
        correctAnswer: "Mk III PB",
        description: "This ship measures 19.8 metres (64.9 ft)",
        fact: "Iran purchased 20 of these boats between 1975 and 1976, of which 11 survived the Iran-Iraq war. More lightly armed than their US counterparts, Iranian MK III's had replaced their forward 12.7mm machine gun with a 20mm cannon by 1995.",
        imageUrl: "/images/IRIN/MK III PB.png"
      },
      {
        id: 2,
        question: "Identify this ship",
        correctAnswer: "FB-40 PB",
        description: "This ship measures 12.94 metres (42.5 ft)",
        fact: "They are equipped with either a central machine gun mounted on the forward or two machine guns mounted on each side of the boat",
        imageUrl: "/images/IRIN/FB 40 PB.png"
      },
      {
        id: 3,
        question: "Identify this ship",
        correctAnswer: "Cape PTG",
        description: "This ship measures 29 metres (95.1 ft)",
        fact: "These ships  are modified versions of the American Cape-class vessels, built by the United States Coast Guard Yard in the 1950s.",
        imageUrl: "/images/IRIN/CAPE PTG.png"
      },
      {
        id: 4,
        question: "Identify this ship",
        correctAnswer: "PGM-71 PTG",
        description: "This ship measures 30.8 metres (64.9 ft)",
        fact: "Original armament of the ships reportedly included five guns: 12.7mm and 20mm each two and one 40mm.",
        imageUrl: "/images/IRIN/PGM-71 PTG.png"
      },
      {
        id: 5,
        question: "Identify this ship",
        correctAnswer: "Combattante II Mod PTG",
        description: "This ship measures 47 metres (154.2 ft)",
        fact: "This fast attack craft was built in France for export. Iran ordered 12 ships, nine of which were delivered in 1977 and 1978, and three of which were delayed until 1981 as a result of the 1979 Islamic Revolution.",
        imageUrl: "/images/IRIN/COMBATTANTE II MOD PTG.png"
      },
      {
        id: 6,
        question: "Identify this ship",
        correctAnswer: "Hendijan AG",
        description: "This ship measures 47 metres (154.2 ft)",
        fact: "For navigation, Hendijan-class vessels rely on Raccal Decca or China RM 1070A on I-band. The missiles use active radar homing to 120 km (65 nmi) at 0.9 Mach.",
        imageUrl: "/images/IRIN/HENDIJAN AG.png"
      },
      {
        id: 7,
        question: "Identify this ship",
        correctAnswer: "Delvar AE",
        description: "This ship measures 64 metres (209.97 ft)",
        fact: "It uses two shafts, powered by two MAN G6V 23.5/33ATL diesel engines. This system was designed to provide 1,560 horsepower (1.16 MW) for an estimated top speed of 11 knots (20 km/h; 13 mph).",
        imageUrl: "/images/IRIN/DELVAR AE.png"
      },
      {
        id: 8,
        question: "Identify this ship",
        correctAnswer: "PF-103 PSG",
        description: "This ship measures 82.83 metres (275 ft)",
        fact: "The Bayandor class comprises four Iranian patrol frigates originally built for the US Navy as the PF-103 class. It was named after Gholamali Bayandor. Only two are currently in service.",
        imageUrl: "/images/IRIN/PF 103 PSG.png"
      },
      {
        id: 9,
        question: "Identify this ship",
        correctAnswer: "Delvar AO",
        description: "This ship measures 64 metres (209.97 ft)",
        fact: "For navigation, Delvar-class vessels rely on Decca 1226 on IJ-band.",
        imageUrl: "/images/IRIN/DELVAR AO.png"
      },
      {
        id: 10,
        question: "Identify this ship",
        correctAnswer: "Delvar AK",
        description: "This ship measures 64 metres (209.97 ft)",
        fact: "Delvar-class vessels are reportedly equipped with one 20 mm GAM-BO1 cannon and two 12.7 mm machine guns. The ships have since been rearmed.",
        imageUrl: "/images/IRIN/DELVAR AK.png"
      },
      {
        id: 11,
        question: "Identify this ship",
        correctAnswer: "Vosper Mk 5 FFL",
        description: "This ship measures 94.5 metres (310 ft)",
        fact: "Three still remain in service. A fourth was sunk by the U.S. Navy in 1988.",
        imageUrl: "/images/IRIN/VOSPER MK5 FFL.png"
      },
      {
        id: 12,
        question: "Identify this ship",
        correctAnswer: "Hengham LST",
        description: "This ship measures 92.96 metres (305 ft)",
        fact: "This landing craft was designed for the special circumstances of an opposed amphibious landing, in which troops have to be landed onto beaches rather than at a port or quayside. They possess a shallow draft so that they could get close to the water’s edge and land troops in only shallow water, and a ramp that enabled the troops to exit the craft rapidly and go into action the moment they did so.",
        imageUrl: "/images/IRIN/HENGHAM LST.png"
      },
      {
        id: 13,
        question: "Identify this ship",
        correctAnswer: "Nahang SSM",
        description: "This ship measures 25 metres (82 ft)",
        fact: "The Nahang is an Iranian-made class of midget submarine designed for shallow water operations.",
        imageUrl: "/images/IRIN/NAHANG SSM.png"
      },
      {
        id: 14,
        question: "Identify this ship",
        correctAnswer: "Yono SSM",
        description: "This ship measures 28 metres (91.8) ft)",
        fact: "The Ghadir-class is also referred to as a sub-class of the Yono-class, suggesting that the submarines may be based on North Korean technology. North Korea may have built the first one or two Iranian Yono-class submarines, but the exact level of North Korean involvement in design and production is unknown.",
        imageUrl: "/images/IRIN/YONO SSM.png"
      },
      {
        id: 15,
        question: "Identify this ship",
        correctAnswer: "Jamaran FFLG",
        description: "This ship measures 95 metres (311.18 ft)",
        fact: "Jamaran is the lead ship of the Iranian Moudge-class frigate launched in early 2010. Iran has stated that the design and building of Jamaran was among the greatest achievements of the Iranian Navy and the ship's launch marks a major technological leap for Iran's naval industries.",
        imageUrl: "/images/IRIN/JAMARAN FFLG.png"
      },
      {
        id: 16,
        question: "Identify this ship",
        correctAnswer: "Bandar Abbas AOR",
        description: "This ship measures 108 metres (354.33 ft)",
        fact: "Bandar Abbas is a class that includes a pair of fleet supply ships.",
        imageUrl: "/images/IRIN/BANDAR ABBAS AOR.png"
      },
      {
        id: 17,
        question: "Identify this ship",
        correctAnswer: "Fateh SSC",
        description: "This ship measures 50 metres (164 ft)",
        fact: "Fateh is an Iranian designed class of semi-heavy submarines. The Iranian media reported that Fateh class subs can operate more than 200 metres (660 ft) below the sea surface for nearly five weeks.",
        imageUrl: "/images/IRIN/FATEH SSC.png"
      },
      {
        id: 18,
        question: "Identify this ship",
        correctAnswer: "Kilo SS",
        description: "This ship measures 80 metres (262.4 ft)",
        fact: "The Kilo-class submarines are a group of diesel-electric attack submarines. About forty of these Russian made vessels have been exported to several countries, including 3 to Iran.",
        imageUrl: "/images/IRIN/KILO SS.png"
      },
      {
        id: 19,
        question: "Identify this ship",
        correctAnswer: "Hendijan PPG",
        description: "This ship measures 47 metres (154.2 ft)",
        fact: "Ships of the class are tenders that are used for coastal surveillance and one of them is used as a training ship.",
        imageUrl: "/images/IRIN/HENDIJAN PPG.png"
      },
      {
        id: 20,
        question: "Identify this ship",
        correctAnswer: "Kharg AOR",
        description: "This ship measures 207.20 metres (679.79 ft)",
        fact: "The International Institute of Strategic Studies (IISS) classified Kharg as an AORH, i.e. fleet replenishment oiler with replenishment at sea (RAS) capability and hangar.",
        imageUrl: "/images/IRIN/KHARG AOR.png"
      }
    ]
  },
  {
    config: {
      id: "plan_combatants",
      title: "PLAN Naval Combatants",
      description: "Test your knowledge of naval combatants from the People's Liberation Army Navy of China.",
      themeColor: 'red',
      service: "plan_combatants",
      startScreenImage: "images/PLAN-quiz-start.png",
	  advancedChallenge: false
    },
    questions: [
      {
        id: 1,
        question: "Identify this ship",
        correctAnswer: "Renhai CG",
        description: "This ship measures 180 metres",
        fact: "The Renhai-class cruiser is the largest surface combatant ever built by China and is equipped with 112 vertical launch cells—more than any ship outside of the U.S. Navy.",
        imageUrl: "/images/PLAN Naval Combatants/Renhai CG.jpg"
      },
      {
        id: 2,
        question: "Identify this ship",
        correctAnswer: "Luyang III Mod DDG",
        description: "This ship measures 162 metres",
        fact: "The Luyang III MOD destroyer features an extended flight deck to support operations of the new Z-20 naval helicopter.",
        imageUrl: "/images/PLAN Naval Combatants/Luyang III MOD DDG.jpg"
      },
      {
        id: 3,
        question: "Identify this ship",
        correctAnswer: "Fujian CV",
        description: "This ship measures 315 metres",
        fact: "Fujian is China’s first aircraft carrier to use an electromagnetic catapult launch system, placing it technologically closer to the U.S. Navy’s Gerald R. Ford-class carriers.",
        imageUrl: "/images/PLAN Naval Combatants/Fujian CV.jpg"
      },
      {
        id: 4,
        question: "Identify this ship",
        correctAnswer: "Kuznetsov Mod CV",
        description: "This ship measures 315 metres",
        fact: "China's Kuznetsov MOD carrier, also known as Liaoning, was originally a Soviet ship left unfinished and later refurbished by China into a fully operational training and combat carrier.",
        imageUrl: "/images/PLAN Naval Combatants/Kuznetsov - Kuznetsov MOD CV.jpg"
      },
      {
        id: 5,
        question: "Identify this ship",
        correctAnswer: "Luyang III DDG",
        description: "This ship measures 157 metres",
        fact: "Luyang III is China's first destroyer to field a fully flush-mounted vertical launch system capable of launching surface-to-air, anti-ship, and land-attack missiles.",
        imageUrl: "/images/PLAN Naval Combatants/Luyang III DDG.jpg"
      },
      {
        id: 6,
        question: "Identify this ship",
        correctAnswer: "Luyang II DDG",
        description: "This ship measures 157 metres",
        fact: "Luyang II was the PLAN’s first destroyer to integrate a phased-array radar and long-range surface-to-air missiles, giving it true fleet air defense capability.",
        imageUrl: "/images/PLAN Naval Combatants/Luyang II DDG.jpg"
      },
      {
        id: 7,
        question: "Identify this ship",
        correctAnswer: "Luyang I DDG",
        description: "This ship measures 157 metres",
        fact: "Luyang I marked China's transition toward modern multi-role destroyers and was one of the first to use Western-style hull shaping and missile systems.",
        imageUrl: "/images/PLAN Naval Combatants/Luyang I DDG.jpg"
      },
      {
        id: 8,
        question: "Identify this ship",
        correctAnswer: "Luzhou DDG",
        description: "This ship measures 156 metres",
        fact: "Luzhou-class destroyers were the only PLAN surface ships to use the Russian S-300F long-range air defense missile system.",
        imageUrl: "/images/PLAN Naval Combatants/Luzhou DDG.jpg"
      },
      {
        id: 9,
        question: "Identify this ship",
        correctAnswer: "Luhai DDG",
        description: "This ship measures 153 metres",
        fact: "The Luhai-class was a one-off prototype and, at the time of commissioning, was the largest Chinese-built warship ever constructed.",
        imageUrl: "/images/PLAN Naval Combatants/Luhai DDG.jpg"
      },
      {
        id: 10,
        question: "Identify this ship",
        correctAnswer: "Sovremennyy II DDG",
        description: "This ship measures 156 metres",
        fact: "Sovremennyy II destroyers were purchased from Russia with upgraded electronics and are armed with supersonic Sunburn missiles designed to penetrate carrier battle group defenses.",
        imageUrl: "/images/PLAN Naval Combatants/Sovremennyy II DDG.jpg"
      },
      {
        id: 11,
        question: "Identify this ship",
        correctAnswer: "Sovremennyy III DDG",
        description: "This ship measures 156 metres",
        fact: "Sovremennyy III refers to further modernized versions reportedly refitted in China with domestic sensors and fire control systems.",
        imageUrl: "/images/PLAN Naval Combatants/Sovremennyy III DDG.jpg"
      },
      {
        id: 12,
        question: "Identify this ship",
        correctAnswer: "Luhu DD",
        description: "This ship measures 142 metres",
        fact: "The Luhu-class was the PLAN’s first modern destroyer designed with international cooperation, including American gas turbines—before relations cooled in the late 1990s.",
        imageUrl: "/images/PLAN Naval Combatants/Luhu DD.jpg"
      },
      {
        id: 13,
        question: "Identify this ship",
        correctAnswer: "Jiangkai III FFG",
        description: "This ship measures 150 metres",
        fact: "Jiangkai III frigates are reported to be the first Chinese frigates equipped with active electronically scanned array (AESA) radar and integrated electric propulsion.",
        imageUrl: "/images/PLAN Naval Combatants/Jiangkai III FFG.jpg"
      },
      {
        id: 14,
        question: "Identify this ship",
        correctAnswer: "Jiangkai II Mod FFG",
        description: "This ship measures 140 metres",
        fact: "The Jiangkai II MOD features refined radar and sensor suites, increasing its performance in anti-air and anti-submarine roles.",
        imageUrl: "/images/PLAN Naval Combatants/Jiangkai II MOD FFG.jpg"
      },
      {
        id: 15,
        question: "Identify this ship",
        correctAnswer: "Jiangkai II FFG",
        description: "This ship measures 133 metres",
        fact: "Jiangkai II frigates are the PLAN’s most numerous modern frigates, often seen escorting aircraft carriers and conducting overseas deployments.",
        imageUrl: "/images/PLAN Naval Combatants/Jiangkai II FFG.jpg"
      },
      {
        id: 16,
        question: "Identify this ship",
        correctAnswer: "Jiangkai I FF",
        description: "This ship measures 133 metres",
        fact: "Jiangkai I was the first Chinese frigate to incorporate stealth shaping and quieter propulsion—laying the groundwork for future stealth designs.",
        imageUrl: "/images/PLAN Naval Combatants/Jiangkai I FF.jpg"
      },
      {
        id: 17,
        question: "Identify this ship",
        correctAnswer: "Jiangwei II Upgrade FF",
        description: "This ship measures 112 metres",
        fact: "Upgraded Jiangwei II frigates have been retrofitted with new sensors and roles, including training, coast guard, and drone support.",
        imageUrl: "/images/PLAN Naval Combatants/Jiangwei II Upgrade FF.jpg"
      },
      {
        id: 18,
        question: "Identify this ship",
        correctAnswer: "Jiangwei II FF",
        description: "This ship measures 112 metres",
        fact: "Jiangwei II frigates were a major enhancement over their predecessors, incorporating dual helicopter hangars and improved missile systems.",
        imageUrl: "/images/PLAN Naval Combatants/Jiangwei II FF.jpg"
      },
      {
        id: 19,
        question: "Identify this ship",
        correctAnswer: "Jiangdao FFL",
        description: "This ship measures 90 metres",
        fact: "Jiangdao-class corvettes are highly automated and designed for high-endurance patrol and anti-submarine missions near China’s coastline and maritime claims.",
        imageUrl: "/images/PLAN Naval Combatants/Jiangdao FFL.jpg"
      },
      {
        id: 20,
        question: "Identify this ship",
        correctAnswer: "Houbei PTG",
        description: "This ship measures 46 metres",
        fact: "The Houbei-class missile boats are fast, stealthy catamarans armed with eight YJ-83 anti-ship missiles and intended for swarm attacks in coastal waters.",
        imageUrl: "/images/PLAN Naval Combatants/Houbei PTG.jpg"
      },
      {
        id: 21,
        question: "Identify this ship",
        correctAnswer: "Houxin PGG",
        description: "This ship measures 65 metres",
        fact: "Houxin-class gunboats carry 6-tube ASW rocket launchers and are tasked with coastal anti-submarine patrols despite their compact size.",
        imageUrl: "/images/PLAN Naval Combatants/Houxin PGG.jpg"
      },
      {
        id: 22,
        question: "Identify this ship",
        correctAnswer: "Houjian PGG",
        description: "This ship measures 62 metres",
        fact: "Houjian-class boats feature a helicopter landing deck—a rarity among fast attack craft—and were designed with Western input.",
        imageUrl: "/images/PLAN Naval Combatants/Houjian PGG.jpg"
      },
      {
        id: 23,
        question: "Identify this ship",
        correctAnswer: "Haiqing PC",
        description: "This ship measures 62 metres",
        fact: "Haiqing-class patrol craft are some of the most numerous PLAN coastal vessels and are often used for law enforcement and sovereignty patrols.",
        imageUrl: "/images/PLAN Naval Combatants/Haiqing PC.jpg"
      },
      {
        id: 24,
        question: "Identify this ship",
        correctAnswer: "Shanghai III PC",
        description: "This ship measures 42 metres",
        fact: "The Shanghai III patrol craft are based on a 1960s design and have been widely exported to many countries across Asia and Africa.",
        imageUrl: "/images/PLAN Naval Combatants/Shanghai III PC.jpg"
      }
    ]
  },
  {
    config: {
      id: "plan_amphibious_mine",
      title: "PLAN Non-Combatant Support Ships",
      description: "Test your knowledge of amphibious and mine warfare support ships from the People's Liberation Army Navy of China.",
      themeColor: 'blue',
      service: "plan_amphibious_mine",
      startScreenImage: "images/PLAN-quiz-start2.png",
	  advancedChallenge: false
    },
    questions: [
      {
        id: 1,
        question: "Identify this ship",
        correctAnswer: "Yushen LHA",
        description: "This ship measures 240 metres",
        fact: "The Yushen-class amphibious assault ship is the largest non-carrier vessel in the PLAN, capable of carrying helicopters, landing craft, and a full marine battalion.",
        imageUrl: "/images/PLAN Amphibious Ships/Yushen LHA.jpg"
      },
      {
        id: 2,
        question: "Identify this ship",
        correctAnswer: "Yuzhao LPD",
        description: "This ship measures 212 metres",
        fact: "Yuzhao-class dock landing ships are China’s primary blue-water amphibious platforms, often seen leading overseas naval diplomacy missions.",
        imageUrl: "/images/PLAN Amphibious Ships/Yuzhao LPD.jpg"
      },
      {
        id: 3,
        question: "Identify this ship",
        correctAnswer: "Yulan LHA",
        description: "This ship measures 260 metres",
        fact: "Yulan-class ships are rumored to be smaller follow-ons or testbeds for future amphibious helicopter carriers, possibly for regional operations.",
        imageUrl: "/images/PLAN Amphibious Ships/Yulan LHA.jpg"
      },
      {
        id: 4,
        question: "Identify this ship",
        correctAnswer: "Yuting II LST",
        description: "This ship measures 120 metres",
        fact: "The Yuting II tank landing ships feature a stern well deck for launching amphibious vehicles and are often deployed in South China Sea exercises.",
        imageUrl: "/images/PLAN Amphibious Ships/Yuting II LST.jpg"
      },
      {
        id: 5,
        question: "Identify this ship",
        correctAnswer: "Yuting I LST",
        description: "This ship measures 120 metres",
        fact: "Yuting I-class landing ships were among China’s first modern LSTs and helped transition the PLAN into larger amphibious operations in the 1990s.",
        imageUrl: "/images/PLAN Amphibious Ships/Yuting I LST.jpg"
      },
      {
        id: 6,
        question: "Identify this ship",
        correctAnswer: "Yukan LST",
        description: "This ship measures 120 metres",
        fact: "The Yukan-class is one of the longest-serving amphibious ship classes in the PLAN, with over a dozen units still active as transports and auxiliaries.",
        imageUrl: "/images/PLAN Amphibious Ships/Yukan LST.jpg"
      },
      {
        id: 7,
        question: "Identify this ship",
        correctAnswer: "Yuyi LCMA",
        description: "This ship measures 30 metres",
        fact: "Yuyi-class air-cushion landing craft are launched from larger amphibious ships like the Yushen-class and are modeled after Western LCACs.",
        imageUrl: "/images/PLAN Amphibious Ships/Yuyi LCMA.jpg"
      },
      {
        id: 8,
        question: "Identify this ship",
        correctAnswer: "Yubu LCU",
        description: "This ship measures 36 metres",
        fact: "Yubu-class utility landing craft are used for shuttling troops, equipment, and vehicles from shore to ship in large-scale landing exercises.",
        imageUrl: "/images/PLAN Amphibious Ships/Yubu LCU.jpg"
      },
      {
        id: 9,
        question: "Identify this ship",
        correctAnswer: "Yunshu LSM",
        description: "This ship measures 86 metres",
        fact: "The Yunshu-class ships are medium landing ships designed for regional amphibious operations, capable of beach landings with armored vehicles.",
        imageUrl: "/images/PLAN Amphibious Ships/Yunshu LSM.jpg"
      },
      {
        id: 10,
        question: "Identify this ship",
        correctAnswer: "Yudeng LSM",
        description: "This ship measures 87 metres",
        fact: "Yudeng-class ships are older medium landing vessels now often repurposed for training, logistics, or as targets in naval exercises.",
        imageUrl: "/images/PLAN Amphibious Ships/Yudeng LSM.jpg"
      },
      {
        id: 11,
        question: "Identify this ship",
        correctAnswer: "Yuhai Mod LSM",
        description: "This ship measures 58 metres",
        fact: "Yuhai-class vessels are small coastal amphibious ships, used for rapid island landings in close-to-shore environments such as the South China Sea.",
        imageUrl: "/images/PLAN Amphibious Ships/Yuhai - Yuhai MOD LSM.jpg"
      },
      {
        id: 12,
        question: "Identify this ship",
        correctAnswer: "Yubei LCU",
        description: "This ship measures 65 metres",
        fact: "Yubei-class landing craft are small utility vessels with a bow ramp and flat deck, ideal for transporting light vehicles and troops in coastal areas.",
        imageUrl: "/images/PLAN Amphibious Ships/Yubei LCU.jpg"
      },
      {
        id: 13,
        question: "Identify this ship",
        correctAnswer: "Pomornik LCUA",
        description: "This ship measures 56 metres",
        fact: "The Pomornik-class is the world’s largest military hovercraft, originally Soviet-built and purchased by China to deploy troops and armor at high speed over water and beaches.",
        imageUrl: "/images/PLAN Amphibious Ships/Pomornik LCUA.jpg"
      },
      {
        id: 14,
        question: "Identify this ship",
        correctAnswer: "Yunnan II LCM/YFU",
        description: "This ship measures 28 metres",
        fact: "Yunnan II-class landing craft are used for logistics and supply missions, particularly in remote island outposts, and can operate in very shallow waters.",
        imageUrl: "/images/PLAN Amphibious Ships/Yunnan II LCM - YFU.jpg"
      },
      {
        id: 15,
        question: "Identify this ship",
        correctAnswer: "Wochi MCM (Early)",
        description: "This ship measures 66 metres",
        fact: "The early Wochi-class mine countermeasure ships were among the PLAN's first dedicated minehunters, using traditional mechanical sweeping gear and basic sonar systems.",
        imageUrl: "/images/PLAN Mine Warefare Ships/WOCHI MCM.jpg"
      },
      {
        id: 16,
        question: "Identify this ship",
        correctAnswer: "Wosao I MSC",
        description: "This ship measures 45 metres",
        fact: "The Wosao I-class coastal mine sweepers were designed for shallow water operations and were among the most numerous mine warfare vessels in the PLAN during the Cold War.s",
        imageUrl: "/images/PLAN Mine Warefare Ships/WOSAO I MSC.jpg"
      },
      {
        id: 17,
        question: "Identify this ship",
        correctAnswer: "Wochi MCM (lLte)",
        description: "This ship measures 70 metres",
        fact: "The late Wochi-class ships feature advanced minehunting sonar and remotely operated vehicles (ROVs), significantly improving the PLAN’s modern mine countermeasure capability.",
        imageUrl: "/images/PLAN Mine Warefare Ships/WOCHI MCM (late).jpg"
      },
      {
        id: 18,
        question: "Identify this ship",
        correctAnswer: "Wosao II MSC",
        description: "This ship measures 48 metres",
        fact: "Wosao II-class sweepers are upgraded variants with better electronics and mine detection systems, extending their usefulness in both coastal defense and escort operations.",
        imageUrl: "/images/PLAN Mine Warefare Ships/Wosao II MSC.jpg"
      },
      {
        id: 19,
        question: "Identify this ship",
        correctAnswer: "Wozang MHS",
        description: "This ship measures 55-58 metres",
        fact: "The Wozang-class minehunters use non-magnetic hulls and modern variable-depth sonar, marking China’s transition to NATO-standard MCM design philosophies.",
        imageUrl: "/images/PLAN Mine Warefare Ships/Wozang MHS.jpg"
      },
      {
        id: 20,
        question: "Identify this ship",
        correctAnswer: "Wonang MSI",
        description: "This ship measures 30 metres",
        fact: "The Wonang-class inshore mine sweepers are small, maneuverable craft ideal for clearing minefields in harbors, river mouths, and littoral waters—critical for amphibious staging areas.",
        imageUrl: "/images/PLAN Mine Warefare Ships/Wonang MSI.jpg"
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
    studyGuide: "/images/music/study-guide.jpg",  // Optional study guide image
    advancedChallenge: false,  // Optional advanced challenge flag
    hidden: false  // Optional hidden flag
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
// 9. Use advancedChallenge flag for more difficult quizzes
// 10. Use hidden flag to temporarily disable quizzes
// =================================================================
