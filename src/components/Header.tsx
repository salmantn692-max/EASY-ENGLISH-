import React, { useState, useRef, useEffect } from 'react';
import { ActiveTab, UserStats } from '../types';
import { Volume2, VolumeX, Flame, Trophy, Calendar, CheckCircle, Sparkles, X, RotateCw } from 'lucide-react';
import { getTodayDateString } from '../utils/storage';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  stats: UserStats;
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  stats,
  isMuted,
  setIsMuted,
}) => {
  const [showStreakModal, setShowStreakModal] = useState<boolean>(false);
  const streakRef = useRef<HTMLDivElement>(null);
  const todayStr = getTodayDateString();
  const isPracticedToday = stats.todayActivityCount > 0 || (stats.streakHistory && stats.streakHistory.includes(todayStr));

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (streakRef.current && !streakRef.current.contains(event.target as Node)) {
        setShowStreakModal(false);
      }
    }
    if (showStreakModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showStreakModal]);

  // Generate last 7 days for the streak week tracker
  const getRecentDays = () => {
    const days = [];
    const dayNamesMl = ['ഞായർ', 'തിങ്കൾ', 'ചൊവ്വ', 'ബുധൻ', 'വ്യാഴം', 'വെള്ളി', 'ശനി'];
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const dateString = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const isToday = dateString === todayStr;
      const isActive = stats.streakHistory ? stats.streakHistory.includes(dateString) : false;

      days.push({
        dateString,
        dayLabel: dayNamesMl[d.getDay()],
        dayNum: d.getDate(),
        isToday,
        isActive: isActive || (isToday && isPracticedToday),
      });
    }
    return days;
  };

  const recentDays = getRecentDays();

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-30 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('match')}
            className="text-left group cursor-pointer focus:outline-none"
            title="ഇംഗ്ലീഷ് പഠിക്കാം ഹോം"
          >
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-emerald-800 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
              ഇംഗ്ലീഷ് പഠിക്കാം
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Desktop only, mobile uses BottomNav) */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 md:gap-3 overflow-x-auto py-1 text-sm font-semibold text-slate-600 no-scrollbar">
          <button
            onClick={() => setActiveTab('match')}
            className={`whitespace-nowrap shrink-0 px-2 py-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'match'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            മാച്ച് ഗെയിം
          </button>

          <button
            onClick={() => setActiveTab('spelling')}
            className={`whitespace-nowrap shrink-0 px-2 py-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'spelling'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            സ്പെല്ലിംഗ്
          </button>

          <button
            onClick={() => setActiveTab('memory')}
            className={`whitespace-nowrap shrink-0 px-2 py-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'memory'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            മെമ്മറി
          </button>

          <button
            onClick={() => setActiveTab('sentence')}
            className={`whitespace-nowrap shrink-0 px-2 py-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'sentence'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            വാക്യങ്ങൾ
          </button>

          <button
            onClick={() => setActiveTab('listening')}
            className={`whitespace-nowrap shrink-0 px-2 py-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'listening'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            കേൾക്കാം
          </button>

          <button
            onClick={() => setActiveTab('cards')}
            className={`whitespace-nowrap shrink-0 px-2 py-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'cards'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            പദ കാർഡുകൾ
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`whitespace-nowrap shrink-0 px-2 py-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'quiz'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            ക്വിസ്
          </button>

          <button
            onClick={() => setActiveTab('progress')}
            className={`whitespace-nowrap shrink-0 px-2 py-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'progress'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            പുരോഗതി
          </button>
        </nav>


        {/* Zone 3: Daily Streak Action & Audio Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative" ref={streakRef}>
          {/* Daily Streak Trigger Button */}
          <button
            onClick={() => setShowStreakModal((prev) => !prev)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${
              isPracticedToday
                ? 'border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 shadow-xs'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
            }`}
            title="ദൈനംദിന സ്ട്രീക്ക് വിവരങ്ങൾ കാണുക (Click for Streak Details)"
            aria-label="Daily Streak Status"
          >
            <Flame
              className={`w-4 h-4 ${
                stats.streakDays > 0
                  ? 'text-amber-500 fill-amber-500 animate-pulse'
                  : 'text-slate-400'
              }`}
            />
            <span className="tabular-nums font-extrabold text-sm text-amber-950">
              {stats.streakDays}
            </span>
            <span className="hidden sm:inline text-xs text-amber-900 font-medium">
              ദിവസം
            </span>
            {isPracticedToday && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" title="ഇന്ന് സജീവം" />
            )}
          </button>

          {/* Refresh App to fetch updates */}
          <button
            onClick={() => {
              if (window.caches) {
                window.caches.keys().then((names) => {
                  Promise.all(names.map((name) => window.caches.delete(name))).then(() => {
                    window.location.reload();
                  });
                }).catch(() => {
                  window.location.reload();
                });
              } else {
                window.location.reload();
              }
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer shadow-2xs active:scale-95 text-xs font-bold shrink-0"
            title="ഏറ്റവും പുതിയ മാറ്റങ്ങൾ ലഭിക്കാൻ റീഫ്രഷ് ചെയ്യുക (Refresh App)"
            aria-label="Refresh App"
          >
            <RotateCw className="w-3.5 h-3.5 text-emerald-700 animate-hover" />
            <span className="text-xs font-bold text-emerald-900">പുതുക്കുക</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => setIsMuted((prev) => !prev)}
            className="p-2 text-slate-600 hover:text-emerald-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            title={isMuted ? 'ശബ്ദം ഓണാക്കുക (Unmute)' : 'ശബ്ദം നിശബ്ദമാക്കുക (Mute)'}
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-emerald-700" />}
          </button>

          {/* Daily Streak Popover Card */}
          {showStreakModal && (
            <div className="absolute right-0 top-12 w-80 sm:w-96 bg-white rounded-2xl border border-slate-200 shadow-xl p-5 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                    <Flame className="w-5 h-5 fill-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      ദൈനംദിന സ്ട്രീക്ക് (Daily Streak)
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      സ്ഥിരമായി പരിശീലനം നടത്തി സ്ട്രീക്ക് നിലനിർത്തുക
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowStreakModal(false)}
                  className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Big Streak Numbers */}
              <div className="grid grid-cols-2 gap-2 my-4">
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 text-center">
                  <div className="text-[11px] font-semibold text-amber-800">നിലവിലെ സ്ട്രീക്ക്</div>
                  <div className="text-2xl font-extrabold text-amber-900 tabular-nums flex items-center justify-center gap-1 mt-0.5">
                    <span>{stats.streakDays}</span>
                    <span className="text-xs font-semibold text-amber-700">ദിവസങ്ങൾ</span>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <div className="text-[11px] font-semibold text-slate-600">ഏറ്റവും ഉയർന്നത്</div>
                  <div className="text-2xl font-extrabold text-slate-800 tabular-nums flex items-center justify-center gap-1 mt-0.5">
                    <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{stats.longestStreak || stats.streakDays}</span>
                    <span className="text-xs font-semibold text-slate-500">ദിവസം</span>
                  </div>
                </div>
              </div>

              {/* 7-Day History Visual Tracker */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>കഴിഞ്ഞ 7 ദിവസങ്ങൾ:</span>
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {isPracticedToday ? '✓ ഇന്ന് പൂർത്തിയായി' : 'ഇന്നത്തെ പാഠം ബാക്കി'}
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-1.5 text-center">
                  {recentDays.map((day) => (
                    <div
                      key={day.dateString}
                      className={`p-1.5 rounded-lg border text-center transition-all ${
                        day.isActive
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                          : day.isToday
                          ? 'bg-amber-50 border-amber-300 text-amber-900 ring-1 ring-amber-400'
                          : 'bg-slate-50 border-slate-100 text-slate-400'
                      }`}
                    >
                      <div className="text-[10px] font-medium truncate">{day.dayLabel}</div>
                      <div className="text-xs font-bold tabular-nums mt-0.5">{day.dayNum}</div>
                      <div className="mt-1 flex justify-center">
                        {day.isActive ? (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <span className={`w-2 h-2 rounded-full ${day.isToday ? 'bg-amber-400 animate-pulse' : 'bg-slate-200'}`} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Motivational Advice */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-200/60 rounded-xl text-left text-xs text-emerald-950 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  ദിവസവും കുറഞ്ഞത് 10 വാക്കുകൾ മാച്ച് ചെയ്യുക. ഇത് പദസമ്പത്ത് ഓർമ്മയിൽ നിൽക്കാനും ഇംഗ്ലീഷ് ആത്മവിശ്വാസത്തോടെ സംസാരിക്കാനും സഹായിക്കും!
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  ഇന്നത്തെ ആക്ടിവിറ്റികൾ: <b className="tabular-nums text-slate-800">{stats.todayActivityCount || 0}</b>
                </span>
                <button
                  onClick={() => {
                    setActiveTab('match');
                    setShowStreakModal(false);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs cursor-pointer transition-colors"
                >
                  മാച്ച് ഗെയിം കളിക്കുക
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

