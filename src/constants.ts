import { LevelType, Lesson, GameType } from './types';

export const INITIAL_USER_STATE = {
  currentLevel: 1,
  xp: 120,
  completedLessons: ['l1-short-a'], // Mocking one completed lesson
  streak: 3
};

const DEFAULT_CONTENT = {
  listen: {
    introAudioUrl: '/audio/intro_default.mp3',
    visualFocus: { symbol: '?', ipa: '/?/', soundType: 'vowel', description: 'Default', exampleWord: 'Test' }
  },
  practice: {
    words: ['test', 'word'],
    drills: []
  },
  play: {
    gameType: 'tap-sound' as GameType,
    config: {}
  },
  assess: {
    criteria: { accuracyWeight: 0.5, fluencyWeight: 0.3, intonationWeight: 0.2 }
  }
};

export const MOCK_LESSONS: Lesson[] = [
  {
    id: 'l1-short-a',
    title: 'Short Vowel A',
    level: LevelType.SINGLE_CHAR,
    description: 'Master the /æ/ sound like in "Cat".',
    phonemes: [
      { symbol: 'a', ipa: '/æ/', soundType: 'vowel', description: 'Open your mouth wide and say "aaah"!', exampleWord: 'Apple' }
    ],
    content: {
      listen: {
        introAudioUrl: '/audio/a_intro.mp3',
        visualFocus: { symbol: 'a', ipa: '/æ/', soundType: 'vowel', description: 'Open your mouth wide and say "aaah"!', exampleWord: 'Apple' }
      },
      practice: {
        words: ['cat', 'bat', 'map', 'hat'],
        drills: [
          { type: 'repetition', prompt: 'Say "Cat"', correct: 'cat' },
          { type: 'discrimination', prompt: 'Which one is "Cat"?', correct: 'cat', distractors: ['cot', 'cut'] }
        ]
      },
      play: {
        gameType: 'pop-phoneme',
        config: { targetPhoneme: 'a', bubbleSpeed: 1.0 }
      },
      assess: {
        criteria: { accuracyWeight: 0.8, fluencyWeight: 0.2, intonationWeight: 0 }
      }
    },
    xpReward: 50
  },
  {
    id: 'l2-blending-st',
    title: 'Blend: ST',
    level: LevelType.BLENDING,
    description: 'Slide sounds together with the "ST" blend.',
    phonemes: [
      { symbol: 'st', ipa: '/st/', soundType: 'blend', description: 'Snake sound /s/ meets the tapping /t/.', exampleWord: 'Star' }
    ],
    content: {
      ...DEFAULT_CONTENT,
      listen: {
        introAudioUrl: '/audio/st_intro.mp3',
        visualFocus: { symbol: 'st', ipa: '/st/', soundType: 'blend', description: 'Snake sound /s/ meets the tapping /t/.', exampleWord: 'Star' }
      },
      practice: {
        words: ['stop', 'fast', 'nest', 'star'],
        drills: []
      }
    },
    xpReward: 75
  },
  {
    id: 'l3-silent-e',
    title: 'Magic Silent E',
    level: LevelType.RULES,
    description: 'The silent E makes the vowel say its name!',
    phonemes: [
      { symbol: 'a_e', ipa: '/eɪ/', soundType: 'vowel', description: 'Silent E jumps over one consonant to change the vowel.', exampleWord: 'Cake' }
    ],
    content: DEFAULT_CONTENT,
    xpReward: 100
  },
  {
    id: 'l4-intonation',
    title: 'Rising Intonation',
    level: LevelType.SENTENCE,
    description: 'Learn how your voice goes up for questions.',
    phonemes: [],
    content: DEFAULT_CONTENT,
    xpReward: 125
  }
] as Lesson[]; // Type assertion for now due to the generic content structure

export const WORLD_NAMES = {
  1: 'Letters Land',
  2: 'Blend Bridge',
  3: 'Rule City',
  4: 'Rhythm Road',
  5: 'Story Kingdom'
};
