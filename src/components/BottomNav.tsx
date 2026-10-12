import React from 'react';
import { ActiveTab } from '../types';
import {
  Puzzle,
  SpellCheck,
  Layers,
  Sparkles,
  Headphones,
  BookOpen,
  HelpCircle,
  Award,
} from 'lucide-react';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'match' as ActiveTab, labelMl: 'മാച്ച്', labelEn: 'Match', icon: Puzzle },
    { id: 'spelling' as ActiveTab, labelMl: 'സ്പെല്ലിംഗ്', labelEn: 'Spelling', icon: SpellCheck },
    { id: 'memory' as ActiveTab, labelMl: 'മെമ്മറി', labelEn: 'Memory', icon: Layers },
    { id: 'sentence' as ActiveTab, labelMl: 'വാക്യങ്ങൾ', labelEn: 'Sentence', icon: Sparkles },
    { id: 'listening' as ActiveTab, labelMl: 'കേൾക്കാം', labelEn: 'Listen', icon: Headphones },
    { id: 'cards' as ActiveTab, labelMl: 'കാർഡുകൾ', labelEn: 'Cards', icon: BookOpen },
    { id: 'quiz' as ActiveTab, labelMl: 'ക്വിസ്', labelEn: 'Quiz', icon: HelpCircle },
    { id: 'progress' as ActiveTab, labelMl: 'പുരോഗതി', labelEn: 'Progress', icon: Award },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1 shadow-lg">
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-shrink-0 min-w-[62px] py-1 px-1.5 flex flex-col items-center justify-center gap-0.5 rounded-xl transition-all cursor-pointer relative ${
                isActive
                  ? 'text-emerald-700 font-bold'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-all ${
                  isActive
                    ? 'bg-emerald-100 text-emerald-800 scale-105'
                    : 'text-slate-400'
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] leading-tight truncate">
                {item.labelMl}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-emerald-600 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
