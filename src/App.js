import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from"./Person";
import Table from "./Table";

function App() {
  const characters = [
    {
        name:"Charlie",
        age: "23",
        job:"Developer"
    },
    {
        name:"Davie",
        age: "29",
        job:"Designer"
    }
  ] 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <Table characterData={characters}/>

        </div>
      </header>
    </div>
  );
}

export default App;
