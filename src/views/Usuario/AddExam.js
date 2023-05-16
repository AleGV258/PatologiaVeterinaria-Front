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

function AddExam() {
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));
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

    return (
        <div className="grid-home">
            <div className="grid-home-1" onClick={returnHome}>
                <label className="titulo-usuario">Solicita un Nuevo Examen Clínico</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewPet} className="moreOption-button" title="Agregar Nueva Mascota"><img src='../imgs/Agregar-Mascota.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewExam} className="moreOption-button-selected" title="Solicitar Nuevo Examen Clínico"><img src='../imgs/Solicitar-Examen.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Solicitar Examen:</label>

                {/* <div className="mascota-card">
                    <label className="clinico-titulo-examen">Examen</label>
                    <label className='clinico-titulo-dato'>Estado: Pendiente<br></br><br></br>Más Datos... </label>
                    <button onClick={""} className="clinico-button-proceso">En Proceso</button>
                </div>

                <div className="mascota-card">
                    <label className="clinico-titulo-examen">Examen</label>
                    <label className='clinico-titulo-dato'>Estado: Completado<br></br><br></br>Más Datos... </label>
                    <button onClick={""} className="clinico-button-descarga">Descargar</button>
                </div> */}

                <br></br>
                
            </div>
        </div>
    );
}
 
export default AddExam;