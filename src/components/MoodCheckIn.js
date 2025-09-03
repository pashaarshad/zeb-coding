import React, { useState } from 'react';
import './MoodCheckIn.css';

const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😔', label: 'Sad' },
  { emoji: '😠', label: 'Angry' },
  { emoji: '😢', label: 'Crying' }
];

function MoodCheckIn() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mood-checkin-container">
      <h2>Mood Check-In</h2>
      <div className="mood-options">
        {moods.map((mood, idx) => (
          <button
            key={idx}
            className={`mood-btn${selected === idx ? ' selected' : ''}`}
            onClick={() => setSelected(idx)}
          >
            <span role="img" aria-label={mood.label}>{mood.emoji}</span>
            <div>{mood.label}</div>
          </button>
        ))}
      </div>
      {selected !== null && <div className="mood-selected">You feel: {moods[selected].label}</div>}
    </div>
  );
}

export default MoodCheckIn;
