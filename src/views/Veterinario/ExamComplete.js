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

function ExamPending() {
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));
    const navigate = useNavigate();

    document.body.style.overflowY = "visible";

    const logoutUser = () =>{
        localStorage.clear();
        navigate("/login");
    }

    const returnHome = () =>{
        navigate("/home-vet");
    }

    const seeExamPending = () => {
        navigate("/pend-exam");
    }

    const seeExamComplete = () => {
        navigate("/comp-exam");
    }

    const seeReport = () => {
        navigate("/report");
    }

    return (
        <div className="grid-home">
            <div className="grid-home-1" onClick={returnHome}>
                <label className="titulo-usuario">Revisa los Exámenes Completados</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExamPending} className="moreOption-button" title="Exámenes Pendientes"><img src='../imgs/Examen-Pendiente.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExamComplete} className="moreOption-button-selected" title="Exámenes Completados"><img src='../imgs/Examen-Completado.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeReport} className="moreOption-button" title="Informes"><img src='../imgs/Informe.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Exámenes Completos:</label>

                <div className="mascota-card">
                    <label className="veterinario-titulo-examen">Examen</label>
                    <label className='veterinario-titulo-dato'>Estado: Completado<br></br><br></br>Más Datos... </label>
                    <label className='veterinario-titulo-dato'>Propietario: ...</label>
                    <button onClick={""} className="clinico-button-descarga">Ver</button>
                </div>

                <div className="mascota-card">
                    <label className="veterinario-titulo-examen">Examen</label>
                    <label className='veterinario-titulo-dato'>Estado: Completado<br></br><br></br>Más Datos... </label>
                    <label className='veterinario-titulo-dato'>Propietario: ...</label>
                    <button onClick={""} className="clinico-button-descarga">Ver</button>
                </div>

                <div className="mascota-card">
                    <label className="veterinario-titulo-examen">Examen</label>
                    <label className='veterinario-titulo-dato'>Estado: Completado<br></br><br></br>Más Datos... </label>
                    <label className='veterinario-titulo-dato'>Propietario: ...</label>
                    <button onClick={""} className="clinico-button-descarga">Ver</button>
                </div>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default ExamPending;