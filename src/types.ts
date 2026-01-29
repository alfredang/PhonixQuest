export enum LevelType {
  SINGLE_CHAR = 'Single Character Phonics',
  BLENDING = 'Blending & Word Formation',
  RULES = 'Phonics Rules & Exceptions',
  SENTENCE = 'Sentence Reading & Intonation',
  STORY = 'Paragraph & Story Reading'
}

export enum LessonStep {
  LISTEN = 'LISTEN',
  PRACTICE = 'PRACTICE',
  PLAY = 'PLAY',
  ASSESS = 'ASSESS'
}

export interface Phoneme {
  symbol: string; // The letter(s)
  ipa: string; // IPA symbol
  soundType: 'vowel' | 'consonant' | 'digraph' | 'blend';
  description: string;
  exampleWord: string;
}

export type GameType = 'tap-sound' | 'pop-phoneme' | 'memory-match' | 'blend-drag' | 'build-word' | 'speed-race';

export interface AssessmentCriteria {
  accuracyWeight: number;
  fluencyWeight: number;
  intonationWeight: number;
}

export interface LessonContent {
  listen: {
    introAudioUrl: string;
    visualFocus: Phoneme;
  };
  practice: {
    words: string[];
    drills: { type: 'repetition' | 'discrimination', prompt: string, correct: string, distractors?: string[] }[];
  };
  play: {
    gameType: GameType;
    config: any; // Flexible config based on game type
  };
  assess: {
    criteria: AssessmentCriteria;
  };
}

export interface Lesson {
  id: string;
  title: string;
  level: LevelType;
  description: string;
  phonemes: Phoneme[];
  content: LessonContent;
  xpReward: number;
}

export interface UserProgress {
  currentLevel: number;
  xp: number;
  completedLessons: string[];
  streak: number;
}
