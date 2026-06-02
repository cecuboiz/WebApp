import React from 'react';

const CategoryTag = ({ label, color }) => {
  return (
    <span style={{ 
      fontSize: '0.7rem', 
      padding: '0.25rem 0.6rem', 
      borderRadius: '1rem', 
      background: `${color}20`, 
      color: color,
      border: `1px solid ${color}40`,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }}>
      {label}
    </span>
  );
};

export default CategoryTag;
