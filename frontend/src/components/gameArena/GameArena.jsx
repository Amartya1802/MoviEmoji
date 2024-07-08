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
    // Call your API to get a new emoji string and answer
    // Example:
    // const response = await fetch('your-api-endpoint');
    // const data = await response.json();
    // setEmojiString(data.emojiString);
    // setAnswer(data.answer);

    // For now, let's use a placeholder
    setEmojiString('🎥🤖');
    setAnswer('Robot Movie'); // Placeholder
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
