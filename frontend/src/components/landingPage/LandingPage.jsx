import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPageStyle.css';

export function LandingPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    if (username) {
      navigate('/game', { state: { username } });
    }
  };

  return (
    <>
      <div className="upHalf"> 
        <div className="title">
          <div className="titleText1">
            <h1>😎MoviEmoji</h1>
          </div>
          <div className="titleText2">
            <p>Guess the movie with emoji</p>
          </div>
        </div>
        <div className="upperRight">
          <h2>icon1</h2>
          <h2>icon2</h2>
          <h2>icon3</h2>
          <h2>icon4</h2>
        </div>
      </div>

      <div className="lowHalf">
        <div className="makeRoom">
          <input 
            type="text" 
            placeholder="Enter Username" 
            className="usernameInput1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="makeRoomBtn" onClick={handleCreateRoom}>
            Create Room
          </button>
        </div>
      </div>
    </>
  );
}
