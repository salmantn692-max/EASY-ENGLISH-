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
  Volume2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Headphones,
  Gauge,
  Sparkles,
  Trophy,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ListeningChallengeProps {
  levels: Level[];
  currentLevelId: number;
  setCurrentLevelId: (id: number) => void;
  stats: UserStats;
  setStats: React.Dispatch<React.SetStateAction<UserStats>>;
  isMuted: boolean;
}

interface Question {
  targetWord: WordItem;
  options: WordItem[];
}

export const ListeningChallenge: React.FC<ListeningChallengeProps> = ({
  levels,
  currentLevelId,
  setCurrentLevelId,
  setStats,
  isMuted,
}) => {
  const currentLevel = levels.find((l) => l.id === currentLevelId) || levels[0];

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isSlowAudio, setIsSlowAudio] = useState<boolean>(false);

  const generateListeningQuiz = () => {
    const words = [...currentLevel.words];
    const generated: Question[] = words.map((target) => {
      const others = words.filter((w) => w.id !== target.id);
      const shuffledOthers = others.sort(() => 0.5 - Math.random()).slice(0, 3);
      const optionPool = [target, ...shuffledOthers].sort(() => 0.5 - Math.random());

      return {
        targetWord: target,
        options: optionPool,
      };
    });

    setQuestions(generated);
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  useEffect(() => {
    generateListeningQuiz();
  }, [currentLevelId]);

  const currentQ = questions[currentQuestionIndex];

  // Play pronunciation automatically when a new question starts
  useEffect(() => {
    if (currentQ && !isFinished) {
      const timer = setTimeout(() => {
        speakEnglishWord(currentQ.targetWord.english, isSlowAudio ? 0.65 : 0.85, isMuted);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentQuestionIndex, currentLevelId, isFinished]);

  const handlePlayAudio = () => {
    if (!currentQ) return;
    speakEnglishWord(currentQ.targetWord.english, isSlowAudio ? 0.65 : 0.85, isMuted);
  };

  const handleSelectOption = (opt: WordItem) => {
    if (isAnswerSubmitted) return;

    playSelectSound(isMuted);
    setSelectedOptionId(opt.id);
    setIsAnswerSubmitted(true);

    const isCorrect = opt.id === currentQ.targetWord.id;

    if (isCorrect) {
      playSuccessSound(isMuted);
      setScore((prev) => prev + 1);
      setStats((prev) => {
        const updated = {
          ...prev,
          xp: prev.xp + 20,
        };
        const activeRecorded = recordDailyActivity(updated);
        const { updatedStats } = checkAndUnlockBadges(activeRecorded);
        return updatedStats;
      });
    } else {
      playErrorSound(isMuted);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
      playVictoryFanfare(isMuted);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch {
        // Fallback
      }
    }
  };

  if (!currentQ && !isFinished) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
              ലിസണിംഗ് ചലഞ്ച് (Listening Test)
            </h2>
            <p className="text-xs text-slate-500">
              ശബ്ദം കേട്ട് ശരിയായ അർത്ഥം കണ്ടെത്തുക ({currentLevel.titleMl})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSlowAudio((prev) => !prev)}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl border flex items-center gap-1.5 cursor-pointer transition-colors ${
              isSlowAudio ? 'bg-amber-50 border-amber-300 text-amber-900' : 'border-slate-200 text-slate-600'
            }`}
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>{isSlowAudio ? 'മെല്ലെ (Slow)' : 'സാധാരണ'}</span>
          </button>

          <select
            value={currentLevelId}
            onChange={(e) => setCurrentLevelId(Number(e.target.value))}
            className="px-3 py-1.5 text-xs font-bold rounded-xl border border-slate-200 bg-white text-slate-700 cursor-pointer"
          >
            {levels.map((l) => (
              <option key={l.id} value={l.id}>
                ലെവൽ {l.id}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 text-center">
          {/* Progress Header */}
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>ചോദ്യം {currentQuestionIndex + 1} / {questions.length}</span>
            <span className="text-emerald-700 font-extrabold tabular-nums">സ്കോർ: {score}</span>
          </div>

          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Big Audio Speaker Action Button */}
          <div className="py-4 space-y-3">
            <button
              onClick={handlePlayAudio}
              className="mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-[0_8px_0_#065f46] active:translate-y-1 active:shadow-none hover:scale-105 transition-all cursor-pointer group"
              title="ശബ്ദം കേൾക്കാൻ അമർത്തുക"
            >
              <Volume2 className="w-12 h-12 group-hover:animate-pulse" />
            </button>

            <div className="text-xs text-slate-500 font-semibold">
              ഇംഗ്ലീഷ് ഉച്ചാരണം കേൾക്കാൻ സ്പീക്കറിൽ തൊടുക (Tap to replay)
            </div>

            {isAnswerSubmitted && (
              <div className="pt-2 animate-in fade-in duration-150">
                <span className="text-xl font-extrabold text-slate-900">
                  "{currentQ.targetWord.english}"
                </span>
                <span className="text-xs text-emerald-800 ml-2 font-semibold">
                  [{currentQ.targetWord.phoneticMalayalam}]
                </span>
              </div>
            )}
          </div>

          {/* 4 Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const isCorrect = opt.id === currentQ.targetWord.id;

              let btnStyle =
                'border-slate-200 bg-white hover:border-emerald-400 hover:bg-slate-50 text-slate-900 shadow-[0_4px_0_#cbd5e1] active:translate-y-1 active:shadow-none';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-extrabold shadow-[0_2px_0_#10b981]';
                } else if (isSelected) {
                  btnStyle = 'border-rose-400 bg-rose-50 text-rose-900 shadow-[0_2px_0_#f43f5e] animate-shake';
                } else {
                  btnStyle = 'border-slate-100 bg-slate-50 text-slate-400 opacity-50 shadow-none';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt)}
                  disabled={isAnswerSubmitted}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between font-bold text-sm sm:text-base ${btnStyle}`}
                >
                  <div>
                    <div className="font-extrabold text-slate-900">{opt.malayalam}</div>
                    {isAnswerSubmitted && (
                      <div className="text-xs text-slate-500 mt-0.5">
                        {opt.english} ({opt.phoneticMalayalam})
                      </div>
                    )}
                  </div>

                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {isAnswerSubmitted && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-[0_3px_0_#047857] active:translate-y-0.5 active:shadow-none flex items-center gap-1.5 cursor-pointer"
              >
                <span>{currentQuestionIndex + 1 < questions.length ? 'അടുത്തത്' : 'ഫലം കാണുക'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Finished Screen */
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-sm text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 mx-auto flex items-center justify-center text-emerald-700 shadow-xs">
            <Trophy className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900">
            ലിസണിംഗ് ടെസ്റ്റ് പൂർത്തിയായി!
          </h3>
          <p className="text-slate-600 text-sm">
            നിങ്ങൾ {questions.length}-ൽ <span className="font-extrabold text-emerald-700 tabular-nums">{score}</span> വാക്കുകൾ കൃത്യമായി തിരിച്ചറിഞ്ഞു!
          </p>

          <div className="py-2">
            <button
              onClick={generateListeningQuiz}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>വീണ്ടും പരിശീലിക്കുക</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
