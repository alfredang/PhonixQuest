import React from 'react';
import { UserProgress } from '../types';
import { WORLD_NAMES } from '../constants';
import { Trophy, Flame, Map } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  user: UserProgress;
  onMapClick?: () => void;
}

const GamificationHUD: React.FC<Props> = ({ user, onMapClick }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-20 bg-white/10 backdrop-blur-lg border-b border-white/20 z-50 flex items-center justify-between px-4 sm:px-8 text-white">

      {/* Level / World Info */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute inset-0 bg-brand-primary blur-md opacity-50 rounded-full animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-brand-primary to-violet-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-heading font-bold text-xl shadow-xl border-2 border-white/20">
            {user.currentLevel}
          </div>
        </div>
        <div className="hidden sm:block">
          <p className="text-xs text-white/80 font-bold uppercase tracking-wider">Current World</p>
          <p className="text-lg font-heading font-bold text-white shadow-sm">{WORLD_NAMES[user.currentLevel as keyof typeof WORLD_NAMES] || 'Unknown World'}</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex items-center space-x-8">

        {/* Streak */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center space-x-2 text-orange-400 bg-black/20 px-3 py-1 rounded-full border border-white/10"
        >
          <Flame size={24} fill="currentColor" className="drop-shadow-md" />
          <span className="font-heading font-bold text-xl">{user.streak}</span>
        </motion.div>

        {/* XP */}
        <div className="flex flex-col items-end w-40">
          <div className="flex items-center space-x-2 text-brand-warning mb-1">
            <Trophy size={18} fill="currentColor" />
            <span className="font-bold text-sm text-white">{user.xp} XP</span>
          </div>
          {/* XP Bar */}
          <div className="w-full bg-black/20 rounded-full h-3 overflow-hidden border border-white/10 backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(user.xp % 100)}%` }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"
            />
          </div>
        </div>

        {/* Map Button (Mobile only mostly) */}
        {onMapClick && (
          <button
            onClick={onMapClick}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-white border border-white/20"
          >
            <Map size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default GamificationHUD;