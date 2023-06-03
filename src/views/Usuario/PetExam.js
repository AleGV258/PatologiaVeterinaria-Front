import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

function PetExam() {
    const Token = useState(localStorage.getItem("token"));
    const [mascotaExamenes, setMascotaExamenes] = useState([]);
    const [mascotaNombre, setMascotaNombre] = useState([]);
    var fechaCompleta = "";
    var fecha = new Date();
    var hora = new Date();

    const navigate = useNavigate();
    const location = useLocation();
    const mascotaSeleccionada = location.state?.mascotaSeleccionada || [];

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

        const mascotaUser = "https://api-arquitecturas-ti.vercel.app/api/mascota/id/" + mascotaSeleccionada;
        fetch(mascotaUser, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            // console.log("Resultado: " + JSON.stringify(result.mascota))
            setMascotaNombre(result.mascota.nombre);
        })
        .catch(error => console.log('error', error));

        const mascotaUrl = "https://api-arquitecturas-ti.vercel.app/api/examen/" + mascotaSeleccionada;
        fetch(mascotaUrl, requestOptions)
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
                        <label key="0" className="titulo-no-encontrado">No existen exámenes clínicos por el momento</label>
                    )
                })
                setMascotaExamenes(inexistente);
            }else{
                var examenesUsuario = result.examen.map(resultado => {
                    if(resultado.tipoExamen == "Parasitologia" && resultado.estado == "Completado"){
                        fechaCompleta = resultado.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado._id}>
                                <img src='../imgs/Parasito.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>ID Seguimiento: <br></br></b>{resultado._id}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <button onClick={() => goParasitologiaUser(resultado._id)} className="clinico-button-descarga">Ver Resultado</button>
                            </div>
                        );
                    }else if(resultado.tipoExamen == "Urianalisis" && resultado.estado == "Completado"){
                        fechaCompleta = resultado.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado._id}>
                                <img src='../imgs/Orina.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>ID Seguimiento: <br></br></b>{resultado._id}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <button onClick={() => goUrianalisisUser(resultado._id)} className="clinico-button-descarga">Ver Resultado</button>
                            </div>
                        );
                    }else if(resultado.tipoExamen == "Hematologia" && resultado.estado == "Completado"){
                        fechaCompleta = resultado.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado._id}>
                                <img src='../imgs/Sangre.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>ID Seguimiento: <br></br></b>{resultado._id}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <button onClick={() => goHematologiaUser(resultado._id)} className="clinico-button-descarga">Ver Resultado</button>
                            </div>
                        );
                    }else if(resultado.tipoExamen == "Parasitologia" && resultado.estado == "Pendiente"){
                        fechaCompleta = resultado.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado._id}>
                                <img src='../imgs/Parasito.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>ID Seguimiento: <br></br></b>{resultado._id}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <button className="clinico-button-proceso">En Proceso...</button>
                            </div>
                        );
                    }else if(resultado.tipoExamen == "Urianalisis" && resultado.estado == "Pendiente"){
                        fechaCompleta = resultado.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado._id}>
                                <img src='../imgs/Orina.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>ID Seguimiento: <br></br></b>{resultado._id}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <button className="clinico-button-proceso">En Proceso...</button>
                            </div>
                        );
                    }else if(resultado.tipoExamen == "Hematologia" && resultado.estado == "Pendiente"){
                        fechaCompleta = resultado.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado._id}>
                                <img src='../imgs/Sangre.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>ID Seguimiento: <br></br></b>{resultado._id}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>Hora Solicitud: </b>{hora}</label>
                                <button className="clinico-button-proceso">En Proceso...</button>
                            </div>
                        );
                    }
                })
                setMascotaExamenes(examenesUsuario);
            }
        })
        .catch(error => console.log('error', error));
    }, []);

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

    const goParasitologiaUser = (examenSeleccionado) => {
        navigate("/parasitologia-user", { state: {examenSeleccionado}});
    }

    const goHematologiaUser = (examenSeleccionado) => {
        navigate("/hematologia-user", { state: {examenSeleccionado}});
    }

    const goUrianalisisUser = (examenSeleccionado) => {
        navigate("/urianalisis-user", { state: {examenSeleccionado}});
    }

    return (
        <div className="grid-home">
            <div className="grid-home-1" onClick={returnHome}>
                <img src='../imgs/Regresar.png' className="regresar" onClick={returnHome}></img>
                <label className="titulo-usuario">Examen de la Mascota</label>
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
                <label className="titulo-examen">Exámenes Clínicos de {mascotaNombre}:</label>

                {mascotaExamenes.length == 0 ? <label className="titulo-no-encontrado">Cargando datos de los exámenes...</label> : mascotaExamenes}

                <br></br>
                
            </div>
        </div>
    );
}
 
export default PetExam;