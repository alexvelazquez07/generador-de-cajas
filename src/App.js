import './App.css';
import React, { useState } from 'react';
import Espacios from './components/Espacios';
import Vistas from './components/Vistas';

function App() {
  const [cajas, setCajas] = useState([]);

  return (
    <div className="App">
      <Espacios cajas= {cajas} setCajas = {setCajas} />
      <Vistas data = {cajas} />
    </div>
  );
}

export default App;
