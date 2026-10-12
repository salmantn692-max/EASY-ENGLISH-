import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Level, Badge } from '../types';
import { Trophy, Star, ArrowRight, RotateCcw, Volume2, Award } from 'lucide-react';
import { speakEnglishWord } from '../utils/audio';

interface VictoryModalProps {
  level: Level;
  stars: number;
  durationSeconds: number;
  mistakes: number;
  xpEarned: number;
  newlyUnlockedBadges: Badge[];
  isMuted: boolean;
  onNextLevel: () => void;
  onReplay: () => void;
  onClose: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  level,
  stars,
  durationSeconds,
  mistakes,
  xpEarned,
  newlyUnlockedBadges,
  isMuted,
  onNextLevel,
  onReplay,
}) => {
  useEffect(() => {
    // Launch celebratory confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#f59e0b', '#3b82f6', '#ec4899'],
      });
    } catch {
      // Confetti fallback
    }
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center relative overflow-hidden">
        {/* Decorative subtle ambient backdrop */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-600" />

        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4 shadow-xs">
          <Trophy className="w-9 h-9" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          അഭിനന്ദനങ്ങൾ!
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1">
          {level.titleMl} ({level.titleEn}) വിജയകരമായി പൂർത്തിയാക്കി!
        </p>

        {/* Stars */}
        <div className="flex justify-center items-center gap-2 my-5">
          {[1, 2, 3].map((starIdx) => (
            <Star
              key={starIdx}
              className={`w-9 h-9 transition-transform duration-300 ${
                starIdx <= stars
                  ? 'text-amber-400 fill-amber-400 scale-110 drop-shadow-sm'
                  : 'text-slate-200 fill-slate-100'
              }`}
            />
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center mb-5">
          <div>
            <div className="text-xs text-slate-500">സമയം</div>
            <div className="text-lg font-bold text-slate-800 tabular-nums">
              {formatTime(durationSeconds)}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">തെറ്റുകൾ</div>
            <div className="text-lg font-bold text-slate-800 tabular-nums">
              {mistakes}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">ലഭിച്ച XP</div>
            <div className="text-lg font-bold text-emerald-600 tabular-nums">
              +{xpEarned}
            </div>
          </div>
        </div>

        {/* Newly Unlocked Badges Notification if any */}
        {newlyUnlockedBadges.length > 0 && (
          <div className="mb-5 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-left">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-1">
              <Award className="w-4 h-4 text-amber-600" />
              <span>പുതിയ ബാഡ്ജ് അൺലോക്ക് ആയി!</span>
            </div>
            {newlyUnlockedBadges.map((badge) => (
              <div key={badge.id} className="text-xs text-amber-900 mt-1">
                🏆 <span className="font-semibold">{badge.titleMl}</span>: {badge.descMl}
              </div>
            ))}
          </div>
        )}

        {/* Quick Review of words */}
        <div className="text-left mb-6 max-h-36 overflow-y-auto rounded-lg border border-slate-100 p-2.5 bg-slate-50 text-xs">
          <div className="font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
            <span>പഠിച്ച 10 വാക്കുകൾ പുനരവലോകനം (Review):</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {level.words.map((w) => (
              <div
                key={w.id}
                className="flex items-center justify-between bg-white px-2 py-1.5 rounded border border-slate-100"
              >
                <div>
                  <span className="font-bold text-slate-800">{w.english}</span>
                  <span className="text-slate-500 ml-1">({w.phoneticMalayalam})</span>
                  <div className="text-slate-600 truncate">{w.malayalam}</div>
                </div>
                <button
                  onClick={() => speakEnglishWord(w.english, 0.85, isMuted)}
                  className="p-1 hover:text-emerald-700 text-slate-400 cursor-pointer"
                  title="ഉച്ചാരണം കേൾക്കുക"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onReplay}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>വീണ്ടും കളിക്കുക</span>
          </button>

          <button
            onClick={onNextLevel}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <span>അടുത്ത ലെവൽ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
