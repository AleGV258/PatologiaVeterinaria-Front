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

function Home() {
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));
    const navigate = useNavigate();

    const logoutUser = () =>{
        localStorage.clear();
        navigate("/login");
    }

    

    return (
        <div className="grid-home">
            <div className="grid-home-1">
                <label className="titulo-usuario">¡Bienvenido {usuario}!</label>
            </div>
            <div className="grid-home-2">
                <button onClick={logoutUser} className="logout-button">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Mis Mascotas:</label>

                <Link to="#" className="examen-card">
                    <img src='../imgs/Mascota.png' className='examen-image'></img>
                    <label className='examen-titulo-examen'>Examen 1</label>
                    <label className='examen-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <Link to="#" className="examen-button-info">+ Info</Link>
                    <Link to="#" className="examen-button-examen">Examenes</Link>
                </Link>

                <Link to="#" className="examen-card">
                    <img src='../imgs/Mascota.png' className='examen-image'></img>
                    <label className='examen-titulo-examen'>Examen 2</label>
                    <label className='examen-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <Link to="#" className="examen-button-info">+ Info</Link>
                    <Link to="#" className="examen-button-examen">Examenes</Link>
                </Link>

                <Link to="#" className="examen-card">
                    <img src='../imgs/Mascota.png' className='examen-image'></img>
                    <label className='examen-titulo-examen'>Examen 3</label>
                    <label className='examen-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <Link to="#" className="examen-button-info">+ Info</Link>
                    <Link to="#" className="examen-button-examen">Examenes</Link>
                </Link>

                <Link to="#" className="examen-card">
                    <img src='../imgs/Mascota.png' className='examen-image'></img>
                    <label className='examen-titulo-examen'>Examen 3</label>
                    <label className='examen-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <Link to="#" className="examen-button-info">+ Info</Link>
                    <Link to="#" className="examen-button-examen">Examenes</Link>
                </Link>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default Home;