'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserStats, Badge } from '../types';
import { soundManager } from '../components/SoundManager';
import { chaptersData } from '../data/chaptersData';
import confetti from 'canvas-confetti';

interface ProgressContextType {
  stats: UserStats;
  addXP: (amount: number) => void;
  completeQuiz: (chapterSlug: string, score: number, timeInSeconds: number, failedQuestionIds: string[]) => void;
  incrementFlashcards: () => void;
  toggleSound: () => boolean;
  toggleFavorite: (chapterSlug: string) => void;
  addStudyTime: (seconds: number) => void;
  favorites: string[];
  badges: Badge[];
  unlockedBadge: Badge | null;
  setUnlockedBadge: (badge: Badge | null) => void;
  resetProgress: () => void;
}

const DEFAULT_STATS: UserStats = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActive: null,
  quizTime: 0,
  quizzesCompleted: 0,
  successRate: 0,
  masteredChapters: [],
  weakChapters: [],
  badges: [],
  dailyQuestProgress: {
    quizDone: false,
    flashcardsDone: false,
    xpEarned: 0,
  },
  errorsHistory: {},
  history: [],
};

const ALL_BADGES: Badge[] = [
  { id: 'b_first_step', title: 'Premier pas', description: 'Gagner vos premiers points d\'XP', icon: '🎯', category: 'General' },
  { id: 'b_streak_3', title: 'Historien Assidu', description: 'Atteindre une série de 3 jours de révision', icon: '🔥', category: 'General' },
  { id: 'b_poilu', title: 'Poilu d\'Or', description: 'Compléter un quiz sur la Première Guerre avec un score parfait', icon: '🪖', category: 'PremiereGuerre' },
  { id: 'b_blum', title: 'Front Populaire', description: 'Compléter un quiz sur l\'Entre-deux-guerres avec un score parfait', icon: '✊', category: 'EntreDeuxGuerres' },
  { id: 'b_resistant', title: 'Compagnon de la Libération', description: 'Compléter un quiz sur la Seconde Guerre avec un score parfait', icon: '🛡️', category: 'SecondeGuerre' },
  { id: 'b_diplomat', title: 'Sherpa de Berlin', description: 'Compléter un quiz sur la Guerre froide avec un score parfait', icon: '🕊️', category: 'GuerreFroide' },
  { id: 'b_exam_champ', title: 'Major de Promotion', description: 'Obtenir 20/20 au Mode Examen', icon: '🎓', category: 'Examen' },
  { id: 'b_xp_1000', title: 'Encyclopédie Vivante', description: 'Atteindre un total de 1000 XP', icon: '📚', category: 'General' },
];

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stats, setStats] = useState<UserStats>(DEFAULT_STATS);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [unlockedBadge, setUnlockedBadge] = useState<Badge | null>(null);

  const checkAndUpdateStreak = (currentStats: UserStats): UserStats => {
    if (!currentStats.lastActive) return currentStats;
    
    const today = new Date().toDateString();
    const lastActiveDate = new Date(currentStats.lastActive).toDateString();
    
    if (today === lastActiveDate) {
      return currentStats;
    }
    
    const diffTime = Math.abs(new Date(today).getTime() - new Date(lastActiveDate).getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    let newStreak = currentStats.streak;
    let newDailyQuest = currentStats.dailyQuestProgress;
    
    if (diffDays === 1) {
      // Consecutive day
      newStreak += 1;
      // Reset daily quests for the new day
      newDailyQuest = { quizDone: false, flashcardsDone: false, xpEarned: 0 };
    } else if (diffDays > 1) {
      // Streak broken
      newStreak = 1;
      newDailyQuest = { quizDone: false, flashcardsDone: false, xpEarned: 0 };
    }
    
    return {
      ...currentStats,
      streak: newStreak,
      lastActive: new Date().toISOString(),
      dailyQuestProgress: newDailyQuest,
    };
  };

  // Load stats from LocalStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedStats = localStorage.getItem('brevet_history_stats');
      const savedFavorites = localStorage.getItem('brevet_history_favorites');
      
      if (savedStats) {
        try {
          const parsed = JSON.parse(savedStats);
          const merged = {
            ...DEFAULT_STATS,
            ...parsed,
            dailyQuestProgress: {
              ...DEFAULT_STATS.dailyQuestProgress,
              ...(parsed.dailyQuestProgress || {})
            },
            errorsHistory: parsed.errorsHistory || {}
          };
          // Check/update daily streak
          const updated = checkAndUpdateStreak(merged);
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setStats(updated);
        } catch (e) {
          console.error(e);
        }
      }
      
      if (savedFavorites) {
        try {
          setFavorites(JSON.parse(savedFavorites));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const addXP = (amount: number) => {
    setStats((prev) => {
      const today = new Date().toDateString();
      const lastActive = new Date().toISOString();
      
      // Handle daily streak on first action of the day
      let newStreak = prev.streak;
      if (!prev.lastActive) {
        newStreak = 1;
      } else {
        const lastActiveDate = new Date(prev.lastActive).toDateString();
        if (today !== lastActiveDate) {
          const diffTime = Math.abs(new Date(today).getTime() - new Date(lastActiveDate).getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            newStreak += 1;
          } else if (diffDays > 1) {
            newStreak = 1;
          }
        }
      }

      const newXP = prev.xp + amount;
      const prevLevel = prev.level;
      const newLevel = Math.floor(newXP / 250) + 1; // 250 XP per level
      
      if (newLevel > prevLevel) {
        setTimeout(() => {
          soundManager.playLevelUp();
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
          });
        }, 300);
      }

      // Update daily quests
      const dailyQuestProgress = { ...prev.dailyQuestProgress };
      dailyQuestProgress.xpEarned = Math.min(100, dailyQuestProgress.xpEarned + amount);

      // Check badges
      const unlockedBadges = [...prev.badges];
      
      // Check first step badge
      if (!unlockedBadges.includes('b_first_step')) {
        unlockedBadges.push('b_first_step');
        triggerBadgeUnlock('b_first_step');
      }

      // Check XP 1000 badge
      if (newXP >= 1000 && !unlockedBadges.includes('b_xp_1000')) {
        unlockedBadges.push('b_xp_1000');
        triggerBadgeUnlock('b_xp_1000');
      }

      // Check Streak 3 badge
      if (newStreak >= 3 && !unlockedBadges.includes('b_streak_3')) {
        unlockedBadges.push('b_streak_3');
        triggerBadgeUnlock('b_streak_3');
      }

      // Update History
      const todayISO = new Date().toISOString().split('T')[0];
      const historyCopy = [...prev.history];
      const todayHistoryIndex = historyCopy.findIndex((h) => h.date === todayISO);
      
      if (todayHistoryIndex >= 0) {
        historyCopy[todayHistoryIndex].xp += amount;
      } else {
        historyCopy.push({ date: todayISO, xp: amount, studyTime: 0 });
      }

      const updatedStats = {
        ...prev,
        xp: newXP,
        level: newLevel,
        streak: newStreak,
        lastActive,
        badges: unlockedBadges,
        dailyQuestProgress,
        history: historyCopy,
      };

      localStorage.setItem('brevet_history_stats', JSON.stringify(updatedStats));
      return updatedStats;
    });
  };

  const triggerBadgeUnlock = (badgeId: string) => {
    const badge = ALL_BADGES.find((b) => b.id === badgeId);
    if (badge) {
      setUnlockedBadge(badge);
    }
  };

  const completeQuiz = (
    chapterSlug: string,
    score: number,
    timeInSeconds: number,
    failedQuestionIds: string[]
  ) => {
    setStats((prev) => {
      const isPerfect = score === 20;
      const percentage = score / 20;

      // Update completed count and success rate
      const newQuizzesCompleted = prev.quizzesCompleted + 1;
      const prevTotalScore = prev.successRate * prev.quizzesCompleted;
      const newSuccessRate = Math.round((prevTotalScore + (percentage * 100)) / newQuizzesCompleted);
      
      // Spaced repetition error tracking
      const newErrorsHistory = { ...prev.errorsHistory };
      failedQuestionIds.forEach((id) => {
        newErrorsHistory[id] = (newErrorsHistory[id] || 0) + 1;
      });
      
      // Decaying error counts for questions answered correctly in this round
      // If a question is not in failedQuestionIds, but was previously failed, we decrease its score
      const currentChapterData = chaptersData.find((c) => c.slug === chapterSlug);
      if (currentChapterData) {
        currentChapterData.questions.forEach((q) => {
          if (!failedQuestionIds.includes(q.id) && newErrorsHistory[q.id]) {
            newErrorsHistory[q.id] = Math.max(0, newErrorsHistory[q.id] - 1);
            if (newErrorsHistory[q.id] === 0) {
              delete newErrorsHistory[q.id];
            }
          }
        });
      }

      // Update mastered & weak chapters
      let mastered = [...prev.masteredChapters];
      let weak = [...prev.weakChapters];

      if (score >= 16) {
        if (!mastered.includes(chapterSlug)) {
          mastered.push(chapterSlug);
        }
        weak = weak.filter((slug) => slug !== chapterSlug);
      } else if (score < 10) {
        if (!weak.includes(chapterSlug)) {
          weak.push(chapterSlug);
        }
        mastered = mastered.filter((slug) => slug !== chapterSlug);
      }

      // Check chapter specific perfect score badges
      const unlockedBadges = [...prev.badges];
      if (isPerfect) {
        if (chapterSlug === 'premiere-guerre-mondiale' && !unlockedBadges.includes('b_poilu')) {
          unlockedBadges.push('b_poilu');
          triggerBadgeUnlock('b_poilu');
        } else if (chapterSlug === 'entre-deux-guerres' && !unlockedBadges.includes('b_blum')) {
          unlockedBadges.push('b_blum');
          triggerBadgeUnlock('b_blum');
        } else if (chapterSlug === 'seconde-guerre-mondiale' && !unlockedBadges.includes('b_resistant')) {
          unlockedBadges.push('b_resistant');
          triggerBadgeUnlock('b_resistant');
        } else if (chapterSlug === 'guerre-froide' && !unlockedBadges.includes('b_diplomat')) {
          unlockedBadges.push('b_diplomat');
          triggerBadgeUnlock('b_diplomat');
        } else if (chapterSlug === 'examen-simulator' && !unlockedBadges.includes('b_exam_champ')) {
          unlockedBadges.push('b_exam_champ');
          triggerBadgeUnlock('b_exam_champ');
        }
      }

      // Daily quests
      const dailyQuestProgress = { ...prev.dailyQuestProgress };
      dailyQuestProgress.quizDone = true;

      // Study time update in history
      const todayISO = new Date().toISOString().split('T')[0];
      const historyCopy = [...prev.history];
      const todayHistoryIndex = historyCopy.findIndex((h) => h.date === todayISO);
      
      if (todayHistoryIndex >= 0) {
        historyCopy[todayHistoryIndex].studyTime += timeInSeconds;
      } else {
        historyCopy.push({ date: todayISO, xp: 0, studyTime: timeInSeconds });
      }

      const updatedStats = {
        ...prev,
        quizzesCompleted: newQuizzesCompleted,
        successRate: newSuccessRate,
        quizTime: prev.quizTime + timeInSeconds,
        errorsHistory: newErrorsHistory,
        masteredChapters: mastered,
        weakChapters: weak,
        badges: unlockedBadges,
        dailyQuestProgress,
        history: historyCopy,
      };

      localStorage.setItem('brevet_history_stats', JSON.stringify(updatedStats));
      return updatedStats;
    });
  };

  const incrementFlashcards = () => {
    setStats((prev) => {
      const dailyQuestProgress = { ...prev.dailyQuestProgress };
      dailyQuestProgress.flashcardsDone = true;
      const updated = { ...prev, dailyQuestProgress };
      localStorage.setItem('brevet_history_stats', JSON.stringify(updated));
      return updated;
    });
  };

  const toggleSound = (): boolean => {
    const newState = soundManager.toggle();
    return newState;
  };

  const toggleFavorite = (chapterSlug: string) => {
    let nextFavs: string[] = [];
    if (favorites.includes(chapterSlug)) {
      nextFavs = favorites.filter((s) => s !== chapterSlug);
    } else {
      nextFavs = [...favorites, chapterSlug];
    }
    setFavorites(nextFavs);
    localStorage.setItem('brevet_history_favorites', JSON.stringify(nextFavs));
  };

  const addStudyTime = (seconds: number) => {
    setStats((prev) => {
      const todayISO = new Date().toISOString().split('T')[0];
      const historyCopy = [...prev.history];
      const todayHistoryIndex = historyCopy.findIndex((h) => h.date === todayISO);
      
      if (todayHistoryIndex >= 0) {
        historyCopy[todayHistoryIndex].studyTime += seconds;
      } else {
        historyCopy.push({ date: todayISO, xp: 0, studyTime: seconds });
      }

      const updated = {
        ...prev,
        quizTime: prev.quizTime + seconds,
        history: historyCopy,
      };
      localStorage.setItem('brevet_history_stats', JSON.stringify(updated));
      return updated;
    });
  };

  const resetProgress = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('brevet_history_stats');
      localStorage.removeItem('brevet_history_favorites');
    }
    setStats(DEFAULT_STATS);
    setFavorites([]);
  };

  return (
    <ProgressContext.Provider
      value={{
        stats,
        addXP,
        completeQuiz,
        incrementFlashcards,
        toggleSound,
        toggleFavorite,
        addStudyTime,
        favorites,
        badges: ALL_BADGES,
        unlockedBadge,
        setUnlockedBadge,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
