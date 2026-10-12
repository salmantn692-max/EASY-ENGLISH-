import { UserStats, Badge } from '../types';
import { BADGES_LIST } from '../data/vocabulary';

const STORAGE_KEY = 'kerala_english_learner_progress_v1';

export function getTodayDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function getYesterdayDateString(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
}

const DEFAULT_STATS: UserStats = {
  xp: 0,
  completedLevelIds: [],
  levelStars: {},
  wordsLearned: [],
  streakDays: 1,
  longestStreak: 1,
  lastActiveDate: getTodayDateString(),
  todayActivityCount: 0,
  streakHistory: [getTodayDateString()],
  totalMatchesAttempted: 0,
  totalMatchesCorrect: 0,
  favoriteWordIds: [],
  unlockedBadgeIds: [],
};

export function loadUserStats(): UserStats {
  if (typeof window === 'undefined') return DEFAULT_STATS;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveUserStats(DEFAULT_STATS);
      return DEFAULT_STATS;
    }

    const parsed: Partial<UserStats> = JSON.parse(raw);
    const today = getTodayDateString();
    const yesterday = getYesterdayDateString();

    const streakDays = parsed.streakDays || 1;
    let longestStreak = parsed.longestStreak || streakDays;
    let currentStreak = streakDays;
    let todayCount = parsed.todayActivityCount || 0;
    const history = Array.isArray(parsed.streakHistory) ? [...parsed.streakHistory] : [];

    // Check streak continuation against calendar dates
    if (parsed.lastActiveDate !== today) {
      todayCount = 0; // Fresh day!
      if (parsed.lastActiveDate === yesterday) {
        // Active yesterday, so streak is active waiting for today's activity or retained
        currentStreak = streakDays;
      } else if (parsed.lastActiveDate) {
        // Missed one or more days
        currentStreak = 1;
      }
    }

    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
    }

    const normalizedStats: UserStats = {
      xp: parsed.xp || 0,
      completedLevelIds: parsed.completedLevelIds || [],
      levelStars: parsed.levelStars || {},
      wordsLearned: parsed.wordsLearned || [],
      streakDays: currentStreak,
      longestStreak: longestStreak,
      lastActiveDate: parsed.lastActiveDate || today,
      todayActivityCount: todayCount,
      streakHistory: history.length > 0 ? history : [today],
      totalMatchesAttempted: parsed.totalMatchesAttempted || 0,
      totalMatchesCorrect: parsed.totalMatchesCorrect || 0,
      favoriteWordIds: parsed.favoriteWordIds || [],
      unlockedBadgeIds: parsed.unlockedBadgeIds || [],
    };

    saveUserStats(normalizedStats);
    return normalizedStats;
  } catch {
    return DEFAULT_STATS;
  }
}

export function recordDailyActivity(stats: UserStats): UserStats {
  const today = getTodayDateString();
  const yesterday = getYesterdayDateString();

  let streak = stats.streakDays;
  let todayCount = stats.todayActivityCount;

  if (stats.lastActiveDate !== today) {
    if (stats.lastActiveDate === yesterday) {
      streak += 1;
    } else {
      streak = 1;
    }
    todayCount = 1;
  } else {
    todayCount += 1;
  }

  const longest = Math.max(stats.longestStreak || 1, streak);
  const historySet = new Set(stats.streakHistory || []);
  historySet.add(today);

  // Keep last 30 days
  const updatedHistory = Array.from(historySet).slice(-30);

  const updated: UserStats = {
    ...stats,
    streakDays: streak,
    longestStreak: longest,
    lastActiveDate: today,
    todayActivityCount: todayCount,
    streakHistory: updatedHistory,
  };

  saveUserStats(updated);
  return updated;
}

export function saveUserStats(stats: UserStats): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // Storage quota or disabled
  }
}

export function checkAndUnlockBadges(
  stats: UserStats,
  levelCompletedContext?: { levelId: number; mistakes: number; durationSeconds: number }
): { updatedStats: UserStats; newlyUnlocked: Badge[] } {
  const currentUnlocked = new Set(stats.unlockedBadgeIds);
  const newlyUnlocked: Badge[] = [];

  BADGES_LIST.forEach((badge) => {
    if (currentUnlocked.has(badge.id)) return;

    let shouldUnlock = false;

    if (badge.id === 'first_match' && stats.totalMatchesCorrect >= 1) {
      shouldUnlock = true;
    }

    if (badge.id === 'perfect_ten' && levelCompletedContext && levelCompletedContext.mistakes === 0) {
      shouldUnlock = true;
    }

    if (badge.id === 'speed_demon' && levelCompletedContext && levelCompletedContext.durationSeconds <= 45) {
      shouldUnlock = true;
    }

    if (badge.id === 'streak_3' && stats.streakDays >= 3) {
      shouldUnlock = true;
    }

    if (badge.id === 'level_5_master' && stats.completedLevelIds.length >= 5) {
      shouldUnlock = true;
    }

    if (badge.id === 'vocabulary_king' && stats.completedLevelIds.length >= 10) {
      shouldUnlock = true;
    }

    if (badge.id === 'grand_scholar' && stats.completedLevelIds.length >= 20) {
      shouldUnlock = true;
    }

    if (badge.id === 'sentence_builder_pro' && stats.wordsLearned.length >= 30) {
      shouldUnlock = true;
    }


    if (shouldUnlock) {
      currentUnlocked.add(badge.id);
      newlyUnlocked.push({ ...badge, unlocked: true });
    }
  });

  const updatedStats: UserStats = {
    ...stats,
    unlockedBadgeIds: Array.from(currentUnlocked)
  };

  saveUserStats(updatedStats);
  return { updatedStats, newlyUnlocked };
}

