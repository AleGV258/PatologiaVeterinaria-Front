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
    const API = process.env.REACT_APP_API_URL;
    const Token = useState(localStorage.getItem("token"));
    const [cargando, setCargando] = useState(false);
    const [examenesPendientes, setExamenesPendientes] = useState([]);
    const [examenesCompletados, setExamenesCompletados] = useState([]);
    const [nombreMascota, setNombreMascota] = useState("");
    const [IDMascota, setIDMascota] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const mascotaSeleccionada = location.state?.mascotaSeleccionada || [];
    var fechaCompleta = "";
    var fecha = new Date();

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
                        <label key="0" className="titulo-no-encontrado">Cargando exámenes pendientes de la mascota...</label>
                    )
                })
                setExamenesPendientes(inexistente);
            }else{
                const filtradoMascotas = result.examenes.filter(examen => {
                    return examen.mascota._id == mascotaSeleccionada;
                })
                var pendientes = filtradoMascotas.map(resultado => {
                    setNombreMascota(resultado.mascota.nombre);
                    setIDMascota(resultado.mascota._id);
                    if(resultado.examen.tipoExamen == "Parasitologia"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Parasito.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>ID: </b>{resultado.examen._id}</label>
                                <button onClick={() => borrarExamen(resultado.examen._id)} className="clinico-button-eliminar">Eliminar</button>
                                <button onClick={() => goParasitologia(resultado.examen._id)} className="clinico-button-descarga">Responder</button>
                            </div>
                        );
                    }else if(resultado.examen.tipoExamen == "Urianalisis"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Orina.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>ID: </b>{resultado.examen._id}</label>
                                <button onClick={() => borrarExamen(resultado.examen._id)} className="clinico-button-eliminar">Eliminar</button>
                                <button onClick={() => goUrianalisis(resultado.examen._id)} className="clinico-button-descarga">Responder</button>
                            </div>
                        );
                    }else if(resultado.examen.tipoExamen == "Hematologia"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Sangre.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>ID: </b>{resultado.examen._id}</label>
                                <button onClick={() => borrarExamen(resultado.examen._id)} className="clinico-button-eliminar">Eliminar</button>
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
                        <label key="0" className="titulo-no-encontrado">Cargando exámenes completados de la mascota...</label>
                    )
                })
                setExamenesCompletados(inexistente);
            }else{
                const filtradoMascotas = result.examenes.filter(examen => {
                    return examen.mascota._id == mascotaSeleccionada;
                })

                var completados = filtradoMascotas.map(resultado => {
                    setNombreMascota(resultado.mascota.nombre);
                    setIDMascota(resultado.mascota._id);
                    if(resultado.examen.tipoExamen == "Parasitologia"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Parasito.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>ID: </b>{resultado.examen._id}</label>
                                <button onClick={() => borrarExamen(resultado.examen._id)} className="clinico-button-eliminar">Eliminar</button>
                                <button onClick={() => goParasitologiaView(resultado.examen._id)} className="clinico-button-descarga">Ver</button>
                            </div>
                        );
                    }else if(resultado.examen.tipoExamen == "Urianalisis"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Orina.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>ID: </b>{resultado.examen._id}</label>
                                <button onClick={() => borrarExamen(resultado.examen._id)} className="clinico-button-eliminar">Eliminar</button>
                                <button onClick={() => goUrianalisisView(resultado.examen._id)} className="clinico-button-descarga">Ver</button>
                            </div>
                        );
                    }else if(resultado.examen.tipoExamen == "Hematologia"){
                        fechaCompleta = resultado.examen.fechaSolicitud;
                        fecha = new Date(fechaCompleta).toLocaleDateString();
                        return (
                            <div className="mascota-card" key={resultado.examen._id}>
                                <img src='../imgs/Sangre.png' className="mascota-card-imagen"></img>
                                <label className="veterinario-titulo-examen">{resultado.examen.tipoExamen}</label>
                                <label className='veterinario-titulo-dato'><b>Propietario: </b>{resultado.usuario.nombre}<br></br><b>Especie: </b>{resultado.mascota.especie}<br></br><b>Fecha Solicitud: </b>{fecha}<br></br><b>ID: </b>{resultado.examen._id}</label>
                                <button onClick={() => borrarExamen(resultado.examen._id)} className="clinico-button-eliminar">Eliminar</button>
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

    const borrarExamen = (examenSeleccionado) => {
        var confirmacion = window.confirm("Está segura/o de que desea eliminar el examen de esta mascota, esta acción será irreversible.");
        setCargando(true);

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                token: Token[0]
            },
            redirect: 'follow'
        };
        
        if(confirmacion){
            const urlExamen = API + "/api/examen/" + examenSeleccionado;
            fetch(urlExamen, requestOptions)
            .then(response => {
                if (response.ok) {
                    setCargando(false);
                    alert("El examen ha sido eliminado correctamente.");
                    window.location.reload();
                    return response.json();
                } else {
                    setCargando(false);
                    alert("Ha habido un error eliminando el examen seleccionado. ¡Intenta Nuevamente!");
                    throw new Error('La solicitud Fetch no se realizó correctamente');
                }
            })
        }
    }

    const borrarMascota = (mascotaSeleccionado) => {
        var confirmacion = window.confirm("Está segura/o de que desea eliminar la mascota actual, esto eliminará la mascota y todos sus exámenes relacionados, esta acción será irreversible.");
        setCargando(true);

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                token: Token[0]
            },
            redirect: 'follow'
        };
        
        if(confirmacion){
            const urlMascota = API + "/api/mascota/" + mascotaSeleccionado;
            fetch(urlMascota, requestOptions)
            .then(response => {
                if (response.ok) {
                    setCargando(false);
                    alert("La mascota ha sido eliminada correctamente.");
                    returnHome();
                    return response.json();
                } else {
                    setCargando(false);
                    alert("Ha habido un error eliminando la mascota seleccionada. ¡Intenta Nuevamente!");
                    throw new Error('La solicitud Fetch no se realizó correctamente');
                }
            })
        }
    }

    const logoutUser = () => {
        localStorage.clear();
        navigate("/login");
    }

    const returnHome = () => {
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
            <div className="carga" style={ cargando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Eliminando...</label>
            </div>
            <div className="grid-home-1" onClick={returnHome}>
                <img src='../imgs/Regresar.png' className="regresar" onClick={returnHome}></img>
                <label className="titulo-usuario">Exámenes de {nombreMascota}</label>
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

                <button onClick={() => borrarMascota(IDMascota)} className="veterinario-button-eliminar">Eliminar a {nombreMascota}</button>

                <br></br><br></br><br></br>
                
            </div>
        </div>
    );
}
 
export default ExamPet;