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

function Report() {
    const Token = useState(localStorage.getItem("token"));
    const [cargando, setCargando] = useState(false);
    const [realizado, setRealizado] = useState(true);
    var [reporte, setReporte] = useState([]);
    const navigate = useNavigate();
    var fechaCompleta = "";
    var fecha = new Date();
    var hora = new Date();

    document.body.style.overflowY = "visible";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        token: Token[0]
                    },
                    redirect: 'follow'
                };
    
                const reporteResponse = await fetch("https://api-arquitecturas-ti.vercel.app/api/reporte/", requestOptions);
                if (!reporteResponse.ok) {
                    throw new Error('La solicitud Fetch no se realizó correctamente');
                }
                const reporteResult = await reporteResponse.json();

                const examenesPromises = reporteResult.examenes.map(examen => {
                    const examenUrl = `https://api-arquitecturas-ti.vercel.app/api/examen/informacion/${examen._id}`;
                    return fetch(examenUrl, requestOptions)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('La solicitud Fetch no se realizó correctamente');
                            }
                            return response.json();
                        });
                });
                const examenesData = await Promise.all(examenesPromises);
                const dataMascotas = examenesData;

                const reporteResponse2 = await fetch("https://api-arquitecturas-ti.vercel.app/api/reporte/", requestOptions);
                if (!reporteResponse2.ok) {
                    throw new Error('La solicitud Fetch no se realizó correctamente');
                }
                const reporteResult2 = await reporteResponse2.json();
    
                if (realizado) {
                    const reporte = reporteResult2.examenes.filter(examen => {
                        return examen.estado === "Completado";
                    });
    
                    const mascotas = dataMascotas.filter(mascota => {
                        return reporte.some(examen => {
                            return mascota.examen._id === examen._id;
                        });
                    });
    
                    if(mascotas.length == 0){
                        var inexistente = [""].map(vacio => {
                            return (
                                <label key="0" className="titulo-no-encontrado">Actualmente, no existen reportes de los exámenes completados</label>
                            )
                        })
                        setReporte(inexistente);
                    }else{
                        const reporteCard = mascotas.map(data => {
                            if(data.examen.tipoExamen == "Parasitologia"){
                                fechaCompleta = data.examen.fechaSolicitud;
                                fecha = new Date(fechaCompleta).toLocaleDateString();
                                hora = new Date(fechaCompleta).toLocaleTimeString();
                                return (
                                    <div className="report-card" key={data.examen._id}>
                                        <label className='veterinario-titulo-examen'>{data.mascota.nombre}</label>
                                        <label className='report-titulo-dato'><b>Propietario: </b>{data.usuario.nombre}<br></br><b>Especie: </b>{data.mascota.especie}<br></br><b>Sexo: </b>{data.mascota.sexo}</label>
                                        <label className='report-titulo-dato'><b>Examen: </b>{data.examen.tipoExamen}<br></br><b>Fecha: </b>{fecha}<br></br><b>Hora: </b>{hora}</label>
                                        <button onClick={() => goParasitologiaView(data.examen._id, true)} className="report-button-examen">Ver PDF</button>
                                        <button onClick={() => notificarUsuario(data.examen._id)} className="report-button-examen">Notificar</button>
                                    </div>
                                );
                            }else if(data.examen.tipoExamen == "Urianalisis"){
                                fechaCompleta = data.examen.fechaSolicitud;
                                fecha = new Date(fechaCompleta).toLocaleDateString();
                                hora = new Date(fechaCompleta).toLocaleTimeString();
                                return (
                                    <div className="report-card" key={data.examen._id}>
                                        <label className='veterinario-titulo-examen'>{data.mascota.nombre}</label>
                                        <label className='report-titulo-dato'><b>Propietario: </b>{data.usuario.nombre}<br></br><b>Especie: </b>{data.mascota.especie}<br></br><b>Sexo: </b>{data.mascota.sexo}</label>
                                        <label className='report-titulo-dato'><b>Examen: </b>{data.examen.tipoExamen}<br></br><b>Fecha: </b>{fecha}<br></br><b>Hora: </b>{hora}</label>
                                        <button onClick={() => goUrianalisisView(data.examen._id, true)} className="report-button-examen">Ver PDF</button>
                                        <button onClick={() => notificarUsuario(data.examen._id)} className="report-button-examen">Notificar</button>
                                    </div>
                                );
                            }else if(data.examen.tipoExamen == "Hematologia"){
                                fechaCompleta = data.examen.fechaSolicitud;
                                fecha = new Date(fechaCompleta).toLocaleDateString();
                                hora = new Date(fechaCompleta).toLocaleTimeString();
                                return (
                                    <div className="report-card" key={data.examen._id}>
                                        <label className='veterinario-titulo-examen'>{data.mascota.nombre}</label>
                                        <label className='report-titulo-dato'><b>Propietario: </b>{data.usuario.nombre}<br></br><b>Especie: </b>{data.mascota.especie}<br></br><b>Sexo: </b>{data.mascota.sexo}</label>
                                        <label className='report-titulo-dato'><b>Examen: </b>{data.examen.tipoExamen}<br></br><b>Fecha: </b>{fecha}<br></br><b>Hora: </b>{hora}</label>
                                        <button onClick={() => goHematologiaView(data.examen._id, true)} className="report-button-examen">Ver PDF</button>
                                        <button onClick={() => notificarUsuario(data.examen._id)} className="report-button-examen">Notificar</button>
                                    </div>
                                );
                            }
                        });
                        setRealizado(false);
                        setReporte(reporteCard);
                    }
                }
            } catch (error) {
                console.log('error', error);
            }
        };
    
        fetchData();
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

    const goParasitologiaView = (examenSeleccionado, generarPDF) => {
        navigate("/parasitologia-view", { state: {examenSeleccionado, generarPDF}});
    }

    const goHematologiaView = (examenSeleccionado, generarPDF) => {
        navigate("/hematologia-view", { state: {examenSeleccionado, generarPDF}});
    }

    const goUrianalisisView = (examenSeleccionado, generarPDF) => {
        navigate("/urianalisis-view", { state: {examenSeleccionado, generarPDF}});
    }

    const notificarUsuario = (idReporte) => {
        setCargando(true);

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                token: Token[0]
            },
            redirect: 'follow'
        };

        const examenUrl = `https://api-arquitecturas-ti.vercel.app/api/reporte/enviarCorreo/${idReporte}`;
        fetch(examenUrl, requestOptions)
        .then(response => {
            if (response.ok) {
                alert("El correo ha sido notificado al propietario con éxito");
                setCargando(false);
                return response.json();
            } else {
                alert("El correo no se ha podido enviar, ¡Intente Nuevamente!");
                setCargando(false);
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className="grid-home">
            <div className="carga" style={ cargando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Notificando...</label>
            </div>
            <div className="grid-home-1" onClick={returnHome}>
                <label className="titulo-usuario">Revisa los Reportes</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExams} className="moreOption-button" title="Exámenes Pendientes/Completados"><img src='../imgs/Examen.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeReport} className="moreOption-button-selected" title="Informes"><img src='../imgs/Informe.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeRegisterVet} className="moreOption-button" title="Agregar Nuevos Veterinarios"><img src='../imgs/Agregar-Veterinario.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Reportes:</label>

                <div className="veterinario-big-card">

                    {reporte.length == 0 ? <label className="titulo-no-encontrado">Cargando datos de los reportes...</label> : reporte}
                    
                </div>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default Report;