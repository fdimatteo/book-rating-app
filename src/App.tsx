import React from 'react';
import BookList from './components/BookList';

const App: React.FC = () => {
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
    </div>
  );
};

export default App;