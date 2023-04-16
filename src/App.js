import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './views/Login.js';
import Register from './views/Register.js';
import Home from './views/Home.js';

function App() {
  const [autentificacion, setAutentificacion] = useState(false);

  useEffect(() => {
    const autentificacionGuardada = localStorage.getItem("autentificacion");
    if (autentificacionGuardada) {
        setAutentificacion(autentificacionGuardada);
    }
  }, []);

  if(!autentificacion){
    return (
      <div className="App">
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    );
  }
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
