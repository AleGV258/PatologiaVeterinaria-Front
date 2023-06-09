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

function Exams() {
    const API = process.env.REACT_APP_API_URL;
    const Token = useState(localStorage.getItem("token"));
    const [examenesPendientes, setExamenesPendientes] = useState([]);
    const [examenesCompletados, setExamenesCompletados] = useState([]);
    const [examenSeleccionado, setExamenSeleccionado] = useState("pendientes");
    const navigate = useNavigate();
    var fechaCompleta = "";
    var fecha = new Date();
    var hora = new Date();

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
    
        var url = API + "/api/examen/listado/Pendiente";
        fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            // console.log("Resultado: " + JSON.stringify(result))
            if(result.total == 0){
                var inexistente = [""].map(vacio => {
                    return (
                        <label key="0" className="titulo-no-encontrado">¡Hurra :D! No existen exámenes pendientes por el momento</label>
                    )
                })
                setExamenesPendientes(inexistente);
            }else{
                var pendientes = result.examenes.map(resultado => {
                    if(resultado.examen.tipoExamen == "Parasitologia"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Parasito.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Estado: </b>Pendiente<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Mascota: </b>{resultado.mascota.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}</label>
                                <button onClick={() => goParasitologia(resultado.examen._id)} className="clinico-button-descarga">Responder</button>
                            </div>
                        );
                    }else if(resultado.examen.tipoExamen == "Urianalisis"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Orina.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Estado: </b>Pendiente<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Mascota: </b>{resultado.mascota.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}</label>
                                <button onClick={() => goUrianalisis(resultado.examen._id)} className="clinico-button-descarga">Responder</button>
                            </div>
                        );
                    }else if(resultado.examen.tipoExamen == "Hematologia"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Sangre.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Estado: </b>Pendiente<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Mascota: </b>{resultado.mascota.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}</label>
                                <button onClick={() => goHematologia(resultado.examen._id)} className="clinico-button-descarga">Responder</button>
                            </div>
                        );
                    }
                })
                setExamenesPendientes(pendientes);
            }
        })
        .catch(error => console.log('error', error));
    
        url = API + "/api/examen/listado/Completado";
        fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            // console.log("Resultado: " + JSON.stringify(result.examenes))
            if(result.total == 0){
                var inexistente = [""].map(vacio => {
                    return (
                        <label key="0" className="titulo-no-encontrado">No existen exámenes completados por el momento</label>
                    )
                })
                setExamenesCompletados(inexistente);
            }else{
                var completados = result.examenes.map(resultado => {
                    if(resultado.examen.tipoExamen == "Parasitologia"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Parasito.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Estado: </b>Completado<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Mascota: </b>{resultado.mascota.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}</label>
                                <button onClick={() => goParasitologiaView(resultado.examen._id, false)} className="clinico-button-descarga">Ver</button>
                            </div>
                        );
                    }else if(resultado.examen.tipoExamen == "Urianalisis"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Orina.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Estado: </b>Completado<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Mascota: </b>{resultado.mascota.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}</label>
                                <button onClick={() => goUrianalisisView(resultado.examen._id, false)} className="clinico-button-descarga">Ver</button>
                            </div>
                        );
                    }else if(resultado.examen.tipoExamen == "Hematologia"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Sangre.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Estado: </b>Completado<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Mascota: </b>{resultado.mascota.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}</label>
                                <button onClick={() => goHematologiaView(resultado.examen._id, false)} className="clinico-button-descarga">Ver</button>
                            </div>
                        );
                    }
                })
                setExamenesCompletados(completados.reverse());
            }
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

    const seeExams = () => {
        navigate("/exams");
    }

    const seeRegisterVet = () => {
        navigate("/register-vet");
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

    const goParasitologiaView = (examenSeleccionado, generarPDF) => {
        navigate("/parasitologia-view", { state: {examenSeleccionado, generarPDF}});
    }

    const goHematologiaView = (examenSeleccionado, generarPDF) => {
        navigate("/hematologia-view", { state: {examenSeleccionado, generarPDF}});
    }

    const goUrianalisisView = (examenSeleccionado, generarPDF) => {
        navigate("/urianalisis-view", { state: {examenSeleccionado, generarPDF}});
    }

    const handleExamenSeleccionadoChange = (event) => {
        setExamenSeleccionado(event.target.value);
    };

    return (
        <div className="grid-home">
            <div className="grid-home-1" onClick={returnHome}>
                <label className="titulo-usuario">Revisa los Exámenes</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExams} className="moreOption-button-selected" title="Exámenes Pendientes/Completados"><img src='../imgs/Examen.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeReport} className="moreOption-button" title="Informes"><img src='../imgs/Informe.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeRegisterVet} className="moreOption-button" title="Agregar Nuevos Veterinarios"><img src='../imgs/Agregar-Veterinario.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">

                <div className="option-select-section">
                    {examenSeleccionado == "pendientes" ? <label className="option-select-title">Exámenes Pendientes:</label> : <label className="option-select-title">Exámenes Completados:</label>}

                    <select name="examen_seleccionado" id="examen_seleccionado" className="option-select-exam" value={examenSeleccionado} onChange={handleExamenSeleccionadoChange} required>
                        <option value="pendientes">Pendientes</option>
                        <option value="completados">Completados</option>
                    </select>
                </div>

                {examenSeleccionado == "pendientes" ? [examenesPendientes.length == 0 ? <label className="titulo-no-encontrado">Cargando datos de los exámenes pendientes...</label> : examenesPendientes] : [examenesCompletados.length == 0 ? <label className="titulo-no-encontrado">Cargando datos de los exámenes completados...</label> : examenesCompletados]}

                <br></br>
                
            </div>
        </div>
    );
}
 
export default Exams;