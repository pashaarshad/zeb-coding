
import React, { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import MoodCheckIn from './components/MoodCheckIn';
import Dashboard from './components/Dashboard';


function App() {
  const [page, setPage] = useState('chat');
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@gmail.com' && password === 'test123') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials. Try test@gmail.com / test123');
    }
  };

  if (!loggedIn) {
    return (
      <div className="login-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(120deg, #e3f2fd 0%, #f7f7fa 100%)' }}>
        <form className="login-form" onSubmit={handleLogin} style={{ background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', minWidth: 320 }}>
          <h2 style={{ textAlign: 'center', color: '#1976d2' }}>Login</h2>
          <div style={{ marginBottom: 16 }}>
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="test@gmail.com" style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ccc', marginTop: 4 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="test123" style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #ccc', marginTop: 4 }} />
          </div>
          {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
          <button type="submit" style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 20px', width: '100%', fontSize: 16, cursor: 'pointer' }}>Login</button>
          <div style={{ marginTop: 16, color: '#888', fontSize: 14, textAlign: 'center' }}>Demo: test@gmail.com / test123</div>
        </form>
      </div>
    );
  }

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
