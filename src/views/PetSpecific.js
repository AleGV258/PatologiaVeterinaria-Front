import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

function PetSpecific() {
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
                <img src='../imgs/Regresar.png' className="regresar" onClick={returnHome}></img>
                <label className="titulo-usuario">Examen Clínico</label>
            </div>
            <div className="grid-home-2">
                <div>
                <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewPet} className="moreOption-button" title="Agregar Nueva Mascota"><img src='../imgs/Agregar-Mascota.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewExam} className="moreOption-button" title="Solicitar Nuevo Examen Clínico"><img src='../imgs/Solicitar-Examen.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Examen X</label>

                <div>
                    <img src='../imgs/Perro-Prueba.png' className="especifico-imagen"></img>
                    <label className="especifico-titulo">Mascota X</label>
                </div>
                <div className="separador"></div>
                <div>
                    <label className="especifico-datos">Especie: ...</label>
                    <label className="especifico-datos">Raza: ...</label>
                    <label className="especifico-datos">Edad: ...</label>
                    <label className="especifico-datos">Color: ...</label>
                </div>




                <div className="mascota-card">
                    <label className="clinico-titulo-examen">Examen</label>
                    <label className='clinico-titulo-dato'>Estado: Completado<br></br><br></br>Más Datos... </label>
                    <button onClick={""} className="clinico-button-descarga">Ver</button>
                </div>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default PetSpecific;