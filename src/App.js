import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './views/Login.js';
import Register from './views/Register.js';
// Usuarios
import Home from './views/Usuario/Home.js';
import PetExam from './views/Usuario/PetExam.js';
import PetSpecific from './views/Usuario/PetSpecific.js';
import AddExam from './views/Usuario/AddExam.js';
import AddPet from './views/Usuario/AddPet.js';
// Veterinarios
import HomeVet from './views/Veterinario/HomeVet.js';
import RegisterVet from './views/Veterinario/RegisterVet.js'
import ExamPet from './views/Veterinario/ExamPet.js';
import Exams from './views/Veterinario/Exams.js';
import Report from './views/Veterinario/Report.js';
import Parasitologia from './views/Veterinario/Examenes/Parasitologia.js';
import Urianalisis from './views/Veterinario/Examenes/Urianalisis.js';
import Hematologia from './views/Veterinario/Examenes/Hematologia.js';
import ParasitologiaView from './views/Veterinario/Examenes/ParasitologiaView.js';
import UrianalisisView from './views/Veterinario/Examenes/UrianalisisView.js';
import HematologiaView from './views/Veterinario/Examenes/HematologiaView.js';

function App() {
  const [autentificacion, setAutentificacion] = useState(false);
  const [rol, setRol] = useState("");

  useEffect(() => {
    const autentificacionGuardada = localStorage.getItem("autentificacion");
    const rolGuardado = localStorage.getItem("rol");
    if (autentificacionGuardada) {
        setAutentificacion(autentificacionGuardada);
        setRol(rolGuardado);
    }
  }, []);
  
  if(autentificacion){
    if(rol == "USER_ROLE"){
      return (
        <div className="App">
          <Routes>
            {/* Usuario */}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="pet-exam" element={<PetExam />} />
            <Route path="pet-specific" element={<PetSpecific />} />
            <Route path="add-exam" element={<AddExam />} />
            <Route path="add-pet" element={<AddPet />} />
            {/* Veterinario */}
            <Route path="home-vet" element={<HomeVet />} />
            <Route path="register-vet" element={<RegisterVet />} />
            <Route path="exam-pet" element={<ExamPet />} />
            <Route path="exams" element={<Exams />} />
            <Route path="report" element={<Report />} />
            <Route path="parasitologia" element={<Parasitologia />} />
            <Route path="urianalisis" element={<Urianalisis />} />
            <Route path="hematologia" element={<Hematologia />} />
            <Route path="parasitologia-view" element={<ParasitologiaView />} />
            <Route path="urianalisis-view" element={<UrianalisisView />} />
            <Route path="hematologia-view" element={<HematologiaView />} />
          </Routes>
        </div>
      );
    }else if(rol == "VETERINARIO_ROLE"){
      return (
        <div className="App">
          <Routes>
            {/* Usuario */}
            <Route index element={<HomeVet />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="pet-exam" element={<PetExam />} />
            <Route path="pet-specific" element={<PetSpecific />} />
            <Route path="add-exam" element={<AddExam />} />
            <Route path="add-pet" element={<AddPet />} />
            {/* Veterinario */}
            <Route path="home-vet" element={<HomeVet />} />
            <Route path="register-vet" element={<RegisterVet />} />
            <Route path="exam-pet" element={<ExamPet />} />
            <Route path="exams" element={<Exams />} />
            <Route path="report" element={<Report />} />
            <Route path="parasitologia" element={<Parasitologia />} />
            <Route path="urianalisis" element={<Urianalisis />} />
            <Route path="hematologia" element={<Hematologia />} />
            <Route path="parasitologia-view" element={<ParasitologiaView />} />
            <Route path="urianalisis-view" element={<UrianalisisView />} />
            <Route path="hematologia-view" element={<HematologiaView />} />
          </Routes>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <Routes>
        {/* Usuario */}
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="pet-exam" element={<PetExam />} />
        <Route path="pet-specific" element={<PetSpecific />} />
        <Route path="add-exam" element={<AddExam />} />
        <Route path="add-pet" element={<AddPet />} />
        {/* Veterinario */}
        <Route path="home-vet" element={<HomeVet />} />
        <Route path="register-vet" element={<RegisterVet />} />
        <Route path="exam-pet" element={<ExamPet />} />
        <Route path="exams" element={<Exams />} />
        <Route path="report" element={<Report />} />
        <Route path="parasitologia" element={<Parasitologia />} />
        <Route path="urianalisis" element={<Urianalisis />} />
        <Route path="hematologia" element={<Hematologia />} />
        <Route path="parasitologia-view" element={<ParasitologiaView />} />
        <Route path="urianalisis-view" element={<UrianalisisView />} />
        <Route path="hematologia-view" element={<HematologiaView />} />
      </Routes>
    </div>
  );
}

export default App;
