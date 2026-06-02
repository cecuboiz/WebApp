import React, { useState } from 'react';

const AddRoutineForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('기타');

  const categories = {
    '자기개발': 'Personal',
    '업무': 'Work',
    '건강': 'Health',
    '학업': 'Study'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !time) return;
    
    onAdd({
      id: Date.now(),
      title,
      time,
      category,
      isDone: false
    });

    setTitle('');
    setTime('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="glass card-hover animate-fade-in" 
      style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-color)', fontWeight: '600' }}>새 루틴 추가</h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <input 
          type="text" 
          placeholder="할 일을 입력하세요 (예: 운동하기)" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px var(--accent-color)'}
          onBlur={(e) => e.target.style.boxShadow = 'none'}
          style={{ 
            flexGrow: 2, 
            padding: '0.75rem', 
            borderRadius: '0.75rem', 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid var(--border-color)',
            color: 'white',
            outline: 'none',
            transition: 'all 0.3s ease'
          }}
        />
        <input 
          type="time" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px var(--accent-color)'}
          onBlur={(e) => e.target.style.boxShadow = 'none'}
          style={{ 
            flexGrow: 1, 
            padding: '0.75rem', 
            borderRadius: '0.75rem', 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid var(--border-color)',
            color: 'white',
            outline: 'none',
            transition: 'all 0.3s ease'
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {['자기개발', '업무', '건강', '학업'].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '0.5rem',
              fontSize: '0.8rem',
              background: category === cat ? 'var(--accent-color)' : 'rgba(255,255,255,0.05)',
              color: 'white',
              border: category === cat ? 'none' : '1px solid var(--border-color)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <button 
        type="submit"
        style={{ 
          background: 'var(--accent-color)', 
          color: 'white', 
          padding: '0.8rem', 
          borderRadius: '0.75rem',
          fontWeight: 'bold',
          marginTop: '0.5rem'
        }}
      >
        추가하기
      </button>
    </form>
  );
};

export default AddRoutineForm;
