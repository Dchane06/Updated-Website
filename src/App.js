import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  return (
    <>
    <div className="NavBar">
        <NavBar />
    </div>
    <div className="Main">
      <Main />
    </div>
    </>
  );
}

export default App;
