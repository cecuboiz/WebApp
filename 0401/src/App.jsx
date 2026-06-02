import { useState, useEffect } from 'react'
import Header from './components/Header'
import StatusSummary from './components/StatusSummary'
import RoutineList from './components/RoutineList'
import AddRoutineForm from './components/AddRoutineForm'
import AppFooter from './components/AppFooter'
import './App.css'

function App() {
  const [routines, setRoutines] = useState(() => {
    const saved = localStorage.getItem('daily_routines');
    return saved ? JSON.parse(saved) : [
      { id: 1, time: '07:00', title: '아침 식사', category: '건강', isDone: true },
      { id: 2, time: '09:00', title: '하루 계획 세우기', category: '업무', isDone: false },
      { id: 3, time: '13:00', title: '독서', category: '학업', isDone: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem('daily_routines', JSON.stringify(routines));
  }, [routines]);

  const toggleRoutine = (id) => {
    setRoutines(routines.map(r => 
      r.id === id ? { ...r, isDone: !r.isDone } : r
    ));
  };

  const addRoutine = (newRoutine) => {
    setRoutines([...routines, newRoutine].sort((a, b) => a.time.localeCompare(b.time)));
  };

  const completedCount = routines.filter(r => r.isDone).length;
  const totalCount = routines.length;
  
  const getMotivationalMessage = () => {
    if (totalCount === 0) return "오늘의 계획을 세워보세요!";
    const ratio = completedCount / totalCount;
    if (ratio === 1) return "대단해요! 오늘의 모든 루틴을 완료했습니다.";
    if (ratio > 0.5) return "잘하고 있어요! 절반 이상 달성했네요.";
    return "조금씩 꾸준히 나아가 보세요!";
  };

  return (
    <main className="app-container">
      <Header />
      
      <StatusSummary 
        total={totalCount} 
        completed={completedCount} 
        message={getMotivationalMessage()} 
      />

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          오늘의 루틴
        </h2>
        <RoutineList 
          routines={routines} 
          onToggle={toggleRoutine} 
        />
      </section>

      <AddRoutineForm onAdd={addRoutine} />
      
      <AppFooter company="데일리 루틴" year={2026} />
    </main>
  )
}

export default App
