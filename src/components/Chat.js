import React, { useState } from 'react';
import './Chat.css';

const responses = {
  hi: 'Hello! How are you feeling today?',
  hello: 'Hi there! How can I support you today?',
  'what is your name': "I'm your wellness companion.",
  okay: 'Glad to hear that. Would you like to journal or check your mood?'
};

function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hi! I am here to listen. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    const aiReply = responses[input.trim().toLowerCase()] || "I'm here to listen. Please share more.";
    setMessages([...messages, userMsg, { sender: 'ai', text: aiReply }]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <h2>AI Chat Companion</h2>
      <div className="chat-history">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-msg ${msg.sender}`}>{msg.text}</div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
