import React from 'react';

const AppFooter = ({ company, year }) => {
  return (
    <footer style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
      <p>© {year} {company} 트래커</p>
    </footer>
  );
};

export default AppFooter;
