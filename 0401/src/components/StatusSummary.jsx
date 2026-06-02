import React from 'react';

const StatusSummary = ({ total, completed, message }) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="glass animate-fade-in" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>오늘의 달성도</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{message}</p>
        </div>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
          {percentage}%
        </div>
      </div>
      <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div 
          style={{ 
            height: '100%', 
            width: `${percentage}%`, 
            background: 'linear-gradient(to right, #2dd4bf, #0ea5e9)', 
            transition: 'width 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            boxShadow: '0 0 12px rgba(45, 212, 191, 0.4)'
          }} 
        />
      </div>
      <div style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'right' }}>
        {completed} / {total} 완료됨
      </div>
    </div>
  );
};

export default StatusSummary;
