import React from 'react';
import BookList from './components/BookList';

const App: React.FC = () => {
  const sha = process.env.REACT_APP_GIT_SHA || 'dev';
  const buildDate = process.env.REACT_APP_BUILD_DATE || new Date().toISOString().split('T').join(' ');

  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: '100vh'
    }}>
      <h1 className="app-title" style={{ textAlign: 'center' }}>
        📚 Book Rating App
      </h1>
      <div className="content-container">
        <BookList />
      </div>
      <div style={{ 
        position: 'fixed', 
        bottom: '10px', 
        right: '10px',
        fontSize: '12px',
        color: '#666'
      }}>
        Commit: {sha.substring(0, 6)} • Released: {buildDate}
      </div>
    </div>
  );
};

export default App;