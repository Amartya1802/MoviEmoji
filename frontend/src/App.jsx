import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/landingPage/LandingPage';
import { GameArena } from './components/gameArena/GameArena'; // Assuming you have a GameArena component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GameArena />} />
      </Routes>
    </Router>
  );
}

export default App;
