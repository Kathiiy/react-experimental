import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from"./Person";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{ Person }</h1>
      </header>
    </div>
  );
}

export default App;
