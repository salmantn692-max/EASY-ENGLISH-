import React, { useState, useEffect } from 'react';
import { Level, WordItem, UserStats } from '../types';
import {
  speakEnglishWord,
  playSuccessSound,
  playErrorSound,
  playSelectSound,
  playVictoryFanfare,
} from '../utils/audio';
import { recordDailyActivity, checkAndUnlockBadges } from '../utils/storage';
import {
  Sparkles,
  Trophy,
  RotateCcw,
  Volume2,
  CheckCircle2,
  Star,
  Timer,
  Layers,
  Flame,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MemoryMatchProps {
  levels: Level[];
  currentLevelId: number;
  setCurrentLevelId: (id: number) => void;
  stats: UserStats;
  setStats: React.Dispatch<React.SetStateAction<UserStats>>;
  isMuted: boolean;
}

interface MemoryCard {
  cardId: string;
  wordId: string;
  type: 'english' | 'malayalam';
  text: string;
  subtext?: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const MemoryMatch: React.FC<MemoryMatchProps> = ({
  levels,
  currentLevelId,
  setCurrentLevelId,
  setStats,
  isMuted,
}) => {
  const currentLevel = levels.find((l) => l.id === currentLevelId) || levels[0];

  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCardIds, setFlippedCardIds] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [moves, setMoves] = useState<number>(0);
  const [matchesFound, setMatchesFound] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);

  // We choose 6 pairs (12 cards) for a fast, punchy round
  const PAIRS_COUNT = 6;

  // Initialize cards whenever level changes
  useEffect(() => {
    initGame();
  }, [currentLevelId]);

  // Timer tick
  useEffect(() => {
    let interval: number;
    if (isTimerActive && !isGameWon) {
      interval = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, isGameWon]);

  const initGame = () => {
    const selectedWords = [...currentLevel.words]
      .sort(() => 0.5 - Math.random())
      .slice(0, PAIRS_COUNT);

    const generatedCards: MemoryCard[] = [];

    selectedWords.forEach((word) => {
      // English card
      generatedCards.push({
        cardId: `en_${word.id}_${Math.random().toString(36).substring(2, 6)}`,
        wordId: word.id,
        type: 'english',
        text: word.english,
        subtext: word.phoneticMalayalam,
        isFlipped: false,
        isMatched: false,
      });

      // Malayalam card
      generatedCards.push({
        cardId: `ml_${word.id}_${Math.random().toString(36).substring(2, 6)}`,
        wordId: word.id,
        type: 'malayalam',
        text: word.malayalam,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle cards
    setCards(generatedCards.sort(() => 0.5 - Math.random()));
    setFlippedCardIds([]);
    setIsProcessing(false);
    setMoves(0);
    setMatchesFound(0);
    setSeconds(0);
    setIsTimerActive(false);
    setIsGameWon(false);
  };

  const handleCardClick = (card: MemoryCard) => {
    if (isProcessing || card.isFlipped || card.isMatched) return;

    if (!isTimerActive) {
      setIsTimerActive(true);
    }

    playSelectSound(isMuted);

    // If it's an English card, optionally speak it
    if (card.type === 'english') {
      speakEnglishWord(card.text, 0.85, isMuted);
    }

    // Flip this card
    const updatedCards = cards.map((c) =>
      c.cardId === card.cardId ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);

    const nextFlipped = [...flippedCardIds, card.cardId];
    setFlippedCardIds(nextFlipped);

    if (nextFlipped.length === 2) {
      setIsProcessing(true);
      setMoves((m) => m + 1);

      const firstCard = updatedCards.find((c) => c.cardId === nextFlipped[0])!;
      const secondCard = updatedCards.find((c) => c.cardId === nextFlipped[1])!;

      // Check if both belong to same wordId and different types
      if (firstCard.wordId === secondCard.wordId && firstCard.type !== secondCard.type) {
        // MATCH!
        setTimeout(() => {
          playSuccessSound(isMuted);
          const englishWord = firstCard.type === 'english' ? firstCard.text : secondCard.text;
          speakEnglishWord(englishWord, 0.85, isMuted);

          const matchedCards = updatedCards.map((c) =>
            c.wordId === firstCard.wordId ? { ...c, isMatched: true, isFlipped: true } : c
          );
          setCards(matchedCards);
          setFlippedCardIds([]);
          setIsProcessing(false);
          const newMatches = matchesFound + 1;
          setMatchesFound(newMatches);

          // Update XP
          setStats((prev) => {
            const wordsSet = new Set(prev.wordsLearned);
            wordsSet.add(firstCard.wordId);
            const updated = {
              ...prev,
              xp: prev.xp + 30,
              wordsLearned: Array.from(wordsSet),
            };
            const active = recordDailyActivity(updated);
            return checkAndUnlockBadges(active).updatedStats;
          });

          // All pairs matched!
          if (newMatches === PAIRS_COUNT) {
            handleVictory();
          }
        }, 500);
      } else {
        // MISMATCH
        setTimeout(() => {
          playErrorSound(isMuted);
          setCards((prev) =>
            prev.map((c) =>
              c.cardId === firstCard.cardId || c.cardId === secondCard.cardId
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCardIds([]);
          setIsProcessing(false);
        }, 900);
      }
    }
  };

  const handleVictory = () => {
    setIsGameWon(true);
    setIsTimerActive(false);
    playVictoryFanfare(isMuted);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setStats((prev) => {
      const completed = new Set(prev.completedLevelIds);
      completed.add(currentLevelId);
      const updated = {
        ...prev,
        xp: prev.xp + 100,
        completedLevelIds: Array.from(completed),
      };
      const active = recordDailyActivity(updated);
      return checkAndUnlockBadges(active).updatedStats;
    });
  };

  const calculateStars = () => {
    if (moves <= PAIRS_COUNT + 2) return 3;
    if (moves <= PAIRS_COUNT + 6) return 2;
    return 1;
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Top Bar Status */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-700 font-bold">
              <Layers className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                  മെമ്മറി കാർഡ് മാച്ച് • ലെവൽ {currentLevel.id}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {currentLevel.titleMl}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold self-end sm:self-center">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700">
              <Timer className="w-4 h-4 text-slate-500" />
              <span className="tabular-nums">{formatTime(seconds)}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700">
              <span>ശ്രമങ്ങൾ:</span>
              <span className="font-bold text-indigo-600 tabular-nums">{moves}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="tabular-nums">{matchesFound} / {PAIRS_COUNT} ജോടികൾ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      {!isGameWon ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {cards.map((card) => {
            const isRevealed = card.isFlipped || card.isMatched;

            return (
              <button
                key={card.cardId}
                onClick={() => handleCardClick(card)}
                disabled={card.isMatched || isProcessing}
                className={`h-28 sm:h-32 rounded-2xl p-3 border-2 transition-all flex flex-col items-center justify-center text-center cursor-pointer select-none relative ${
                  card.isMatched
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs opacity-90 scale-95'
                    : isRevealed
                    ? card.type === 'english'
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-950 shadow-md ring-2 ring-indigo-400/30'
                      : 'bg-amber-50 border-amber-500 text-amber-950 shadow-md ring-2 ring-amber-400/30'
                    : 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-white shadow-sm hover:border-slate-500 hover:scale-[1.02] active:scale-95'
                }`}
              >
                {isRevealed ? (
                  <div className="flex flex-col items-center justify-center h-full w-full">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full mb-1 ${
                        card.type === 'english'
                          ? 'bg-indigo-200/60 text-indigo-800'
                          : 'bg-amber-200/60 text-amber-800'
                      }`}
                    >
                      {card.type === 'english' ? 'English' : 'മലയാളം'}
                    </span>
                    <span className="font-extrabold text-sm sm:text-base leading-snug line-clamp-2">
                      {card.text}
                    </span>
                    {card.subtext && (
                      <span className="text-[11px] text-indigo-600 font-medium mt-0.5">
                        ({card.subtext})
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-1 text-slate-400">
                    <Sparkles className="w-5 h-5 text-indigo-400 opacity-60" />
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider">FLIP</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      ) : (
        /* Victory Modal */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md text-center max-w-md mx-auto space-y-5 animate-fade-in">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-600">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900">വിജയം! ഗ്രേറ്റ് മെമ്മറി!</h3>
            <p className="text-sm text-slate-500 mt-1">
              ലെവൽ {currentLevel.id} മെമ്മറി കാർഡുകൾ എല്ലാം നിങ്ങൾ കണ്ടെത്തി!
            </p>
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <Star
                key={s}
                className={`w-7 h-7 ${
                  s <= calculateStars()
                    ? 'text-amber-400 fill-amber-400 animate-pulse'
                    : 'text-slate-200 fill-slate-100'
                }`}
              />
            ))}
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-slate-400">സമയം</span>
              <p className="text-lg font-extrabold text-slate-800">{formatTime(seconds)}</p>
            </div>
            <div>
              <span className="text-xs text-slate-400">ശ്രമങ്ങൾ</span>
              <p className="text-lg font-extrabold text-indigo-600">{moves} നീക്കങ്ങൾ</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={initGame}
              className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>വീണ്ടും കളിക്കുക</span>
            </button>

            {currentLevelId < levels.length && (
              <button
                onClick={() => {
                  setCurrentLevelId(currentLevelId + 1);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>അടുത്ത ലെവൽ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* How to play footnote */}
      <div className="text-center text-xs text-slate-400">
        ടിപ്പ്: കാർഡുകൾ മറിച്ചിട്ട് ഇംഗ്ലീഷ് വാക്കും അതിന്റെ മലയാള അർത്ഥവും കണ്ടെത്തുക!
      </div>
    </div>
  );
};
