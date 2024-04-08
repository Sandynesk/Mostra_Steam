import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js'; // Importe o componente Navbar
import Info from './components/Info';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Renderize o componente Navbar */}
      <Banner/>
      <Info />
    {/* Outros conteúdos do seu aplicativo */}
    </div>
  );
}

export default App;
