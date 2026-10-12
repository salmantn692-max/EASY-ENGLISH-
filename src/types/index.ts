export interface WordItem {
  id: string;
  english: string;
  malayalam: string;
  phoneticMalayalam: string; // ഉച്ചാരണം (e.g. 'അഡ്വഞ്ചർ')
  partOfSpeech: string; // 'Noun', 'Verb', 'Adjective'
  exampleSentenceEn: string;
  exampleSentenceMl: string;
}

export interface Level {
  id: number;
  titleMl: string;
  titleEn: string;
  descriptionMl: string;
  iconName: string;
  words: WordItem[]; // Exactly 10 words per level as requested
}

export interface UserStats {
  xp: number;
  completedLevelIds: number[];
  levelStars: Record<number, number>; // levelId -> 1..3 stars
  wordsLearned: string[]; // word IDs
  streakDays: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  todayActivityCount: number;
  streakHistory: string[]; // list of active dates 'YYYY-MM-DD'
  totalMatchesAttempted: number;
  totalMatchesCorrect: number;
  favoriteWordIds: string[];
  unlockedBadgeIds: string[];
}

export interface Badge {
  id: string;
  titleMl: string;
  titleEn: string;
  descMl: string;
  icon: string;
  unlocked: boolean;
  requiredMetric: string;
}

export interface SentenceExercise {
  id: string;
  sentenceEn: string;
  sentenceMl: string;
  scrambledWords: string[];
  hintMl?: string;
}

export type ActiveTab = 'match' | 'spelling' | 'memory' | 'sentence' | 'listening' | 'cards' | 'quiz' | 'progress';

