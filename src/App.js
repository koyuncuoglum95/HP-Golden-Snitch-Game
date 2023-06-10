import React from 'react';
import './App.css';
import CatchGoldenSnitch from './CatchGoldenSnitch';

function App() {  
  return (
    <div className="App">
      <div>
        <h1 className='letter-container'>Harry Potter Catch The Golden Snitch Game</h1>
      </div>
      <div className="game-area">
        <CatchGoldenSnitch />
      </div>
    </div>
  );
}

export default App;
