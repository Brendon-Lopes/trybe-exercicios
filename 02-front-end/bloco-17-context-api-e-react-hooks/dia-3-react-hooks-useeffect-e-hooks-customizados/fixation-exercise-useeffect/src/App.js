import React from 'react';
import useTimer from './hooks/useTimer';
import './App.css';

function App() {
  const { number, isMultiple, timer } = useTimer();

  return (
    <div className="App">
      <h1>{number}</h1>
      <h3>{timer}</h3>
      <h2>{isMultiple && 'Acerto'}</h2>
    </div>
  );
}

export default App;
