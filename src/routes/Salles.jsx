import React from 'react';
import '../css/salles.css';
import logo from '../logo.svg';

import Cell from '../components/Cell';
import Data from '../components/StockData';
import Title from '../components/Title';
import Cellule from '../components/Cell'
import Tableau from '../components/Table';

function Salles() {
  return(
  <header className="App-header">
        <Tableau />
        <Title />
        <Data />
        <Cell />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}

export default Salles