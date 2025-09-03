
import React, { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import MoodCheckIn from './components/MoodCheckIn';
import Dashboard from './components/Dashboard';

function App() {
  const [page, setPage] = useState('chat');

  return (
    <div className="App">
      <nav className="app-nav">
        <button onClick={() => setPage('chat')}>AI Chat</button>
        <button onClick={() => setPage('mood')}>Mood Check-In</button>
        <button onClick={() => setPage('dashboard')}>Dashboard</button>
      </nav>
      <main className="app-main">
        {page === 'chat' && <Chat />}
        {page === 'mood' && <MoodCheckIn />}
        {page === 'dashboard' && <Dashboard />}
      </main>
    </div>
  );
}

export default App;
