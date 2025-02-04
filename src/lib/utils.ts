/**
 * Fisher-Yates shuffle algorithm for arrays
 */
export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Get random unique options for multiple choice questions
 */
export const getRandomOptions = (
  allPossibleAnswers: string[], 
  correctAnswer: string, 
  count: number
): string[] => {
  // Remove the correct answer from the pool of possible answers
  const otherAnswers = allPossibleAnswers.filter(answer => 
    answer.toLowerCase() !== correctAnswer.toLowerCase()
  );

  // Shuffle the other answers and take the required number
  const randomWrongAnswers = shuffleArray(otherAnswers)
    .slice(0, count - 1);

  // Combine with correct answer and shuffle again
  return shuffleArray([...randomWrongAnswers, correctAnswer]);
};
