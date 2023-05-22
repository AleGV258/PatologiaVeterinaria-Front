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
    const Token = useState(localStorage.getItem("token"));
    const [examenesPendientes, setExamenesPendientes] = useState([]);
    const navigate = useNavigate();

    document.body.style.overflowY = "visible";

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                token: Token[0]
            },
            redirect: 'follow'
        };

        fetch("https://api-arquitecturas-ti.vercel.app/api/examen/listado/Pendiente", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            // console.log("Resultado: " + JSON.stringify(result.examenes))
            var pendientes = result.examenes.map(examen => {
                if(examen.tipoExamen == "Parasitologia"){
                    return (
                        <div className="mascota-card" key={examen._id}>
                            <label className="veterinario-titulo-examen">{examen.tipoExamen}</label>
                            <label className='veterinario-titulo-dato'>Estado: Pendiente<br></br><br></br>Más Datos... </label>
                            <label className='veterinario-titulo-dato'>Propietario: ...</label>
                            <button onClick={() => goParasitologia(examen._id)} className="clinico-button-descarga">Responder</button>
                        </div>
                    );
                }else if(examen.tipoExamen == "Urianalisis"){
                    return (
                        <div className="mascota-card" key={examen._id}>
                            <label className="veterinario-titulo-examen">{examen.tipoExamen}</label>
                            <label className='veterinario-titulo-dato'>Estado: Pendiente<br></br><br></br>Más Datos... </label>
                            <label className='veterinario-titulo-dato'>Propietario: ...</label>
                            <button onClick={() => goUrianalisis(examen._id)} className="clinico-button-descarga">Responder</button>
                        </div>
                    );
                }else if(examen.tipoExamen == "Hematologia"){
                    return (
                        <div className="mascota-card" key={examen._id}>
                            <label className="veterinario-titulo-examen">{examen.tipoExamen}</label>
                            <label className='veterinario-titulo-dato'>Estado: Pendiente<br></br><br></br>Más Datos... </label>
                            <label className='veterinario-titulo-dato'>Propietario: ...</label>
                            <button onClick={() => goHematologia(examen._id)} className="clinico-button-descarga">Responder</button>
                        </div>
                    );
                }
            })
            setExamenesPendientes(pendientes);
        })
        .catch(error => console.log('error', error));
    }, []);

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

    const goParasitologia = (examenSeleccionado) => {
        navigate("/parasitologia", { state: {examenSeleccionado}});
    }

    const goHematologia = (examenSeleccionado) => {
        navigate("/hematologia", { state: {examenSeleccionado}});
    }

    const goUrianalisis = (examenSeleccionado) => {
        navigate("/urianalisis", { state: {examenSeleccionado}});
    }

    return (
        <div className="grid-home">
            <div className="grid-home-1" onClick={returnHome}>
                <label className="titulo-usuario">Revisa los Exámenes Pendientes</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExamPending} className="moreOption-button-selected" title="Exámenes Pendientes"><img src='../imgs/Examen-Pendiente.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExamComplete} className="moreOption-button" title="Exámenes Completados"><img src='../imgs/Examen-Completado.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeReport} className="moreOption-button" title="Informes"><img src='../imgs/Informe.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Exámenes Pendientes:</label>

                {examenesPendientes}

                <br></br>
                
            </div>
        </div>
    );
}
 
export default ExamPending;