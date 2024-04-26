import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js'; // Importe o componente Navbar
import Info from './components/Info';
import Banner from './components/Banner';
import Blocao from './components/Blocao';
import Interesse from './components/Interesse';
import {ReactComponent as Logo} from './logo.svg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Blocao />
      <Interesse />
      <Info />
      <Logo className='Logo'/>
    </div>
  );
}

export default App;
