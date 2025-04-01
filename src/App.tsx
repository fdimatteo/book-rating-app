import React from 'react';
import BookList from './components/BookList';

const App: React.FC = () => {
  const sha = process.env.REACT_APP_GIT_SHA || 'dev';
  const tag = process.env.REACT_APP_GIT_TAG || 'n/a';
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
        color: '#666',
        backgroundColor: 'rgba(255, 250, 205, 0.8)',
        padding: '4px 8px',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        fontWeight: 'bold'
      }}>
        Release: {tag} • Commit: {sha.substring(0, 6)} • Released: {buildDate}
      </div>
    </div>
  );
};

export default App;