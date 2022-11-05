import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Hello from './Hello';
import Student from './Student';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      <img scr={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Fullstack Development - l</h2>
        <h3>React JS Programming Week09 Lab exercise</h3>
        <h4>101349856</h4>
        <h5>TUNG PO ALEX TSANG</h5>
        <h6>George Brown College, Toronto</h6>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
