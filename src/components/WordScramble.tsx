import React, { useState, useEffect } from 'react';
import { Level, WordItem, UserStats } from '../types';
import {
  speakEnglishWord,
  playSuccessSound,
  playErrorSound,
  playSelectSound,
  playVictoryFanfare,
  playComboSound,
} from '../utils/audio';
import { recordDailyActivity, checkAndUnlockBadges } from '../utils/storage';
import {
  Volume2,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Lightbulb,
  ArrowRight,
  Shuffle,
  Trophy,
  Flame,
  Award,
  ChevronLeft,
  ChevronRight,
  Layers,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface WordScrambleProps {
  levels: Level[];
  currentLevelId: number;
  setCurrentLevelId: (id: number) => void;
  stats: UserStats;
  setStats: React.Dispatch<React.SetStateAction<UserStats>>;
  isMuted: boolean;
}

interface LetterTile {
  id: string; // unique ID to track duplicate letters
  char: string;
}

export const WordScramble: React.FC<WordScrambleProps> = ({
  levels,
  currentLevelId,
  setCurrentLevelId,
  setStats,
  isMuted,
}) => {
  const currentLevel = levels.find((l) => l.id === currentLevelId) || levels[0];
  const words = currentLevel.words;

  const [wordIndex, setWordIndex] = useState<number>(0);
  const currentWord: WordItem = words[wordIndex] || words[0];

  // Letters available to choose and placed letters
  const [availableLetters, setAvailableLetters] = useState<LetterTile[]>([]);
  const [placedLetters, setPlacedLetters] = useState<LetterTile[]>([]);

  // State flags
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isShakeError, setIsShakeError] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [showLevelSummary, setShowLevelSummary] = useState<boolean>(false);
  const [hintCount, setHintCount] = useState<number>(3);

  // Clean word without punctuation/spaces for spelling
  const targetWordUpper = currentWord.english.toUpperCase().replace(/[^A-Z]/g, '');

  // Initialize or change word
  useEffect(() => {
    setupWord(currentWord);
  }, [wordIndex, currentLevelId]);

  const setupWord = (wordItem: WordItem) => {
    setIsCompleted(false);
    setIsShakeError(false);
    setPlacedLetters([]);

    const cleanWord = wordItem.english.toUpperCase().replace(/[^A-Z]/g, '');
    const tiles: LetterTile[] = cleanWord.split('').map((char, idx) => ({
      id: `${char}_${idx}_${Math.random().toString(36).substring(2, 5)}`,
      char,
    }));

    // Scramble the letters ensure it's not already in target order
    let scrambled = [...tiles].sort(() => 0.5 - Math.random());
    if (scrambled.map((t) => t.char).join('') === cleanWord && cleanWord.length > 2) {
      scrambled = scrambled.reverse();
    }

    setAvailableLetters(scrambled);
  };

  // Handle letter placement
  const handleSelectLetter = (tile: LetterTile) => {
    if (isCompleted) return;
    playSelectSound(isMuted);

    const nextPlaced = [...placedLetters, tile];
    const nextAvailable = availableLetters.filter((t) => t.id !== tile.id);

    setPlacedLetters(nextPlaced);
    setAvailableLetters(nextAvailable);

    // If all letters placed, check word!
    if (nextPlaced.length === targetWordUpper.length) {
      const spelled = nextPlaced.map((t) => t.char).join('');
      if (spelled === targetWordUpper) {
        // Correct!
        handleWordSuccess();
      } else {
        // Mismatch
        playErrorSound(isMuted);
        setIsShakeError(true);
        setTimeout(() => {
          setIsShakeError(false);
        }, 600);
      }
    }
  };

  // Remove a placed letter back to available
  const handleRemoveLetter = (tile: LetterTile) => {
    if (isCompleted) return;
    playSelectSound(isMuted);
    setPlacedLetters((prev) => prev.filter((t) => t.id !== tile.id));
    setAvailableLetters((prev) => [...prev, tile]);
  };

  const handleClearAll = () => {
    playSelectSound(isMuted);
    setupWord(currentWord);
  };

  const handleShuffleAvailable = () => {
    playSelectSound(isMuted);
    setAvailableLetters((prev) => [...prev].sort(() => 0.5 - Math.random()));
  };

  const handleUseHint = () => {
    if (isCompleted || availableLetters.length === 0 || hintCount <= 0) return;
    playComboSound(2, isMuted);
    setHintCount((c) => Math.max(0, c - 1));

    // Find the next correct letter needed
    const nextNeededChar = targetWordUpper[placedLetters.length];
    // Find this char in available letters
    const matchingTile = availableLetters.find((t) => t.char === nextNeededChar);

    if (matchingTile) {
      handleSelectLetter(matchingTile);
    } else {
      // If user had wrong letters placed, reset first incorrect one
      setupWord(currentWord);
    }
  };

  const handleWordSuccess = () => {
    setIsCompleted(true);
    playSuccessSound(isMuted);
    const newCombo = combo + 1;
    setCombo(newCombo);
    setScore((s) => s + 50 + newCombo * 10);

    // Audio pronounce the completed word
    speakEnglishWord(currentWord.english, 0.85, isMuted);

    // Record user progress
    setStats((prev) => {
      const wordsSet = new Set(prev.wordsLearned);
      wordsSet.add(currentWord.id);
      const updated = {
        ...prev,
        xp: prev.xp + 25 + newCombo * 5,
        wordsLearned: Array.from(wordsSet),
      };
      const activeStats = recordDailyActivity(updated);
      return checkAndUnlockBadges(activeStats).updatedStats;
    });
  };

  const handleNextWord = () => {
    playSelectSound(isMuted);
    if (wordIndex < words.length - 1) {
      setWordIndex((prev) => prev + 1);
    } else {
      // Finished all 10 words of this level!
      playVictoryFanfare(isMuted);
      setShowLevelSummary(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
      // Mark level as completed in stats
      setStats((prev) => {
        const completed = new Set(prev.completedLevelIds);
        completed.add(currentLevelId);
        const stars = { ...prev.levelStars, [currentLevelId]: 3 };
        const updated = {
          ...prev,
          completedLevelIds: Array.from(completed),
          levelStars: stars,
          xp: prev.xp + 100,
        };
        const active = recordDailyActivity(updated);
        return checkAndUnlockBadges(active).updatedStats;
      });
    }
  };

  const handleRestartLevel = () => {
    setWordIndex(0);
    setScore(0);
    setCombo(0);
    setHintCount(3);
    setShowLevelSummary(false);
    setupWord(words[0]);
  };

  const handleNextLevel = () => {
    if (currentLevelId < levels.length) {
      setCurrentLevelId(currentLevelId + 1);
      setWordIndex(0);
      setScore(0);
      setCombo(0);
      setHintCount(3);
      setShowLevelSummary(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Level bar and stats strip */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700 font-bold">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  സ്പെല്ലിംഗ് മാസ്റ്റർ • ലെവൽ {currentLevel.id}
                </span>
                <span className="text-xs text-slate-400">({wordIndex + 1}/{words.length})</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {currentLevel.titleMl}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold self-end sm:self-center">
            {combo > 1 && (
              <div className="flex items-center gap-1 text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-lg animate-pulse">
                <Flame className="w-4 h-4 fill-orange-500" />
                <span>{combo}x കോംബോ!</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>{score} പോയിന്റ്</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-4">
          <div
            className="bg-amber-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${((wordIndex + (isCompleted ? 1 : 0)) / words.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Game Card */}
      {!showLevelSummary ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 text-center relative overflow-hidden">
          {/* Audio & Word Hint */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 rounded-full text-xs font-semibold">
              <span>{currentWord.partOfSpeech}</span>
            </div>

            {/* Malayalam Meaning */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {currentWord.malayalam}
            </h3>

            {/* Phonetic Pronunciation Guide */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <span>ഉച്ചാരണം:</span>
              <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {currentWord.phoneticMalayalam}
              </span>
              <button
                onClick={() => speakEnglishWord(currentWord.english, 0.85, isMuted)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer"
                title="ഉച്ചാരണം കേൾക്കുക"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Target Word Placed Letter Slots */}
          <div className="py-4">
            <p className="text-xs text-slate-400 mb-2">ഇംഗ്ലീഷ് അക്ഷരങ്ങൾ ക്രമത്തിൽ തിരഞ്ഞെടുക്കുക:</p>
            <div
              className={`flex items-center justify-center gap-2 flex-wrap min-h-[58px] p-2 rounded-xl transition-all ${
                isShakeError ? 'animate-bounce bg-red-50 ring-2 ring-red-400' : ''
              } ${isCompleted ? 'bg-emerald-50 ring-2 ring-emerald-500/30' : ''}`}
            >
              {Array.from({ length: targetWordUpper.length }).map((_, idx) => {
                const placed = placedLetters[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => placed && handleRemoveLetter(placed)}
                    disabled={!placed || isCompleted}
                    className={`w-11 h-12 sm:w-13 sm:h-14 rounded-xl font-extrabold text-lg sm:text-xl flex items-center justify-center transition-all cursor-pointer ${
                      placed
                        ? isCompleted
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-400 scale-105'
                          : 'bg-slate-900 text-white shadow-md active:scale-95 hover:bg-slate-800'
                        : 'border-2 border-dashed border-slate-300 bg-slate-50 text-transparent'
                    }`}
                  >
                    {placed ? placed.char : ''}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Available Letter Tiles Pool */}
          {!isCompleted && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-center gap-2.5 flex-wrap max-w-lg mx-auto">
                {availableLetters.map((tile) => (
                  <button
                    key={tile.id}
                    onClick={() => handleSelectLetter(tile)}
                    className="w-11 h-12 sm:w-13 sm:h-14 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xl shadow-[0_4px_0_#b45309] active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
                  >
                    {tile.char}
                  </button>
                ))}
              </div>

              {/* Utility Tools: Hint, Shuffle, Clear */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  onClick={handleUseHint}
                  disabled={hintCount <= 0}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-40"
                  title="അടുത്ത അക്ഷരം കാണിക്കുക"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>സഹായം ({hintCount})</span>
                </button>

                <button
                  onClick={handleShuffleAvailable}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="അക്ഷരങ്ങൾ മാറ്റുക"
                >
                  <Shuffle className="w-3.5 h-3.5 text-slate-500" />
                  <span>മാറ്റുക</span>
                </button>

                <button
                  onClick={handleClearAll}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="ആദ്യത്തിൽ നിന്ന് തുടങ്ങുക"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>ക്ലിയർ</span>
                </button>
              </div>
            </div>
          )}

          {/* Completed Feedback Banner */}
          {isCompleted && (
            <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-emerald-950 space-y-3 animate-fade-in">
              <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <span className="text-lg">ശരിയുത്തരം! ഗ്രേറ്റ് ജോബ്!</span>
              </div>

              <div className="text-sm font-medium text-slate-700">
                <p className="italic font-semibold text-slate-900">"{currentWord.exampleSentenceEn}"</p>
                <p className="text-xs text-slate-500">{currentWord.exampleSentenceMl}</p>
              </div>

              <button
                onClick={handleNextWord}
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>{wordIndex < words.length - 1 ? 'അടുത്ത വാക്ക് (Next Word)' : 'ലെവൽ പൂർത്തിയാക്കൂ!'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Level Summary Card */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md text-center max-w-md mx-auto space-y-5">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center text-amber-600">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900">അഭിനന്ദനങ്ങൾ!</h3>
            <p className="text-sm text-slate-500 mt-1">
              ലെവൽ {currentLevel.id} സ്പെല്ലിംഗ് ചലഞ്ചിലെ എല്ലാ 10 വാക്കുകളും നിങ്ങൾ വിജയകരമായി പൂർത്തിയാക്കി!
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex justify-around">
            <div>
              <span className="text-xs text-slate-400">ആകെ സ്കോർ</span>
              <p className="text-xl font-extrabold text-amber-600">{score}</p>
            </div>
            <div className="w-px bg-slate-200" />
            <div>
              <span className="text-xs text-slate-400">പഠിച്ച വാക്കുകൾ</span>
              <p className="text-xl font-extrabold text-emerald-600">10 / 10</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleRestartLevel}
              className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>വീണ്ടും കളിക്കുക</span>
            </button>

            {currentLevelId < levels.length && (
              <button
                onClick={handleNextLevel}
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>അടുത്ത ലെവൽ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
