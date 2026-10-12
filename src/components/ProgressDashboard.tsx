import React, { useState } from 'react';
import { UserStats, Level } from '../types';
import { BADGES_LIST } from '../data/vocabulary';
import { speakEnglishWord, playSelectSound } from '../utils/audio';
import {
  Trophy,
  Flame,
  Award,
  Sparkles,
  Bookmark,
  Volume2,
  CheckCircle2,
  Target,
  RotateCcw,
  Search,
} from 'lucide-react';

interface ProgressDashboardProps {
  stats: UserStats;
  setStats: React.Dispatch<React.SetStateAction<UserStats>>;
  levels: Level[];
  isMuted: boolean;
  onJumpToMatch: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  stats,
  setStats,
  levels,
  isMuted,
  onJumpToMatch,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<'all' | 'learned' | 'favorites'>('all');

  // Collect all 100 words flat
  const allWords = levels.flatMap((l) => l.words);

  const filteredWords = allWords.filter((word) => {
    const matchesSearch =
      word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.malayalam.includes(searchTerm) ||
      word.phoneticMalayalam.includes(searchTerm);

    if (!matchesSearch) return false;
    if (filterType === 'learned') return stats.wordsLearned.includes(word.id);
    if (filterType === 'favorites') return stats.favoriteWordIds.includes(word.id);
    return true;
  });

  const accuracyPercent =
    stats.totalMatchesAttempted > 0
      ? Math.round((stats.totalMatchesCorrect / stats.totalMatchesAttempted) * 100)
      : 100;

  const handleToggleFavorite = (wordId: string) => {
    playSelectSound(isMuted);
    setStats((prev) => {
      const favs = new Set(prev.favoriteWordIds);
      if (favs.has(wordId)) favs.delete(wordId);
      else favs.add(wordId);
      return { ...prev, favoriteWordIds: Array.from(favs) };
    });
  };

  const handleResetProgress = () => {
    const confirmed = window.confirm(
      'നിങ്ങളുടെ ഇതുവരെയുള്ള എല്ലാ പുരോഗതിയും റീസെറ്റ് ചെയ്യണോ? (Do you want to reset all progress?)'
    );
    if (confirmed) {
      localStorage.removeItem('kerala_english_learner_progress_v1');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Banner with generated image */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="p-6 sm:p-8 md:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md w-fit border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ദൈനംദിന പഠന പുരോഗതി</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              നിങ്ങൾ ഇംഗ്ലീഷ് പഠിക്കുന്നതിൽ മുന്നേറുകയാണ്!
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ദിവസവും 10 മിനിറ്റ് മാച്ച് ഗെയിമും പദ കാർഡുകളും പരിശീലിക്കുന്നത് ഇംഗ്ലീഷ് ഭാഷ സ്വാഭാവികമായി സംസാരിക്കാൻ നിങ്ങളെ സഹായിക്കും.
            </p>

            <div className="pt-2">
              <button
                onClick={onJumpToMatch}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
              >
                <span>ഇന്നത്തെ മാച്ച് ഗെയിം കളിക്കാം</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-5 h-48 md:h-full min-h-[220px] relative bg-slate-100">
            <img
              src="/src/assets/images/english_malayalam_hero_1791794430216.jpg"
              alt="English Learning Malayalam"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 4 Main Quantitative Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>ആകെ XP പോയിന്റ്</span>
            <Trophy className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
            {stats.xp}
          </div>
          <div className="text-[11px] text-emerald-700 font-medium">ലെവലുകൾ കളിച്ച് കൂടുതൽ നേടാം</div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>ദിവസ സ്ട്രീക്ക്</span>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
            {stats.streakDays} <span className="text-sm font-semibold text-slate-500">ദിവസം</span>
          </div>
          <div className="text-[11px] text-amber-700 font-medium">
            ഏറ്റവും ഉയർന്നത്: {stats.longestStreak || stats.streakDays} ദിവസം
          </div>
        </div>


        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>പഠിച്ച വാക്കുകൾ</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
            {stats.wordsLearned.length} <span className="text-sm font-semibold text-slate-500">/ {allWords.length}</span>
          </div>
          <div className="text-[11px] text-slate-500">പൂർത്തിയായത്: {stats.completedLevelIds.length} / {levels.length} ലെവലുകൾ</div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>മാച്ചിംഗ് കൃത്യത</span>
            <Target className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
            {accuracyPercent}%
          </div>
          <div className="text-[11px] text-slate-500">{stats.totalMatchesCorrect} ശരിയായ മാച്ചുകൾ</div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              നേട്ടങ്ങളും ബാഡ്ജുകളും (Badges & Rewards)
            </h2>
            <p className="text-xs text-slate-500">
              ലെവലുകൾ മികച്ച രീതിയിൽ പൂർത്തിയാക്കുമ്പോൾ അൺലോക്ക് ആകുന്ന ബാഡ്ജുകൾ
            </p>
          </div>
          <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            {stats.unlockedBadgeIds.length} / {BADGES_LIST.length} അൺലോക്ക് ആയി
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BADGES_LIST.map((badge) => {
            const isUnlocked = stats.unlockedBadgeIds.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-xl border transition-all ${
                  isUnlocked
                    ? 'border-amber-200 bg-amber-50/50 shadow-xs'
                    : 'border-slate-200 bg-slate-50/50 opacity-60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isUnlocked ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    <Award className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <div className="font-bold text-sm text-slate-900 truncate">
                        {badge.titleMl}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                      {badge.descMl}
                    </p>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {isUnlocked ? '✓ പൂർത്തിയായി' : `നിബന്ധന: ${badge.requiredMetric}`}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vocabulary Review & Dictionary Section */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              വാക്കുകളുടെ നിഘണ്ടുവും പുനരവലോകനവും (Vocabulary Dictionary)
            </h2>
            <p className="text-xs text-slate-500">
              നിങ്ങൾ പഠിച്ചതോ പഠിക്കാനിരിക്കുന്നതോ ആയ എല്ലാ 100 വാക്കുകളും ഇവിടെ കേട്ടു പരിശീലിക്കാം.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                filterType === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              എല്ലാം (100)
            </button>
            <button
              onClick={() => setFilterType('learned')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                filterType === 'learned'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              പഠിച്ചവ ({stats.wordsLearned.length})
            </button>
            <button
              onClick={() => setFilterType('favorites')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                filterType === 'favorites'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              പ്രിയപ്പെട്ടവ ({stats.favoriteWordIds.length})
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ഇംഗ്ലീഷിലോ മലയാളത്തിലോ വാക്ക് തിരയുക (Search word)..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Words Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-96 overflow-y-auto p-1">
          {filteredWords.map((word) => {
            const isFav = stats.favoriteWordIds.includes(word.id);
            const isLearned = stats.wordsLearned.includes(word.id);

            return (
              <div
                key={word.id}
                className="p-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all flex items-start justify-between gap-2"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-slate-900">{word.english}</span>
                    <span className="text-[11px] text-slate-500">[{word.phoneticMalayalam}]</span>
                    {isLearned && <span className="text-emerald-600 text-xs">✓</span>}
                  </div>
                  <div className="text-xs font-medium text-slate-700 truncate mt-0.5">
                    {word.malayalam}
                  </div>
                  <div className="text-[11px] text-slate-400 italic truncate mt-1">
                    "{word.exampleSentenceEn}"
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => speakEnglishWord(word.english, 0.85, isMuted)}
                    className="p-1 hover:text-emerald-700 text-slate-400 cursor-pointer"
                    title="ഉച്ചാരണം കേൾക്കുക"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleToggleFavorite(word.id)}
                    className="p-1 hover:text-amber-500 text-slate-300 cursor-pointer"
                    title="പ്രിയപ്പെട്ടതാക്കുക"
                  >
                    <Bookmark className={`w-4 h-4 ${isFav ? 'text-amber-500 fill-amber-500' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredWords.length === 0 && (
          <div className="text-center py-8 text-xs text-slate-400">
            വാക്കുകൾ കണ്ടെത്താനായില്ല.
          </div>
        )}
      </div>

      {/* App Installation Showcase Card */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-2xl p-5 sm:p-6 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
            മൊബൈൽ ആപ്പ് സൗകര്യം (Mobile App Ready)
          </div>
          <h3 className="text-lg sm:text-xl font-bold">
            ഈ ആപ്പ് നിങ്ങളുടെ ഫോണിന്റെ ഹോം സ്ക്രീനിൽ സൂക്ഷിക്കാം
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/80">
            ബ്രൗസറിൽ പോകാതെ ഒറ്റ ക്ലിക്കിൽ ആപ്പ് തുറന്ന് ദിവസേന ഇംഗ്ലീഷ് പഠനം തുടരാം.
          </p>
        </div>

        <button
          onClick={() => {
            const promptBtn = document.querySelector('button[aria-label="Daily Streak Status"]');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm cursor-pointer transition-all shadow-[0_3px_0_#cbd5e1] active:translate-y-0.5 active:shadow-none shrink-0"
        >
          മുകളിൽ നിന്നും ഇൻസ്റ്റാൾ ചെയ്യാം ↑
        </button>
      </div>

      {/* Danger Zone: Reset Progress */}
      <div className="text-right pt-2">

        <button
          onClick={handleResetProgress}
          className="text-xs text-slate-400 hover:text-rose-600 inline-flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>എല്ലാ ഡാറ്റയും റീസെറ്റ് ചെയ്യുക</span>
        </button>
      </div>
    </div>
  );
};
