import React, { useState } from 'react';
import { SentenceExercise, UserStats } from '../types';
import { SENTENCE_EXERCISES } from '../data/sentences';
import {
  speakEnglishWord,
  playSuccessSound,
  playErrorSound,
  playSelectSound,
  playVictoryFanfare,
} from '../utils/audio';
import { recordDailyActivity, checkAndUnlockBadges } from '../utils/storage';
import {
  Volume2,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  ChevronRight,
  HelpCircle,
  Trophy,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SentenceBuilderProps {
  stats: UserStats;
  setStats: React.Dispatch<React.SetStateAction<UserStats>>;
  isMuted: boolean;
}

export const SentenceBuilder: React.FC<SentenceBuilderProps> = ({
  setStats,
  isMuted,
}) => {
  const [exerciseIndex, setExerciseIndex] = useState<number>(0);
  const currentEx: SentenceExercise = SENTENCE_EXERCISES[exerciseIndex] || SENTENCE_EXERCISES[0];

  // Word pool: track available vs selected words
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [completedCount, setCompletedCount] = useState<number>(0);

  // Remaining available words
  const availableWords = currentEx.scrambledWords.filter((w) => {
    // Count occurrences in scrambledWords vs selectedWords
    const totalCount = currentEx.scrambledWords.filter((x) => x === w).length;
    const selectedCount = selectedWords.filter((x) => x === w).length;
    return selectedCount < totalCount;
  });

  const handleSelectWord = (word: string) => {
    if (isAnswerChecked && isCorrect) return;
    playSelectSound(isMuted);
    setSelectedWords((prev) => [...prev, word]);
    setIsAnswerChecked(false);
  };

  const handleRemoveWord = (index: number) => {
    if (isAnswerChecked && isCorrect) return;
    playSelectSound(isMuted);
    setSelectedWords((prev) => prev.filter((_, i) => i !== index));
    setIsAnswerChecked(false);
  };

  const handleReset = () => {
    playSelectSound(isMuted);
    setSelectedWords([]);
    setIsAnswerChecked(false);
    setIsCorrect(false);
  };

  const handleCheck = () => {
    const constructedSentence = selectedWords.join(' ').trim();
    const targetClean = currentEx.sentenceEn.trim();

    const isMatch = constructedSentence.toLowerCase() === targetClean.toLowerCase();
    setIsAnswerChecked(true);
    setIsCorrect(isMatch);

    if (isMatch) {
      playSuccessSound(isMuted);
      speakEnglishWord(currentEx.sentenceEn, 0.85, isMuted);
      setCompletedCount((prev) => prev + 1);

      // Award XP and check badges
      setStats((prev) => {
        const updated = {
          ...prev,
          xp: prev.xp + 25,
        };
        const activeRecorded = recordDailyActivity(updated);
        const { updatedStats } = checkAndUnlockBadges(activeRecorded);
        return updatedStats;
      });

      try {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      } catch {
        // Fallback
      }
    } else {
      playErrorSound(isMuted);
    }
  };

  const handleNext = () => {
    playSelectSound(isMuted);
    const nextIdx = (exerciseIndex + 1) % SENTENCE_EXERCISES.length;
    setExerciseIndex(nextIdx);
    setSelectedWords([]);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              പുതിയ ഗെയിം മോഡൽ
            </span>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
              വാക്യ ശിൽപ്പി (Sentence Builder)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            മലയാള വാക്യത്തിന് യോജിച്ച ശരിയായ ഇംഗ്ലീഷ് വാക്യം വാക്കുകൾ അടുക്കിവെച്ച് നിർമ്മിക്കുക.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl tabular-nums">
            {exerciseIndex + 1} / {SENTENCE_EXERCISES.length}
          </span>
          <button
            onClick={() => setShowHint((prev) => !prev)}
            className="p-2 rounded-xl text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
            title="വ്യാകരണ സഹായം (Grammar Tip)"
          >
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>സൂചന</span>
          </button>
        </div>
      </div>

      {/* Main Sentence Card */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        {/* Malayalam Sentence Prompt */}
        <div className="space-y-1.5 text-center py-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            ഈ മലയാള വാക്യം ഇംഗ്ലീഷിലേക്ക് ക്രമീകരിക്കുക:
          </span>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
            "{currentEx.sentenceMl}"
          </div>
        </div>

        {/* Grammar Tip if toggled */}
        {showHint && currentEx.hintMl && (
          <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-start gap-2 animate-in fade-in duration-150">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>വ്യാകരണ സൂചന:</strong> {currentEx.hintMl}
            </div>
          </div>
        )}

        {/* Sentence Assembly Strip */}
        <div className="min-h-[70px] p-4 rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50/40 flex flex-wrap items-center justify-center gap-2">
          {selectedWords.length === 0 ? (
            <span className="text-xs text-emerald-800/70 font-semibold italic">
              താഴെയുള്ള വാക്കുകൾ തൊട്ട് ഇവിടെ വാക്യം നിർമ്മിക്കുക...
            </span>
          ) : (
            selectedWords.map((word, idx) => (
              <button
                key={`${word}_${idx}`}
                onClick={() => handleRemoveWord(idx)}
                className="px-3.5 py-2 rounded-xl bg-white border-2 border-emerald-500 text-slate-900 font-extrabold text-sm sm:text-base shadow-[0_3px_0_#10b981] active:translate-y-0.5 active:shadow-none hover:bg-rose-50 hover:border-rose-400 transition-all cursor-pointer animate-in zoom-in-95 duration-100"
                title="ഒഴിവാക്കാൻ തൊടുക"
              >
                {word}
              </button>
            ))
          )}
        </div>

        {/* Scrambled Word Choices Pool */}
        <div>
          <div className="text-xs font-bold text-slate-500 mb-2 text-center">
            തിരഞ്ഞെടുക്കാനുള്ള വാക്കുകൾ:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {currentEx.scrambledWords.map((word, idx) => {
              const isUsed = !availableWords.includes(word);

              return (
                <button
                  key={`${word}_choice_${idx}`}
                  onClick={() => handleSelectWord(word)}
                  disabled={isUsed}
                  className={`px-4 py-2.5 rounded-2xl border-2 text-sm sm:text-base font-extrabold transition-all select-none cursor-pointer ${
                    isUsed
                      ? 'border-slate-100 bg-slate-100 text-slate-300 shadow-none cursor-not-allowed opacity-40'
                      : 'border-slate-200 bg-white hover:border-emerald-400 text-slate-900 shadow-[0_4px_0_#cbd5e1] active:translate-y-1 active:shadow-none'
                  }`}
                >
                  {word}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Alert if checked */}
        {isAnswerChecked && (
          <div
            className={`p-4 rounded-2xl border-2 text-center animate-in fade-in duration-200 ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}
          >
            {isCorrect ? (
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 font-extrabold text-base text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>വളരെ ശരി! ഉത്തരം കൃത്യമാണ്! (+25 XP)</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-900">
                  <span>"{currentEx.sentenceEn}"</span>
                  <button
                    onClick={() => speakEnglishWord(currentEx.sentenceEn, 0.85, isMuted)}
                    className="p-1 text-emerald-700 hover:text-emerald-800 cursor-pointer"
                    title="ഉച്ചാരണം വീണ്ടും കേൾക്കുക"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="font-extrabold text-sm text-rose-800">
                  ശ്രമം ശരിയായില്ല! വാക്യക്രമം വീണ്ടും പരിശോധിക്കുക.
                </div>
                <div className="text-xs text-rose-700">
                  ശരിയായ വാക്യം: <strong>{currentEx.sentenceEn}</strong>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>വീണ്ടും ക്രമീകരിക്കുക</span>
          </button>

          {!isCorrect ? (
            <button
              onClick={handleCheck}
              disabled={selectedWords.length === 0}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedWords.length === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_3px_0_#047857] active:translate-y-0.5 active:shadow-none'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>പരിശോധിക്കുക (Check)</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-[0_3px_0_#047857] active:translate-y-0.5 active:shadow-none flex items-center gap-1.5 cursor-pointer transition-all animate-bounce"
            >
              <span>അടുത്ത വാക്യം</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
