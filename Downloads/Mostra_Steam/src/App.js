import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js'; // Importe o componente Navbar
import Info from './components/Info';
import Banner from './components/Banner';
import Blocao from './components/Blocao';
import Interesse from './components/Interesse';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Renderize o componente Navbar */}
      <Banner/>
      <Blocao />
      <Interesse />
      <Info />
    {/* Outros conteúdos do seu aplicativo */}
    </div>
  );
}

export default App;
