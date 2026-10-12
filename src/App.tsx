import React, { useState, useEffect } from 'react';
import { ActiveTab, UserStats } from './types';
import { LEVELS } from './data/vocabulary';
import { loadUserStats, saveUserStats } from './utils/storage';
import { Header } from './components/Header';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { BottomNav } from './components/BottomNav';
import { MatchGame } from './components/MatchGame';
import { WordScramble } from './components/WordScramble';
import { MemoryMatch } from './components/MemoryMatch';
import { SentenceBuilder } from './components/SentenceBuilder';
import { ListeningChallenge } from './components/ListeningChallenge';
import { Flashcards } from './components/Flashcards';
import { QuizGame } from './components/QuizGame';
import { ProgressDashboard } from './components/ProgressDashboard';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('match');
  const [currentLevelId, setCurrentLevelId] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [stats, setStats] = useState<UserStats>(() => loadUserStats());

  // Keep stats synced with localStorage whenever updated
  useEffect(() => {
    saveUserStats(stats);
  }, [stats]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-900 pb-20 md:pb-0">
      {/* PWA Install Banner */}
      <PWAInstallPrompt />

      {/* Top Header compliant with Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        stats={stats}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'match' && (
          <MatchGame
            levels={LEVELS}
            currentLevelId={currentLevelId}
            setCurrentLevelId={setCurrentLevelId}
            stats={stats}
            setStats={setStats}
            isMuted={isMuted}
          />
        )}

        {activeTab === 'spelling' && (
          <WordScramble
            levels={LEVELS}
            currentLevelId={currentLevelId}
            setCurrentLevelId={setCurrentLevelId}
            stats={stats}
            setStats={setStats}
            isMuted={isMuted}
          />
        )}

        {activeTab === 'memory' && (
          <MemoryMatch
            levels={LEVELS}
            currentLevelId={currentLevelId}
            setCurrentLevelId={setCurrentLevelId}
            stats={stats}
            setStats={setStats}
            isMuted={isMuted}
          />
        )}

        {activeTab === 'sentence' && (
          <SentenceBuilder
            stats={stats}
            setStats={setStats}
            isMuted={isMuted}
          />
        )}

        {activeTab === 'listening' && (
          <ListeningChallenge
            levels={LEVELS}
            currentLevelId={currentLevelId}
            setCurrentLevelId={setCurrentLevelId}
            stats={stats}
            setStats={setStats}
            isMuted={isMuted}
          />
        )}

        {activeTab === 'cards' && (
          <Flashcards
            levels={LEVELS}
            currentLevelId={currentLevelId}
            setCurrentLevelId={setCurrentLevelId}
            stats={stats}
            setStats={setStats}
            isMuted={isMuted}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizGame
            levels={LEVELS}
            currentLevelId={currentLevelId}
            setCurrentLevelId={setCurrentLevelId}
            stats={stats}
            setStats={setStats}
            isMuted={isMuted}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressDashboard
            stats={stats}
            setStats={setStats}
            levels={LEVELS}
            isMuted={isMuted}
            onJumpToMatch={() => setActiveTab('match')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500 hidden md:block">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-600 font-semibold">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>ഇംഗ്ലീഷ് പഠിക്കാം — മലയാളികൾക്കായുള്ള സമഗ്രമായ ഇംഗ്ലീഷ് പഠന സഹായി</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span>30 ലെവലുകൾ</span>
            <span aria-hidden="true">·</span>
            <span>300 പദസമ്പത്ത്</span>
            <span aria-hidden="true">·</span>
            <span>7 ഗെയിം മോഡലുകൾ</span>
            <span aria-hidden="true">·</span>
            <span>ശബ്ദ സവിശേഷതകൾ</span>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
