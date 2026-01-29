import React from 'react';
import { Phoneme } from '../types';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';

interface Props {
  phoneme: Phoneme;
  isPlaying: boolean;
  onPlay: () => void;
}

const PhonemeDisplay: React.FC<Props> = ({ phoneme, isPlaying, onPlay }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-10 w-full">

      {/* Main Card */}
      <motion.div
        className="relative bg-white border-4 border-indigo-50 rounded-[2.5rem] shadow-xl p-12 w-64 h-64 flex flex-col items-center justify-center cursor-pointer overflow-visible"
        onClick={onPlay}
        whileTap={{ scale: 0.95 }}
        whileHover={{ y: -5, borderColor: '#e0e7ff' }}
        animate={isPlaying ? { scale: [1, 1.05, 1], boxShadow: "0px 0px 30px rgba(99, 102, 241, 0.4)" } : {}}
      >
        <span className={`text-8xl font-black ${phoneme.soundType === 'vowel' ? 'text-brand-secondary' : 'text-brand-primary'} drop-shadow-sm`}>
          {phoneme.symbol}
        </span>
        <span className="text-2xl text-slate-300 font-mono mt-2 font-bold opacity-50">{phoneme.ipa}</span>

        <motion.button
          className="absolute -bottom-6 bg-brand-primary text-white p-5 rounded-full shadow-lg hover:bg-indigo-600 transition ring-4 ring-white"
          whileHover={{ scale: 1.1 }}
        >
          <Volume2 size={28} />
        </motion.button>
      </motion.div>

      {/* Description / Mouth visual placeholder */}
      <div className="text-center max-w-md bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <p className="text-xl text-slate-600 font-bold mb-4 leading-relaxed">"{phoneme.description}"</p>

        {/* Abstract Mouth Visual */}
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-inner">
          <p className="text-xs text-slate-300 uppercase font-black tracking-widest mb-2">MOUTH POSITION</p>
          <div className="flex justify-center space-x-4">
            {/* Simple SVG representation of mouth shape based on type */}
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-700">
              {phoneme.soundType === 'vowel' ? (
                <ellipse cx="30" cy="20" rx="15" ry="12" stroke="currentColor" strokeWidth="4" />
              ) : (
                <line x1="15" y1="20" x2="45" y2="20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              )}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonemeDisplay;