export type QuestionType =
  | 'qcm'
  | 'boolean'
  | 'trous'
  | 'relier'
  | 'ordonner'
  | 'date'
  | 'personnage'
  | 'brevet';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

export interface Question {
  id: string;
  type: QuestionType;
  difficulty: Difficulty;
  question: string;
  options?: string[]; // For QCM, relier (shuffled elements), or ordonner
  answer: string | boolean | string[] | number[] | { [key: string]: string };
  explanation: string;
  mnemonic?: string;
  trap?: string;
  image?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category?: 'militaire' | 'politique' | 'social' | 'diplomatique';
}

export interface MindMapNode {
  id: string;
  label: string;
  description?: string;
  parentId?: string; // Root if undefined
  color?: string;
}

export interface Character {
  id: string;
  name: string;
  dates: string;
  role: string;
  importance: string;
  image?: string;
}

export interface DateKey {
  date: string;
  event: string;
  explanation: string;
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Chapter {
  id: string;
  slug: string;
  number: number;
  subject: 'histoire' | 'geographie';
  title: string;
  subtitle: string;
  introduction: string;
  courseContent: string; // Markdown or HTML
  summary: string; // One-page summary markdown or HTML
  timeline: TimelineEvent[];
  mindMap: MindMapNode[];
  characters: Character[];
  dates: DateKey[];
  flashcards: Flashcard[];
  questions: Question[];
  anecdotes: string[]; // "Le savais-tu ?"
  comparisonTable?: {
    headers: string[];
    rows: { title: string; values: string[] }[];
  };
}

export interface UserStats {
  xp: number;
  level: number;
  streak: number;
  lastActive: string | null;
  quizTime: number; // in seconds
  quizzesCompleted: number;
  successRate: number; // percentage
  masteredChapters: string[]; // slugs
  weakChapters: string[]; // slugs
  badges: string[]; // ids of unlocked badges
  dailyQuestProgress: {
    quizDone: boolean;
    flashcardsDone: boolean;
    xpEarned: number; // progress toward e.g. 100 XP
  };
  errorsHistory: { [questionId: string]: number }; // questionId -> failed count for spaced repetition
  history: { date: string; xp: number; studyTime: number }[]; // for progress chart
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}
