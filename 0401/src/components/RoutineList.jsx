import React from 'react';
import RoutineItem from './RoutineItem';

const RoutineList = ({ routines, onToggle }) => {
  if (routines.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)' }}>
        <p>기록된 루틴이 없습니다.</p>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      {routines.map((routine) => (
        <RoutineItem 
          key={routine.id}
          {...routine}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default RoutineList;
