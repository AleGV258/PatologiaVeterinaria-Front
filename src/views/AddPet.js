import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

function AddPet() {
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));

    const [nombreMascota, setNombreMascota] = useState("");
    const [especieMascota, setEspecieMascota] = useState("");
    const [sexoMascota, setSexoMascota] = useState("");
    const [mvzMascota, setMVZMascota] = useState("");
    const [razaMascota, setRazaMascota] = useState("");
    const [edadMascota, setEdadMascota] = useState("");
    const [castradoMascota, setCastradoMascota] = useState("");

    const navigate = useNavigate();

    document.body.style.overflowY = "visible";

    const logoutUser = () =>{
        localStorage.clear();
        navigate("/login");
    }

    const returnHome = () =>{
        navigate("/home");
    }

    const addNewExam = () => {
        navigate("/add-exam");
    }

    const addNewPet = () => {
        navigate("/add-pet");
    }

    const handleNombreMascotaChange = (event) => {
        setNombreMascota(event.target.value);
    };

    const handleEspecieMascotaChange = (event) => {
        setEspecieMascota(event.target.value);
    };

    const handleSexoMascotaChange = (event) => {
        setSexoMascota(event.target.value);
    };

    const handleMVZMascotaChange = (event) => {
        setMVZMascota(event.target.value);
    };

    const handleRazaMascotaChange = (event) => {
        setRazaMascota(event.target.value);
    };

    const handleEdadMascotaChange = (event) => {
        setEdadMascota(event.target.value);
    };

    const handleCastradoMascotaChange = (event) => {
        setCastradoMascota(event.target.value);
    };

    return (
        <div className="grid-home">
            <div className="grid-home-1" onClick={returnHome}>
                <label className="titulo-usuario">Agregar una Nueva Mascota</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewPet} className="moreOption-button-selected" title="Agregar Nueva Mascota"><img src='../imgs/Agregar-Mascota.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewExam} className="moreOption-button" title="Solicitar Nuevo Examen Clínico"><img src='../imgs/Solicitar-Examen.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Nueva Mascota:</label>

                <div className="option-big-card">

                    <form>
                        <div className="option-section">
                            <label className="option-text" for="nombre_mascota">Nombre:</label>
                            <input type="text" id="nombre_mascota" name="nombre_mascota" placeholder="Nombre de la Mascota" className="option-input" required value={nombreMascota} onChange={handleNombreMascotaChange} ></input>
                        </div>

                        <div className="option-section">
                            <label className="option-text" for="especie_mascota">Especie:</label>
                            <input type="text" id="especie_mascota" name="especie_mascota" placeholder="Especie" className="option-input" required value={especieMascota} onChange={handleEspecieMascotaChange} ></input>
                        </div>
                        
                        <div className="option-section">
                            <label className="option-text" for="sexo_mascota">Sexo:</label>
                            <input type="text" id="sexo_mascota" name="sexo_mascota" placeholder="Sexo" className="option-input" required value={sexoMascota} onChange={handleSexoMascotaChange} ></input>
                        </div>
                        
                        <div className="option-section">
                            <label className="option-text" for="mvz_mascota">MVZ:</label>
                            <input type="text" id="mvz_mascota" name="mvz_mascota" placeholder="Médico Veterinario Zootecnista" className="option-input" required value={mvzMascota} onChange={handleMVZMascotaChange} ></input>
                        </div>
                        
                        <div className="option-section">
                            <label className="option-text" for="raza_mascota">Raza:</label>
                            <input type="text" id="raza_mascota" name="raza_mascota" placeholder="Raza" className="option-input" required value={razaMascota} onChange={handleRazaMascotaChange} ></input>
                        </div>
                        
                        <div className="option-section">
                            <label className="option-text" for="edad_mascota">Edad:</label>
                            <input type="text" id="edad_mascota" name="edad_mascota" placeholder="Edad" className="option-input" required value={edadMascota} onChange={handleEdadMascotaChange} ></input>
                        </div>
                        
                        <div className="option-section">
                            <label className="option-text" for="castrado_mascota">Castrado:</label>
                            <input type="text" id="castrado_mascota" name="castrado_mascota" placeholder="Castrado" className="option-input" required value={castradoMascota} onChange={handleCastradoMascotaChange} ></input>
                        </div>

                        <div className="option-section">
                            <button className="option-button-cancel">Cancelar</button>
                            <input type="submit" value="Guardar" className="option-button-save"></input>
                        </div>

                    </form>

                </div>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default AddPet;