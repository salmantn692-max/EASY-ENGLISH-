import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Level, WordItem, UserStats, Badge } from '../types';
import {
  playSelectSound,
  playSuccessSound,
  playErrorSound,
  playComboSound,
  playVictoryFanfare,
  speakEnglishWord,
} from '../utils/audio';
import { checkAndUnlockBadges, recordDailyActivity } from '../utils/storage';
import { VictoryModal } from './VictoryModal';
import { LevelSelector } from './LevelSelector';
import { LearningRoadmap } from './LearningRoadmap';
import {
  Volume2,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Clock,
  Layers,
  HelpCircle,
  Gauge,
  Flame,
  Map,
  Grid,
  Info,
} from 'lucide-react';

interface MatchGameProps {
  levels: Level[];
  currentLevelId: number;
  setCurrentLevelId: (id: number) => void;
  stats: UserStats;
  setStats: React.Dispatch<React.SetStateAction<UserStats>>;
  isMuted: boolean;
}

interface ShuffledMalayalamItem {
  wordId: string;
  malayalam: string;
}

export const MatchGame: React.FC<MatchGameProps> = ({
  levels,
  currentLevelId,
  setCurrentLevelId,
  stats,
  setStats,
  isMuted,
}) => {
  const currentLevel = useMemo(
    () => levels.find((l) => l.id === currentLevelId) || levels[0],
    [levels, currentLevelId]
  );

  // 10 English words for the current level
  const englishWords = currentLevel.words;

  // Disordered / Shuffled Malayalam meanings on the right column
  const [shuffledMalayalam, setShuffledMalayalam] = useState<ShuffledMalayalamItem[]>([]);

  // Selection states
  const [selectedEnglishId, setSelectedEnglishId] = useState<string | null>(null);
  const [selectedMalayalamWordId, setSelectedMalayalamWordId] = useState<string | null>(null);

  // Matched pairs: Set of word IDs
  const [matchedWordIds, setMatchedWordIds] = useState<Set<string>>(new Set());

  // Error feedback pair
  const [mismatchPair, setMismatchPair] = useState<{ englishId: string; mlWordId: string } | null>(null);

  // Performance tracking
  const [mistakes, setMistakes] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Audio speech speed setting
  const [isSlowSpeech, setIsSlowSpeech] = useState<boolean>(false);

  // View Mode: 'board' (Side by Side Match) or 'roadmap' (Journey Map)
  const [viewMode, setViewMode] = useState<'board' | 'roadmap'>('board');
  const [showHowToPlay, setShowHowToPlay] = useState<boolean>(false);

  // UI modal states
  const [showVictoryModal, setShowVictoryModal] = useState<boolean>(false);
  const [victoryStats, setVictoryStats] = useState<{
    stars: number;
    duration: number;
    mistakes: number;
    xpEarned: number;
    newlyUnlocked: Badge[];
  } | null>(null);

  const [showLevelList, setShowLevelList] = useState<boolean>(false);
  const [selectedInspectWord, setSelectedInspectWord] = useState<WordItem | null>(null);

  const timerRef = useRef<number | null>(null);

  // Helper to shuffle array deterministically on level load
  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Initialize/Reset game for current level
  const initializeLevel = () => {
    const mlItems: ShuffledMalayalamItem[] = englishWords.map((w) => ({
      wordId: w.id,
      malayalam: w.malayalam,
    }));
    setShuffledMalayalam(shuffleArray(mlItems));
    setMatchedWordIds(new Set());
    setSelectedEnglishId(null);
    setSelectedMalayalamWordId(null);
    setMismatchPair(null);
    setMistakes(0);
    setCombo(0);
    setMaxCombo(0);
    setSeconds(0);
    setIsTimerRunning(true);
    setShowVictoryModal(false);
    setSelectedInspectWord(null);
  };

  useEffect(() => {
    initializeLevel();
  }, [currentLevelId]);

  // Timer
  useEffect(() => {
    if (!isTimerRunning) return;
    timerRef.current = window.setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  // Handle English Word Click
  const handleEnglishClick = (word: WordItem) => {
    if (matchedWordIds.has(word.id)) {
      speakEnglishWord(word.english, isSlowSpeech ? 0.65 : 0.85, isMuted);
      setSelectedInspectWord(word);
      return;
    }

    playSelectSound(isMuted);
    speakEnglishWord(word.english, isSlowSpeech ? 0.65 : 0.85, isMuted);
    setSelectedInspectWord(word);

    if (selectedMalayalamWordId) {
      checkMatch(word.id, selectedMalayalamWordId);
    } else {
      setSelectedEnglishId(word.id);
    }
  };

  // Handle Malayalam Card Click
  const handleMalayalamClick = (item: ShuffledMalayalamItem) => {
    if (matchedWordIds.has(item.wordId)) {
      const wordObj = englishWords.find((w) => w.id === item.wordId);
      if (wordObj) setSelectedInspectWord(wordObj);
      return;
    }

    playSelectSound(isMuted);

    if (selectedEnglishId) {
      checkMatch(selectedEnglishId, item.wordId);
    } else {
      setSelectedMalayalamWordId(item.wordId);
    }
  };

  // Check Match Logic
  const checkMatch = (engId: string, mlId: string) => {
    if (engId === mlId) {
      // Correct Match!
      playSuccessSound(isMuted);
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);
      if (newCombo > 1) {
        playComboSound(newCombo, isMuted);
      }

      const nextMatched = new Set(matchedWordIds);
      nextMatched.add(engId);
      setMatchedWordIds(nextMatched);

      setSelectedEnglishId(null);
      setSelectedMalayalamWordId(null);
      setMismatchPair(null);

      // Update XP, daily streak & stats
      const xpForMatch = 20 + newCombo * 5;
      setStats((prev) => {
        const wordsSet = new Set(prev.wordsLearned);
        wordsSet.add(engId);
        const baseUpdated = {
          ...prev,
          xp: prev.xp + xpForMatch,
          totalMatchesAttempted: prev.totalMatchesAttempted + 1,
          totalMatchesCorrect: prev.totalMatchesCorrect + 1,
          wordsLearned: Array.from(wordsSet),
        };
        return recordDailyActivity(baseUpdated);
      });

      // Check if all 10 words matched!
      if (nextMatched.size === englishWords.length) {
        handleLevelComplete(nextMatched.size, mistakes);
      }
    } else {
      // Mismatch
      playErrorSound(isMuted);
      setMistakes((prev) => prev + 1);
      setCombo(0);
      setMismatchPair({ englishId: engId, mlWordId: mlId });

      setStats((prev) => ({
        ...prev,
        totalMatchesAttempted: prev.totalMatchesAttempted + 1,
      }));

      setTimeout(() => {
        setSelectedEnglishId(null);
        setSelectedMalayalamWordId(null);
        setMismatchPair(null);
      }, 500);
    }
  };

  // Handle Full Level Completion
  const handleLevelComplete = (totalMatched: number, currentMistakes: number) => {
    setIsTimerRunning(false);
    playVictoryFanfare(isMuted);

    let starsEarned = 1;
    if (currentMistakes === 0) {
      starsEarned = 3;
    } else if (currentMistakes <= 2) {
      starsEarned = 2;
    }

    const levelBonusXp = 100 + starsEarned * 20;
    let newlyUnlockedList: Badge[] = [];

    setStats((prev) => {
      const completedSet = new Set(prev.completedLevelIds);
      completedSet.add(currentLevel.id);

      const existingStars = prev.levelStars[currentLevel.id] || 0;
      const updatedStars = {
        ...prev.levelStars,
        [currentLevel.id]: Math.max(existingStars, starsEarned),
      };

      const intermediateStats: UserStats = {
        ...prev,
        xp: prev.xp + levelBonusXp,
        completedLevelIds: Array.from(completedSet),
        levelStars: updatedStars,
      };

      const { updatedStats, newlyUnlocked } = checkAndUnlockBadges(intermediateStats, {
        levelId: currentLevel.id,
        mistakes: currentMistakes,
        durationSeconds: seconds,
      });

      newlyUnlockedList = newlyUnlocked;
      return updatedStats;
    });

    setVictoryStats({
      stars: starsEarned,
      duration: seconds,
      mistakes: currentMistakes,
      xpEarned: levelBonusXp,
      newlyUnlocked: newlyUnlockedList,
    });

    setShowVictoryModal(true);
  };

  const handleNextLevel = () => {
    setShowVictoryModal(false);
    const nextId = currentLevelId >= levels.length ? 1 : currentLevelId + 1;
    setCurrentLevelId(nextId);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="space-y-5">
      {/* View Mode Toggle: Match Board vs Learning Roadmap */}
      <div className="flex items-center justify-between gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setViewMode('board')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'board'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>മാച്ച് ബോർഡ് (Match Board)</span>
          </button>
          <button
            onClick={() => setViewMode('roadmap')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'roadmap'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>പഠന പാത (Learning Journey)</span>
          </button>
        </div>

        <button
          onClick={() => setShowHowToPlay((prev) => !prev)}
          className="text-xs text-emerald-800 hover:text-emerald-900 font-semibold px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Info className="w-3.5 h-3.5" />
          <span>എങ്ങനെ കളിക്കാം?</span>
        </button>
      </div>

      {/* How to Play Guide Drawer */}
      {showHowToPlay && (
        <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 text-xs text-slate-700 animate-in fade-in duration-150">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="font-bold text-slate-900 text-sm mb-1">
                മാച്ച് ഫോളോയിംഗ് എങ്ങനെ കളിക്കാം? (How to Play)
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>ഇടതുവശത്ത് 10 ഇംഗ്ലീഷ് വാക്കുകളും വലതുവശത്ത് അവയുടെ ക്രമം തെറ്റിച്ച മലയാള അർത്ഥങ്ങളും ഉണ്ട്.</li>
                <li>ഇംഗ്ലീഷ് വാക്ക് തൊടുമ്പോൾ അതിന്റെ യഥാർത്ഥ ഉച്ചാരണം കേൾക്കാം.</li>
                <li>തുടർന്ന് വലതുവശത്തെ ശരിയായ മലയാള അർത്ഥത്തിൽ തൊടുക. തെറ്റില്ലാതെ തുടർച്ചയായി പൊരുത്തപ്പെടുത്തിയാൽ അധിക കോംബോ പോയിന്റുകൾ ലഭിക്കും!</li>
              </ul>
            </div>
            <button
              onClick={() => setShowHowToPlay(false)}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* If Roadmap View Selected */}
      {viewMode === 'roadmap' ? (
        <LearningRoadmap
          levels={levels}
          currentLevelId={currentLevelId}
          stats={stats}
          onSelectLevel={(id) => {
            setCurrentLevelId(id);
          }}
          onStartLevel={(id) => {
            setCurrentLevelId(id);
            setViewMode('board');
          }}
        />
      ) : (
        /* Board View */
        <div className="space-y-4">
          {/* Level Header Strip */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    ലെവൽ {currentLevel.id} / 10
                  </span>
                  <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    {currentLevel.titleMl} ({currentLevel.titleEn})
                  </h1>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  {currentLevel.descriptionMl}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setShowLevelList((prev) => !prev)}
                  className="px-3 py-1.5 text-xs font-bold rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Layers className="w-3.5 h-3.5 text-slate-500" />
                  <span>ലെവൽ മാറ്റുക</span>
                </button>

                <button
                  onClick={() => setIsSlowSpeech((prev) => !prev)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl border flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors ${
                    isSlowSpeech
                      ? 'bg-amber-50 border-amber-300 text-amber-900'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                  title="ഇംഗ്ലീഷ് വാക്ക് മെല്ലെ ഉച്ചരിക്കാൻ"
                >
                  <Gauge className="w-3.5 h-3.5" />
                  <span>{isSlowSpeech ? 'മെല്ലെ (Slow)' : 'സാധാരണ'}</span>
                </button>

                <button
                  onClick={initializeLevel}
                  className="px-3 py-1.5 text-xs font-bold rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-xs"
                  title="ഈ ലെവൽ തുടക്കം മുതൽ വീണ്ടും തുടങ്ങുക"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>റീസ്റ്റാർട്ട്</span>
                </button>
              </div>
            </div>

            {/* Collapsible Level Selector */}
            {showLevelList && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <LevelSelector
                  levels={levels}
                  currentLevelId={currentLevelId}
                  stats={stats}
                  onSelectLevel={(id) => {
                    setCurrentLevelId(id);
                    setShowLevelList(false);
                  }}
                />
              </div>
            )}

            {/* Progress Metrics Strip */}
            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-slate-500 text-[11px]">പൂർത്തിയായത്</div>
                  <div className="font-extrabold text-slate-800 tabular-nums">
                    {matchedWordIds.size} / {englishWords.length} ജോടികൾ
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <Clock className="w-4 h-4 text-slate-600 shrink-0" />
                <div>
                  <div className="text-slate-500 text-[11px]">സമയം</div>
                  <div className="font-extrabold text-slate-800 tabular-nums">
                    {formatTime(seconds)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <Flame className={`w-4 h-4 shrink-0 ${combo > 1 ? 'text-amber-500 fill-amber-500 animate-bounce' : 'text-slate-400'}`} />
                <div>
                  <div className="text-slate-500 text-[11px]">കോംബോ സ്ട്രീക്ക്</div>
                  <div className="font-extrabold text-slate-800 tabular-nums">
                    {combo > 1 ? `${combo}x ബോണസ്!` : `${combo}`}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <HelpCircle className="w-4 h-4 text-slate-500 shrink-0" />
                <div>
                  <div className="text-slate-500 text-[11px]">തെറ്റുകൾ</div>
                  <div className="font-extrabold text-slate-800 tabular-nums">
                    {mistakes} തവണ
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar with Gradient Finish */}
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden shadow-inner">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(matchedWordIds.size / englishWords.length) * 100}%` }}
            />
          </div>

          {/* Match The Following Interactive Grid with Tactile 3D Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Column: English Words (10 items) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">1</span>
                  <span>ഇംഗ്ലീഷ് വാക്കുകൾ (English)</span>
                </span>
                <span className="text-xs text-slate-400">തൊട്ട് കേൾക്കാം</span>
              </div>

              <div className="space-y-2.5">
                {englishWords.map((word, index) => {
                  const isMatched = matchedWordIds.has(word.id);
                  const isSelected = selectedEnglishId === word.id;
                  const isMismatch = mismatchPair?.englishId === word.id;

                  return (
                    <div
                      key={word.id}
                      onClick={() => handleEnglishClick(word)}
                      role="button"
                      tabIndex={0}
                      className={`w-full p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between group relative select-none ${
                        isMatched
                          ? 'border-emerald-300 bg-gradient-to-r from-emerald-50 to-teal-50/50 text-emerald-950 shadow-[0_2px_0_#10b981]'
                          : isMismatch
                          ? 'border-rose-400 bg-rose-50 text-rose-900 shadow-[0_4px_0_#f43f5e] animate-shake'
                          : isSelected
                          ? 'border-emerald-600 bg-emerald-50/90 text-slate-950 shadow-[0_4px_0_#059669] translate-y-0.5 ring-2 ring-emerald-500/20'
                          : 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50/80 text-slate-800 shadow-[0_4px_0_#cbd5e1] active:translate-y-1 active:shadow-none'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-5 text-xs text-slate-400 font-bold tabular-nums shrink-0">
                          {index + 1}.
                        </span>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-base tracking-tight text-slate-900">
                              {word.english}
                            </span>
                            <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                              {word.phoneticMalayalam}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400 truncate block mt-0.5">
                            {word.partOfSpeech}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {isMatched ? (
                          <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-lg">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>മാച്ച്</span>
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakEnglishWord(word.english, isSlowSpeech ? 0.65 : 0.85, isMuted);
                            }}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-slate-100 transition-colors cursor-pointer"
                            title="ഉച്ചാരണം കേൾക്കുക"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Malayalam Disordered Meanings (10 items) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-teal-100 text-teal-800 text-xs flex items-center justify-center font-bold">2</span>
                  <span>മലയാളം അർത്ഥങ്ങൾ (Meanings)</span>
                </span>
                <span className="text-xs text-slate-400">ക്രമം മാറ്റിയവ</span>
              </div>

              <div className="space-y-2.5">
                {shuffledMalayalam.map((item, index) => {
                  const isMatched = matchedWordIds.has(item.wordId);
                  const isSelected = selectedMalayalamWordId === item.wordId;
                  const isMismatch = mismatchPair?.mlWordId === item.wordId;
                  const originalWord = englishWords.find((w) => w.id === item.wordId);

                  return (
                    <div
                      key={`${item.wordId}_${index}`}
                      onClick={() => handleMalayalamClick(item)}
                      role="button"
                      tabIndex={0}
                      className={`w-full p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between select-none ${
                        isMatched
                          ? 'border-emerald-300 bg-gradient-to-r from-emerald-50 to-teal-50/50 text-emerald-950 shadow-[0_2px_0_#10b981]'
                          : isMismatch
                          ? 'border-rose-400 bg-rose-50 text-rose-900 shadow-[0_4px_0_#f43f5e] animate-shake'
                          : isSelected
                          ? 'border-emerald-600 bg-emerald-50/90 text-slate-950 shadow-[0_4px_0_#059669] translate-y-0.5 ring-2 ring-emerald-500/20'
                          : 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50/80 text-slate-800 shadow-[0_4px_0_#cbd5e1] active:translate-y-1 active:shadow-none'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-5 text-xs text-slate-400 font-bold tabular-nums shrink-0">
                          {String.fromCharCode(65 + index)}.
                        </span>

                        <div className="min-w-0">
                          <div className="font-bold text-sm sm:text-base text-slate-900">
                            {item.malayalam}
                          </div>
                          {isMatched && originalWord && (
                            <div className="text-xs text-emerald-700 font-semibold mt-0.5">
                              ✓ {originalWord.english} ({originalWord.phoneticMalayalam})
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0">
                        {isMatched ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-emerald-400" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Selected Word Sentence In-Depth Explainer Panel */}
          {selectedInspectWord && (
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50/80 rounded-2xl border border-emerald-200 p-4 sm:p-5 shadow-xs">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-extrabold text-lg text-slate-900">
                      {selectedInspectWord.english}
                    </span>
                    <span className="text-xs text-slate-600 font-semibold">
                      [{selectedInspectWord.phoneticMalayalam}]
                    </span>
                    <span className="text-xs text-emerald-900 font-bold bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-200">
                      {selectedInspectWord.malayalam}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 space-y-1 bg-white/70 p-3 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-slate-900">ഉദാഹരണ വാക്യം:</span>
                      <span className="italic font-medium text-slate-800">"{selectedInspectWord.exampleSentenceEn}"</span>
                      <button
                        onClick={() =>
                          speakEnglishWord(
                            selectedInspectWord.exampleSentenceEn,
                            isSlowSpeech ? 0.7 : 0.85,
                            isMuted
                          )
                        }
                        className="p-1 hover:text-emerald-700 text-slate-400 cursor-pointer"
                        title="വാക്യം കേൾക്കുക"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-slate-600">
                      മലയാള അർത്ഥം: {selectedInspectWord.exampleSentenceMl}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedInspectWord(null)}
                  className="text-xs text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Victory Celebration Modal */}
      {showVictoryModal && victoryStats && (
        <VictoryModal
          level={currentLevel}
          stars={victoryStats.stars}
          durationSeconds={victoryStats.duration}
          mistakes={victoryStats.mistakes}
          xpEarned={victoryStats.xpEarned}
          newlyUnlockedBadges={victoryStats.newlyUnlocked}
          isMuted={isMuted}
          onNextLevel={handleNextLevel}
          onReplay={initializeLevel}
          onClose={() => setShowVictoryModal(false)}
        />
      )}
    </div>
  );
};
