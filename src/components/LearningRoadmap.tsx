import React from 'react';
import { Level, UserStats } from '../types';
import { Star, CheckCircle, Play, Lock, Award, Trophy, Sparkles } from 'lucide-react';

interface LearningRoadmapProps {
  levels: Level[];
  currentLevelId: number;
  stats: UserStats;
  onSelectLevel: (levelId: number) => void;
  onStartLevel: (levelId: number) => void;
}

export const LearningRoadmap: React.FC<LearningRoadmapProps> = ({
  levels,
  currentLevelId,
  stats,
  onStartLevel,
}) => {
  return (
    <div className="bg-gradient-to-b from-emerald-900 via-teal-900 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl border border-emerald-700/50 relative overflow-hidden">
      {/* Background ambient glowing nodes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-xl mx-auto mb-10 space-y-2 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>പഠന പാത (Learning Journey)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          നിങ്ങളുടെ ഇംഗ്ലീഷ് പഠന വഴി
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/80">
          ഓരോ ഘട്ടവും പൂർത്തിയാക്കി നക്ഷത്രങ്ങളും ബാഡ്ജുകളും സ്വന്തമാക്കൂ!
        </p>
      </div>

      {/* Stepped Winding Journey Nodes */}
      <div className="max-w-md mx-auto space-y-6 relative z-10">
        {levels.map((level, idx) => {
          const isCurrent = level.id === currentLevelId;
          const isCompleted = stats.completedLevelIds.includes(level.id);
          const stars = stats.levelStars[level.id] || 0;

          // Winding offset alignment for road feel
          const alignment = idx % 2 === 0 ? 'sm:translate-x-4' : 'sm:-translate-x-4';

          return (
            <div
              key={level.id}
              className={`flex items-center justify-center transition-all ${alignment}`}
            >
              <div
                className={`w-full max-w-sm rounded-2xl p-4 border transition-all relative ${
                  isCurrent
                    ? 'bg-white text-slate-950 border-emerald-400 shadow-[0_8px_0_#059669] ring-4 ring-emerald-400/40'
                    : isCompleted
                    ? 'bg-emerald-950/80 border-emerald-500/50 text-white shadow-[0_4px_0_#064e3b]'
                    : 'bg-slate-800/80 border-slate-700 text-slate-200 shadow-[0_4px_0_#1e293b]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Level Number Node Bubble */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-base shrink-0 shadow-md ${
                        isCurrent
                          ? 'bg-emerald-600 text-white shadow-[0_3px_0_#047857]'
                          : isCompleted
                          ? 'bg-emerald-500 text-slate-950 shadow-[0_3px_0_#059669]'
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-slate-950" />
                      ) : (
                        <span>{level.id}</span>
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[11px] font-bold uppercase tracking-wider ${isCurrent ? 'text-emerald-700' : 'text-emerald-400'}`}>
                          ഘട്ടം {level.id}
                        </span>
                      </div>
                      <div className={`font-bold text-sm truncate ${isCurrent ? 'text-slate-900' : 'text-white'}`}>
                        {level.titleMl}
                      </div>
                      <div className={`text-xs truncate ${isCurrent ? 'text-slate-500' : 'text-slate-400'}`}>
                        {level.titleEn}
                      </div>
                    </div>
                  </div>

                  {/* Play / Stars Action */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <button
                      onClick={() => onStartLevel(level.id)}
                      className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
                        isCurrent
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_3px_0_#047857] active:translate-y-0.5 active:shadow-none'
                          : isCompleted
                          ? 'bg-emerald-700/60 hover:bg-emerald-700 text-white border border-emerald-400/40'
                          : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold shadow-[0_3px_0_#059669] active:translate-y-0.5 active:shadow-none'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isCompleted ? 'വീണ്ടും' : 'കളിക്കുക'}</span>
                    </button>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map((starIdx) => (
                        <Star
                          key={starIdx}
                          className={`w-3.5 h-3.5 ${
                            starIdx <= stars
                              ? 'text-amber-400 fill-amber-400 drop-shadow-xs'
                              : 'text-slate-600 fill-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Milestone Trophy decoration for Level 5, 10, 20 and Level 30 */}
                {level.id === 5 && (
                  <div className="mt-2.5 pt-2 border-t border-emerald-500/20 flex items-center gap-1.5 text-[11px] text-amber-300 font-semibold">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>നാഴികക്കല്ല് (50 വാക്കുകൾ)!</span>
                  </div>
                )}
                {level.id === 10 && (
                  <div className="mt-2.5 pt-2 border-t border-amber-500/20 flex items-center gap-1.5 text-[11px] text-amber-300 font-semibold">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span>സെഞ്ചുറി നേട്ടം (100 വാക്കുകൾ)!</span>
                  </div>
                )}
                {level.id === 20 && (
                  <div className="mt-2.5 pt-2 border-t border-purple-500/20 flex items-center gap-1.5 text-[11px] text-purple-300 font-semibold">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span>ഇന്റർമീഡിയറ്റ് മാസ്റ്റർ (200 വാക്കുകൾ)!</span>
                  </div>
                )}
                {level.id === 30 && (
                  <div className="mt-2.5 pt-2 border-t border-amber-500/30 flex items-center gap-1.5 text-[11px] text-amber-200 font-bold">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>സമ്പൂർണ്ണ ഇംഗ്ലീഷ് ചാമ്പ്യൻ (300 വാക്കുകൾ)!</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
