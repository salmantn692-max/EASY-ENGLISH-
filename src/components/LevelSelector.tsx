import React, { useState, useMemo } from 'react';
import { Level, UserStats } from '../types';
import { Star, CheckCircle2, ChevronRight, Search, Sparkles, Filter } from 'lucide-react';

interface LevelSelectorProps {
  levels: Level[];
  currentLevelId: number;
  stats: UserStats;
  onSelectLevel: (levelId: number) => void;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({
  levels,
  currentLevelId,
  stats,
  onSelectLevel,
}) => {
  const [tierFilter, setTierFilter] = useState<'all' | 'tier1' | 'tier2' | 'tier3'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredLevels = useMemo(() => {
    return levels.filter((level) => {
      // Tier filter
      if (tierFilter === 'tier1' && (level.id < 1 || level.id > 10)) return false;
      if (tierFilter === 'tier2' && (level.id < 11 || level.id > 20)) return false;
      if (tierFilter === 'tier3' && (level.id < 21 || level.id > 30)) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle =
          level.titleMl.toLowerCase().includes(query) ||
          level.titleEn.toLowerCase().includes(query);
        const matchesWord = level.words.some(
          (w) =>
            w.english.toLowerCase().includes(query) ||
            w.malayalam.toLowerCase().includes(query) ||
            w.phoneticMalayalam.toLowerCase().includes(query)
        );
        return matchesTitle || matchesWord;
      }

      return true;
    });
  }, [levels, tierFilter, searchQuery]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs mb-6 space-y-4">
      {/* Title & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
              ലെവലുകൾ തിരഞ്ഞെടുക്കുക (Select Level)
            </h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
              30 ലെവലുകൾ • 300 വാക്കുകൾ
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            ഓരോ ലെവലിലും 10 പ്രധാന ഇംഗ്ലീഷ് വാക്കുകളും അവയുടെ മലയാള അർത്ഥങ്ങളും ഉച്ചാരണവുമുണ്ട്.
          </p>
        </div>
        <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 shrink-0">
          പൂർത്തിയായത്: <span className="font-extrabold text-emerald-600 tabular-nums">{stats.completedLevelIds.length}</span> / {levels.length} ലെവലുകൾ
        </div>
      </div>

      {/* Tier Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between pt-1">
        {/* Tier Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          <button
            onClick={() => setTierFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              tierFilter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            എല്ലാം (1 - 30)
          </button>
          <button
            onClick={() => setTierFilter('tier1')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              tierFilter === 'tier1'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            തുടക്കക്കാർ (1 - 10)
          </button>
          <button
            onClick={() => setTierFilter('tier2')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              tierFilter === 'tier2'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
            }`}
          >
            ഇന്റർമീഡിയറ്റ് (11 - 20)
          </button>
          <button
            onClick={() => setTierFilter('tier3')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              tierFilter === 'tier3'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'bg-purple-50 text-purple-800 hover:bg-purple-100'
            }`}
          >
            അഡ്വാൻസ്ഡ് (21 - 30)
          </button>
        </div>

        {/* Quick Search */}
        <div className="relative min-w-[200px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="വാക്കുകൾ അല്ലെങ്കിൽ ലെവൽ തിരയുക..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8.5 pr-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Grid of Levels */}
      {filteredLevels.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
          {filteredLevels.map((level) => {
            const isSelected = level.id === currentLevelId;
            const isCompleted = stats.completedLevelIds.includes(level.id);
            const stars = stats.levelStars[level.id] || 0;

            return (
              <button
                key={level.id}
                onClick={() => onSelectLevel(level.id)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/90 shadow-sm ring-2 ring-emerald-500/30'
                    : isCompleted
                    ? 'border-emerald-200/80 bg-white hover:border-emerald-300 hover:bg-emerald-50/30'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-black tabular-nums ${isSelected ? 'text-emerald-800' : 'text-slate-700'}`}>
                    ലെവൽ {level.id}
                  </span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>

                <div className="text-xs font-bold text-slate-900 truncate" title={level.titleMl}>
                  {level.titleMl}
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5" title={level.titleEn}>
                  {level.titleEn}
                </div>

                {/* Stars earned */}
                <div className="flex items-center gap-0.5 mt-2">
                  {[1, 2, 3].map((s) => (
                    <Star
                      key={s}
                      className={`w-3 h-3 ${
                        s <= stars
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-200 fill-slate-100'
                      }`}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8 text-slate-400 text-xs">
          തിരഞ്ഞതിന് അനുയോജ്യമായ ലെവലുകൾ കണ്ടെത്താനായില്ല.
        </div>
      )}
    </div>
  );
};
