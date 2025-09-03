import React, { useState } from 'react';
import './Journal.css';

function Journal() {
  const [entry, setEntry] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="journal-container">
      <h2>Private Journal</h2>
      <textarea
        value={entry}
        onChange={e => setEntry(e.target.value)}
        placeholder="Write your thoughts here..."
        rows={6}
      />
      <button onClick={handleSave}>Save Entry</button>
      {saved && <div className="journal-saved">Saved!</div>}
    </div>
  );
}

export default Journal;
