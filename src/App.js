import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './views/Login.js';
import Register from './views/Register.js';
import Home from './views/Home.js';
import PetExam from './views/PetExam';
import PetSpecific from './views/PetSpecific';
import AddExam from './views/AddExam';
import AddPet from './views/AddPet';

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
          <Route path="pet-exam" element={<PetExam />} />
          <Route path="pet-specific" element={<PetSpecific />} />
          <Route path="add-exam" element={<AddExam />} />
          <Route path="add-pet" element={<AddPet />} />
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
        <Route path="pet-exam" element={<PetExam />} />
        <Route path="pet-specific" element={<PetSpecific />} />
        <Route path="add-exam" element={<AddExam />} />
          <Route path="add-pet" element={<AddPet />} />
      </Routes>
    </div>
  );
}

export default App;
