import React from 'react';
import MoodTrends from './MoodTrends';
import Journal from './Journal';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <MoodTrends />
      <Journal />
    </div>
  );
}

export default Dashboard;
