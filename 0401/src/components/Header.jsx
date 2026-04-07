import React from 'react';

const Header = () => {
  const today = new Date().toLocaleDateString('ko-KR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="animate-fade-in" style={{ marginBottom: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'linear-gradient(to right, #2dd4bf, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        데일리 루틴
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>{today}</p>
    </header>
  );
};

export default Header;
