import React, { useState } from 'react';
import { Level, WordItem, UserStats } from '../types';
import { speakEnglishWord, playSuccessSound, playSelectSound } from '../utils/audio';
import { recordDailyActivity } from '../utils/storage';
import {
  Volume2,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Bookmark,
  Check,
  Sparkles,
  Gauge,
} from 'lucide-react';

interface FlashcardsProps {
  levels: Level[];
  currentLevelId: number;
  setCurrentLevelId: (id: number) => void;
  stats: UserStats;
  setStats: React.Dispatch<React.SetStateAction<UserStats>>;
  isMuted: boolean;
}

export const Flashcards: React.FC<FlashcardsProps> = ({
  levels,
  currentLevelId,
  setCurrentLevelId,
  stats,
  setStats,
  isMuted,
}) => {
  const currentLevel = levels.find((l) => l.id === currentLevelId) || levels[0];
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isSlow, setIsSlow] = useState<boolean>(false);

  const activeWord: WordItem = currentLevel.words[cardIndex] || currentLevel.words[0];
  const isFavorite = stats.favoriteWordIds.includes(activeWord.id);
  const isMastered = stats.wordsLearned.includes(activeWord.id);

  const handleNext = () => {
    setIsFlipped(false);
    playSelectSound(isMuted);
    setCardIndex((prev) => (prev + 1) % currentLevel.words.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    playSelectSound(isMuted);
    setCardIndex((prev) => (prev - 1 + currentLevel.words.length) % currentLevel.words.length);
  };

  const handleSpeak = (text: string) => {
    speakEnglishWord(text, isSlow ? 0.65 : 0.85, isMuted);
  };

  const toggleFavorite = (wordId: string) => {
    playSelectSound(isMuted);
    setStats((prev) => {
      const favs = new Set(prev.favoriteWordIds);
      if (favs.has(wordId)) favs.delete(wordId);
      else favs.add(wordId);
      return { ...prev, favoriteWordIds: Array.from(favs) };
    });
  };

  const markLearned = (wordId: string) => {
    playSuccessSound(isMuted);
    setStats((prev) => {
      const learned = new Set(prev.wordsLearned);
      learned.add(wordId);
      const updated = {
        ...prev,
        xp: prev.xp + 10,
        wordsLearned: Array.from(learned),
      };
      return recordDailyActivity(updated);
    });
    handleNext();
  };


  return (
    <div className="max-w-3xl mx-auto space-y-5">
      {/* Top Controller */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            വേർഡ് കാർഡുകൾ (Vocabulary Flashcards)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {currentLevel.titleMl} ({cardIndex + 1} / {currentLevel.words.length})
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Level Switcher */}
          <select
            value={currentLevelId}
            onChange={(e) => {
              setCurrentLevelId(Number(e.target.value));
              setCardIndex(0);
              setIsFlipped(false);
            }}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            {levels.map((l) => (
              <option key={l.id} value={l.id}>
                ലെവൽ {l.id}: {l.titleMl}
              </option>
            ))}
          </select>

          <button
            onClick={() => setIsSlow((prev) => !prev)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border flex items-center gap-1.5 cursor-pointer ${
              isSlow ? 'bg-amber-50 border-amber-300 text-amber-900' : 'border-slate-200 text-slate-600'
            }`}
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>{isSlow ? 'സ്ലോ' : 'സാധാരണ'}</span>
          </button>
        </div>
      </div>

      {/* Main Flashcard Container */}
      <div
        onClick={() => {
          setIsFlipped((prev) => !prev);
          playSelectSound(isMuted);
        }}
        className="relative bg-white rounded-3xl border-2 border-slate-200 p-8 sm:p-12 shadow-[0_8px_0_#cbd5e1] min-h-[360px] flex flex-col justify-between cursor-pointer hover:border-emerald-400 transition-all select-none group"
      >
        {/* Top Badges */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {activeWord.partOfSpeech}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(activeWord.id);
              }}
              className="p-1.5 text-slate-400 hover:text-amber-500 cursor-pointer transition-colors"
              title="പ്രിയപ്പെട്ടവയിൽ സൂക്ഷിക്കുക"
            >
              <Bookmark
                className={`w-5 h-5 ${isFavorite ? 'text-amber-500 fill-amber-500' : ''}`}
              />
            </button>

            <span className="text-xs text-slate-500 font-extrabold tabular-nums bg-slate-100 px-2.5 py-1 rounded-full">
              {cardIndex + 1} / {currentLevel.words.length}
            </span>
          </div>
        </div>

        {/* Card Center Content */}
        {!isFlipped ? (
          /* FRONT SIDE */
          <div className="text-center my-6 space-y-4">
            <div className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {activeWord.english}
            </div>

            <div className="text-base sm:text-xl text-emerald-800 font-bold">
              മലയാള ഉച്ചാരണം: <span className="bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">[{activeWord.phoneticMalayalam}]</span>
            </div>

            <div className="flex justify-center items-center gap-3 pt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSpeak(activeWord.english);
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-[0_3px_0_#047857] active:translate-y-0.5 active:shadow-none"
              >
                <Volume2 className="w-4 h-4" />
                <span>ഉച്ചാരണം കേൾക്കുക (Listen)</span>
              </button>
            </div>

            <div className="text-xs text-slate-400 font-semibold flex items-center justify-center gap-1.5 pt-4">
              <RotateCw className="w-3.5 h-3.5 text-emerald-600" />
              <span>മലയാള അർത്ഥം കാണാൻ കാർഡിൽ തൊടുക (Tap to flip)</span>
            </div>
          </div>
        ) : (
          /* BACK SIDE */
          <div className="text-center my-6 space-y-4 animate-in fade-in duration-150">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">മലയാള അർത്ഥം (Meaning)</div>
            <div className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              {activeWord.malayalam}
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-2xl text-left max-w-lg mx-auto space-y-2 mt-4 shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                <span>ഉദാഹരണ വാക്യം (Example):</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSpeak(activeWord.exampleSentenceEn);
                  }}
                  className="text-emerald-700 hover:text-emerald-800 font-semibold cursor-pointer flex items-center gap-1"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>കേൾക്കുക</span>
                </button>
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900">
                "{activeWord.exampleSentenceEn}"
              </div>
              <div className="text-xs text-slate-600 font-medium">
                അർത്ഥം: {activeWord.exampleSentenceMl}
              </div>
            </div>

            <div className="text-xs text-slate-400 font-semibold flex items-center justify-center gap-1.5 pt-2">
              <RotateCw className="w-3.5 h-3.5 text-emerald-600" />
              <span>ഇംഗ്ലീഷ് കാണാൻ വീണ്ടും തൊടുക</span>
            </div>
          </div>
        )}

        {/* Bottom Actions inside card */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>മുൻപത്തേത്</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              markLearned(activeWord.id);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              isMastered
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_3px_0_#047857] active:translate-y-0.5 active:shadow-none'
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{isMastered ? 'പഠിച്ചു കഴിഞ്ഞു (+10 XP)' : 'പഠിച്ചു (+10 XP)'}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
          >
            <span>അടുത്തത്</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
