// Define the possible results first
export const resultsData = {
  Adventurer: {
    title: "You are The Adventurer!",
    description: "You are bold, love to explore, and are always ready for a new challenge. You thrive on excitement and new experiences."
  },
  Thinker: {
    title: "You are The Thinker!",
    description: "You are analytical, methodical, and enjoy solving complex problems. You value logic and reason in your decisions."
  },
  Creator: {
    title: "You are The Creator!",
    description: "You are imaginative, artistic, and have a passion for bringing new ideas to life. You see the world in a unique and colorful way."
  }
};

// Now, structure the questions
export const questions = [
  {
    questionText: 'Which activity sounds most appealing on a weekend?',
    answerOptions: [
      { answerText: 'Hiking a new mountain trail', pointsFor: 'Adventurer' },
      { answerText: 'Solving a complex puzzle or reading a book', pointsFor: 'Thinker' },
      { answerText: 'Painting, writing, or visiting a museum', pointsFor: 'Creator' },
    ],
  },
  {
    questionText: 'When facing a problem, you tend to:',
    answerOptions: [
      { answerText: 'Jump in and figure it out as you go', pointsFor: 'Adventurer' },
      { answerText: 'Create a step-by-step plan before acting', pointsFor: 'Thinker' },
      { answerText: 'Brainstorm creative, unconventional solutions', pointsFor: 'Creator' },
    ],
  },
  {
    questionText: 'You are most inspired by:',
    answerOptions: [
      { answerText: 'Breathtaking landscapes and nature', pointsFor: 'Adventurer' },
      { answerText: 'Fascinating theories and knowledge', pointsFor: 'Thinker' },
      { answerText: 'Art, music, and innovative designs', pointsFor: 'Creator' },
    ],
  },
];