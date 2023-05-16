import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

function Home() {
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));
    const navigate = useNavigate();

    document.body.style.overflowY = "visible";

    const logoutUser = () => {
        localStorage.clear();
        navigate("/login");
    }

    const returnHome = () =>{
        navigate("/home");
    }

    const petExamDetails = () => {
        navigate("/pet-exam");
    }

    const petSpecificDetails = () => {
        navigate("/pet-specific");
    }

    const addNewExam = () => {
        navigate("/add-exam");
    }

    const addNewPet = () => {
        navigate("/add-pet");
    }

    return (
        <div className="grid-home">
            <div className="grid-home-1">
                <label className="titulo-usuario">¡Bienvenido {usuario}!</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button-selected" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewPet} className="moreOption-button" title="Agregar Nueva Mascota"><img src='../imgs/Agregar-Mascota.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewExam} className="moreOption-button" title="Solicitar Nuevo Examen Clínico"><img src='../imgs/Solicitar-Examen.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Mis Mascotas:</label>

                <div className="mascota-card">
                    <img src='../imgs/Mascota.png' className='mascota-image'></img>
                    <label className='mascota-titulo-examen'>Mascota 1</label>
                    <label className='mascota-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <button onClick={petSpecificDetails} className="mascota-button-info">+ Info</button>
                    <button onClick={petExamDetails} className="mascota-button-examen">Examenes</button>
                </div>

                <div className="mascota-card">
                    <img src='../imgs/Mascota.png' className='mascota-image'></img>
                    <label className='mascota-titulo-examen'>Mascota 2</label>
                    <label className='mascota-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <button onClick={petSpecificDetails} className="mascota-button-info">+ Info</button>
                    <button onClick={petExamDetails} className="mascota-button-examen">Examenes</button>
                </div>
                
                <div className="mascota-card">
                    <img src='../imgs/Mascota.png' className='mascota-image'></img>
                    <label className='mascota-titulo-examen'>Mascota 3</label>
                    <label className='mascota-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <button onClick={petSpecificDetails} className="mascota-button-info">+ Info</button>
                    <button onClick={petExamDetails} className="mascota-button-examen">Examenes</button>
                </div>
                
                <div className="mascota-card">
                    <img src='../imgs/Mascota.png' className='mascota-image'></img>
                    <label className='mascota-titulo-examen'>Mascota 4</label>
                    <label className='mascota-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <button onClick={petSpecificDetails} className="mascota-button-info">+ Info</button>
                    <button onClick={petExamDetails} className="mascota-button-examen">Examenes</button>
                </div>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default Home;