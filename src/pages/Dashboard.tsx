import React from 'react';
import { MOCK_LESSONS, WORLD_NAMES } from '../constants';
import { UserProgress } from '../types';
import { Star, Lock, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
    user: UserProgress;
    onLessonSelect: (lessonId: string) => void;
}

const Dashboard: React.FC<Props> = ({ user, onLessonSelect }) => {
    return (
        <div className="max-w-4xl mx-auto pb-10 px-4">
            <header className="mb-12 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-heading font-black mb-4 drop-shadow-md">Adventure Map</h1>
                <p className="text-xl opacity-90 font-medium">Select your next mission, explorer!</p>
            </header>

            <div className="space-y-16 relative">
                {/* Path Line (Purely visual vertical line) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-white/20 -translate-x-1/2 rounded-full hidden md:block -z-10 backdrop-blur-sm border-x border-white/10" />

                {MOCK_LESSONS.map((lesson, index) => {
                    const isLocked = false; // logic: index > user.completedLessons.length;
                    const isCompleted = user.completedLessons.includes(lesson.id);
                    const isCurrent = !isLocked && !isCompleted;

                    return (
                        <motion.div
                            key={lesson.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}
                        >
                            {/* Lesson Card */}
                            <div className={`
                        w-full md:w-5/12 bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 border-4 transition-all duration-300 relative overflow-visible group
                        ${isLocked ? 'border-white/20 opacity-60 grayscale' : 'border-white hover:border-brand-warning hover:scale-105 shadow-xl cursor-pointer'}
                        ${isCurrent ? 'ring-8 ring-brand-warning/30 border-brand-warning transform scale-105 z-10' : ''}
                    `}
                                onClick={() => !isLocked && onLessonSelect(lesson.id)}
                            >
                                {isCurrent && (
                                    <div className="absolute -top-4 -right-4 bg-brand-warning text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                                        START HERE
                                    </div>
                                )}

                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                                        {lesson.level}
                                    </span>
                                    <div className="flex text-yellow-400 filter drop-shadow-sm">
                                        {[1, 2, 3].map(s => <Star key={s} size={18} fill={isCompleted ? "currentColor" : "none"} className={!isCompleted ? "text-slate-200" : ""} />)}
                                    </div>
                                </div>

                                <h3 className={`text-2xl font-black mb-2 group-hover:text-brand-primary transition-colors ${isCurrent ? 'text-brand-primary' : 'text-slate-800'}`}>
                                    {lesson.title}
                                </h3>
                                <p className="text-slate-500 text-base mb-6 font-medium leading-relaxed">
                                    {lesson.description}
                                </p>

                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-sm font-bold text-brand-primary bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100">
                                        +{lesson.xpReward} XP
                                    </span>
                                    <button className={`
                                w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-md
                                ${isLocked ? 'bg-slate-100 text-slate-300' : 'bg-brand-primary text-white group-hover:bg-brand-secondary'}
                            `}>
                                        {isLocked ? <Lock size={20} /> : <Play size={24} fill="currentColor" className="ml-1" />}
                                    </button>
                                </div>
                            </div>

                            {/* Connector Dot for Desktop */}
                            <div className={`
                        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full hidden md:flex items-center justify-center border-4 border-white z-0 shadow-lg
                        ${isCompleted ? 'bg-brand-success' : isCurrent ? 'bg-brand-warning animate-pulse' : 'bg-slate-300'}
                    `} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Dashboard;