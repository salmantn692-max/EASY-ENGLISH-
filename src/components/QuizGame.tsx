import React, { useState, useEffect } from 'react';
import { Level, WordItem, UserStats } from '../types';
import {
  speakEnglishWord,
  playSuccessSound,
  playErrorSound,
  playSelectSound,
  playVictoryFanfare,
} from '../utils/audio';
import { recordDailyActivity } from '../utils/storage';
import { Trophy, RotateCcw, Volume2, CheckCircle2, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizGameProps {
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
  questionType: 'ml_to_en' | 'en_to_ml';
}

export const QuizGame: React.FC<QuizGameProps> = ({
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

  // Generate 10 questions for current level
  const generateQuiz = () => {
    const words = [...currentLevel.words];
    const generated: Question[] = words.map((target) => {
      // Pick 3 distractors from same level or other levels
      const otherWords = words.filter((w) => w.id !== target.id);
      const shuffledOthers = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);
      const optionPool = [target, ...shuffledOthers].sort(() => 0.5 - Math.random());

      return {
        targetWord: target,
        options: optionPool,
        questionType: Math.random() > 0.4 ? 'ml_to_en' : 'en_to_ml',
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
    generateQuiz();
  }, [currentLevelId]);

  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (opt: WordItem) => {
    if (isAnswerSubmitted) return;

    playSelectSound(isMuted);
    setSelectedOptionId(opt.id);
    setIsAnswerSubmitted(true);

    const isCorrect = opt.id === currentQ.targetWord.id;

    if (isCorrect) {
      playSuccessSound(isMuted);
      setScore((prev) => prev + 1);
      speakEnglishWord(currentQ.targetWord.english, 0.85, isMuted);
      setStats((prev) => {
        const updated = {
          ...prev,
          xp: prev.xp + 15,
        };
        return recordDailyActivity(updated);
      });
    } else {

      playErrorSound(isMuted);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      // Finished quiz!
      setIsFinished(true);
      playVictoryFanfare(isMuted);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch {
        // Confetti fallback
      }
    }
  };

  if (!currentQ && !isFinished) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs flex items-center justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            ക്വിസ് ചലഞ്ച് (Quiz Challenge)
          </h2>
          <p className="text-xs text-slate-500">
            {currentLevel.titleMl} ({currentLevel.titleEn})
          </p>
        </div>

        <select
          value={currentLevelId}
          onChange={(e) => setCurrentLevelId(Number(e.target.value))}
          className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 cursor-pointer"
        >
          {levels.map((l) => (
            <option key={l.id} value={l.id}>
              ലെവൽ {l.id}
            </option>
          ))}
        </select>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          {/* Question Index & Progress Bar */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-2">
              <span>ചോദ്യം {currentQuestionIndex + 1} / {questions.length}</span>
              <span className="text-emerald-700 font-bold tabular-nums">സ്കോർ: {score}</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Prompt */}
          <div className="text-center py-4 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {currentQ.questionType === 'ml_to_en'
                ? 'ഈ മലയാള വാക്കിന്റെ ശരിയായ ഇംഗ്ലീഷ് വാക്ക് ഏതാണ്?'
                : 'ഈ ഇംഗ്ലീഷ് വാക്കിന്റെ ശരിയായ മലയാള അർത്ഥം കണ്ടെത്തുക'}
            </span>

            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {currentQ.questionType === 'ml_to_en'
                ? currentQ.targetWord.malayalam
                : currentQ.targetWord.english}
            </div>

            {currentQ.questionType === 'en_to_ml' && (
              <div className="flex justify-center items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">
                  [{currentQ.targetWord.phoneticMalayalam}]
                </span>
                <button
                  onClick={() => speakEnglishWord(currentQ.targetWord.english, 0.85, isMuted)}
                  className="p-1 hover:text-emerald-700 text-slate-400 cursor-pointer"
                  title="ഉച്ചാരണം കേൾക്കുക"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* 4 Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const isCorrect = opt.id === currentQ.targetWord.id;

              let btnStyle = 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50 text-slate-800 shadow-[0_4px_0_#cbd5e1] active:translate-y-1 active:shadow-none';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold shadow-[0_2px_0_#10b981]';
                } else if (isSelected) {
                  btnStyle = 'border-rose-400 bg-rose-50 text-rose-900 shadow-[0_2px_0_#f43f5e] animate-shake';
                } else {
                  btnStyle = 'border-slate-100 bg-slate-50 text-slate-400 opacity-60 shadow-none';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt)}
                  disabled={isAnswerSubmitted}
                  className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between font-semibold text-sm sm:text-base ${btnStyle}`}
                >

                  <div>
                    {currentQ.questionType === 'ml_to_en' ? (
                      <div>
                        <div className="font-bold text-slate-900">{opt.english}</div>
                        <div className="text-xs text-slate-500">({opt.phoneticMalayalam})</div>
                      </div>
                    ) : (
                      <div className="font-medium text-slate-900">{opt.malayalam}</div>
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

          {/* Continue / Next Button */}
          {isAnswerSubmitted && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-xs cursor-pointer text-sm"
              >
                {currentQuestionIndex + 1 < questions.length ? 'അടുത്ത ചോദ്യം' : 'ഫലം കാണുക'}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Finished Summary */
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 mx-auto flex items-center justify-center text-emerald-700">
            <Trophy className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900">
            ക്വിസ് പൂർത്തിയായി!
          </h3>
          <p className="text-slate-600 text-sm">
            നിങ്ങൾ {questions.length}-ൽ <span className="font-bold text-emerald-700 tabular-nums">{score}</span> ഉത്തരങ്ങൾ ശരിയാക്കി!
          </p>

          <div className="py-2">
            <button
              onClick={generateQuiz}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>വീണ്ടും ശ്രമിക്കുക</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
