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

    return (
        <div className="grid-home">
            <div className="grid-home-1">
                <label className="titulo-usuario">¡Bienvenido {usuario}!</label>
            </div>
            <div className="grid-home-2"></div>
            <div className="grid-home-3">
                <label className="titulo-examen">Exámenes Clínicos</label>
                <Link to="#" className="examen-card">Examen 1
                    <Link to="#" className="examen-button">Ir</Link>
                </Link>
                <Link to="#" className="examen-card">Examen 2
                    <Link to="#" className="examen-button">Ir</Link>
                </Link>
                <Link to="#" className="examen-card">Examen 3
                    <Link to="#" className="examen-button">Ir</Link>
                </Link>
            </div>
        </div>
    );
}
 
export default Home;