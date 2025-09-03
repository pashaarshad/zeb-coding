import React from 'react';
import './MoodTrends.css';

function MoodTrends() {
  // Static mock data for demo
  const data = [
    { day: 'Mon', mood: '😊' },
    { day: 'Tue', mood: '😐' },
    { day: 'Wed', mood: '😔' },
    { day: 'Thu', mood: '😊' },
    { day: 'Fri', mood: '😢' },
    { day: 'Sat', mood: '😠' },
    { day: 'Sun', mood: '😊' }
  ];

  return (
    <div className="mood-trends-container">
      <h2>Mood Trends</h2>
      <div className="mood-trends-chart">
        {data.map((item, idx) => (
          <div key={idx} className="mood-trend-item">
            <div className="mood-emoji">{item.mood}</div>
            <div className="mood-day">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodTrends;
