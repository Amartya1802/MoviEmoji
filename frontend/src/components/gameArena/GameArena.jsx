import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function GameArena() {
  const location = useLocation();
  const { username } = location.state;
  const [emojiString, setEmojiString] = useState('');
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);

  const fetchNewEmojiString = async () => {
    try {
      const response = await fetch('http://localhost:3001/generate');
      const data = await response.json();
      setEmojiString(data.emojiString);
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error fetching new emoji string:', error);
    }
  };

  useEffect(() => {
    fetchNewEmojiString();
  }, []);

  const handleStart = () => {
    fetchNewEmojiString();
  };

  const handleSubmit = () => {
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      setScore(score + 1);
      setUserAnswer('');
      fetchNewEmojiString();
    } else {
      alert('Incorrect! Try again.');
    }
  };

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <h2>Score: {score}</h2>
      <div>
        <h3>{emojiString}</h3>
        <input 
          type="text" 
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={fetchNewEmojiString}>Next</button>
    </div>
  );
}

