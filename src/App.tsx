import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import LessonView from './pages/LessonView';
import GamificationHUD from './components/GamificationHUD';
import Scaffold from './components/layout/Scaffold';
import { UserProgress } from './types';
import { INITIAL_USER_STATE } from './constants';

enum View {
  DASHBOARD,
  LESSON
}

const App: React.FC = () => {
  const [view, setView] = useState<View>(View.DASHBOARD);
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [user, setUser] = useState<UserProgress>(INITIAL_USER_STATE);

  const handleLessonSelect = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setView(View.LESSON);
  };

  const handleLessonComplete = (score: number) => {
    setUser(prev => ({
      ...prev,
      xp: prev.xp + score,
      completedLessons: currentLessonId ? [...prev.completedLessons, currentLessonId] : prev.completedLessons
    }));
    setView(View.DASHBOARD);
    setCurrentLessonId(null);
  };

  const handleExitLesson = () => {
    setView(View.DASHBOARD);
    setCurrentLessonId(null);
  };

  // Determine theme based on level or world
  const currentTheme = 'sky';

  return (
    <Scaffold theme={currentTheme}>
      <GamificationHUD user={user} />

      <div className="flex-1 w-full max-w-7xl mx-auto p-4 pt-24">
        {view === View.DASHBOARD && (
          <Dashboard user={user} onLessonSelect={handleLessonSelect} />
        )}

        {view === View.LESSON && currentLessonId && (
          <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl">
            <LessonView
              lessonId={currentLessonId}
              onExit={handleExitLesson}
              onComplete={handleLessonComplete}
            />
          </div>
        )}
      </div>
    </Scaffold>
  );
};

export default App;