import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

function ExamPet() {
    const Token = useState(localStorage.getItem("token"));
    const [examenesPendientes, setExamenesPendientes] = useState([]);
    const [examenesCompletados, setExamenesCompletados] = useState([]);
    const [nombreMascota, setnombreMascota] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const mascotaSeleccionada = location.state?.mascotaSeleccionada || [];
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
    
        fetch("https://api-arquitecturas-ti.vercel.app/api/examen/listado/Pendiente", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            console.log("Resultado: " + JSON.stringify(result))
            if(result.total == 0){
                var inexistente = [""].map(vacio => {
                    return (
                        <label className="titulo-no-encontrado">Cargando exámenes pendientes de la mascota...</label>
                    )
                })
                setExamenesPendientes(inexistente);
            }else{
                const filtradoMascotas = result.examenes.filter(examen => {
                    return examen.mascota._id == mascotaSeleccionada;
                })

                var pendientes = filtradoMascotas.map(resultado => {
                    setnombreMascota(resultado.mascota.nombre);
                    if(resultado.examen.tipoExamen == "Parasitologia"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Parasito.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br></label>
                                <button onClick={""} className="clinico-button-eliminar">Eliminar</button>
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
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br></label>
                                <button onClick={""} className="clinico-button-eliminar">Eliminar</button>
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
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br></label>
                                <button onClick={""} className="clinico-button-eliminar">Eliminar</button>
                                <button onClick={() => goHematologia(resultado.examen._id)} className="clinico-button-descarga">Responder</button>
                            </div>
                        );
                    }
                })
                setExamenesPendientes(pendientes);
            }
        })
        .catch(error => console.log('error', error));
    
        fetch("https://api-arquitecturas-ti.vercel.app/api/examen/listado/Completado", requestOptions)
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
                        <label className="titulo-no-encontrado">Cargando exámenes completados de la mascota...</label>
                    )
                })
                setExamenesCompletados(inexistente);
            }else{
                const filtradoMascotas = result.examenes.filter(examen => {
                    return examen.mascota._id == mascotaSeleccionada;
                })

                var completados = filtradoMascotas.map(resultado => {
                    setnombreMascota(resultado.mascota.nombre);
                    if(resultado.examen.tipoExamen == "Parasitologia"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        hora = new Date(fechaCompleta).toLocaleTimeString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Parasito.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br></label>
                                <button onClick={""} className="clinico-button-eliminar">Eliminar</button>
                                <button onClick={() => goParasitologiaView(resultado.examen._id)} className="clinico-button-descarga">Ver</button>
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
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br></label>
                                <button onClick={""} className="clinico-button-eliminar">Eliminar</button>
                                <button onClick={() => goUrianalisisView(resultado.examen._id)} className="clinico-button-descarga">Ver</button>
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
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br></label>
                                <button onClick={""} className="clinico-button-eliminar">Eliminar</button>
                                <button onClick={() => goHematologiaView(resultado.examen._id)} className="clinico-button-descarga">Ver</button>
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

    const goParasitologiaView = (examenSeleccionado) => {
        navigate("/parasitologia-view", { state: {examenSeleccionado}});
    }

    const goHematologiaView = (examenSeleccionado) => {
        navigate("/hematologia-view", { state: {examenSeleccionado}});
    }

    const goUrianalisisView = (examenSeleccionado) => {
        navigate("/urianalisis-view", { state: {examenSeleccionado}});
    }

    return (
        <div className="grid-home">
            <div className="grid-home-1" onClick={returnHome}>
                <img src='../imgs/Regresar.png' className="regresar" onClick={returnHome}></img>
                <label className="titulo-usuario">Examen de Parasitología</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExams} className="moreOption-button" title="Exámenes Pendientes/Completados"><img src='../imgs/Examen.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeReport} className="moreOption-button" title="Informes"><img src='../imgs/Informe.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeRegisterVet} className="moreOption-button" title="Agregar Nuevos Veterinarios"><img src='../imgs/Agregar-Veterinario.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">

                <label className="titulo-examen">Exámenes Pendientes de {nombreMascota}:</label>

                {examenesPendientes.length == 0 ? <label className="titulo-no-encontrado">No existen examenes pendientes de {nombreMascota}...</label> : examenesPendientes}

                <label className="titulo-examen">Exámenes Completados de {nombreMascota}:</label>

                {examenesCompletados.length == 0 ? <label className="titulo-no-encontrado">No existen examenes completados de {nombreMascota}...</label> : examenesCompletados}

                <br></br>
                
            </div>
        </div>
    );
}
 
export default ExamPet;