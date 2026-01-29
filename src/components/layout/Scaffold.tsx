import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScaffoldProps {
    children: ReactNode;
    theme?: 'sky' | 'space' | 'forest' | 'sunset'; // Theming for different worlds
}

const themeStyles = {
    sky: 'bg-gradient-to-br from-sky-400 to-indigo-500',
    space: 'bg-gradient-to-br from-slate-900 to-violet-900',
    forest: 'bg-gradient-to-br from-emerald-400 to-teal-600',
    sunset: 'bg-gradient-to-br from-orange-400 to-rose-500',
};

const Scaffold: React.FC<ScaffoldProps> = ({ children, theme = 'sky' }) => {
    return (
        <div className={`min-h-screen relative overflow-hidden ${themeStyles[theme]} text-white selection:bg-white/30`}>
            {/* Background Animated Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-white blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] right-[15%] w-64 h-64 rounded-full bg-white blur-3xl"
                />
            </div>

            <div className="relative z-10 flex flex-col h-full min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default Scaffold;
