import React from 'react';
import CategoryTag from './CategoryTag';

const RoutineItem = ({ id, time, title, category, isDone, onToggle }) => {
  const categoryColors = {
    '업무': '#0ea5e9',
    '건강': '#2dd4bf',
    '학업': '#f59e0b',
    '자기개발': '#fb7185'
  };

  const badgeColor = categoryColors[category] || 'var(--accent-color)';

  return (
    <div 
      className="glass card-hover animate-fade-in" 
      style={{ 
        padding: '1rem', 
        marginBottom: '1rem', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem',
        opacity: isDone ? 0.7 : 1,
        transition: 'all 0.3s ease'
      }}
    >
      <button 
        onClick={() => onToggle(id)}
        style={{ 
          width: '28px', 
          height: '28px', 
          borderRadius: '50%', 
          border: `2px solid ${isDone ? 'var(--success)' : 'var(--border-color)'}`,
          background: isDone ? 'var(--success)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        {isDone && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </button>

      <div style={{ flexGrow: 1 }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{time}</p>
        <h3 style={{ 
          fontSize: '1rem', 
          textDecoration: isDone ? 'line-through' : 'none',
          color: isDone ? 'var(--text-secondary)' : 'var(--text-primary)'
        }}>
          {title}
        </h3>
      </div>

      <CategoryTag label={category} color={badgeColor} />
    </div>
  );
};

export default RoutineItem;
