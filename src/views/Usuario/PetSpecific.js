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

function PetSpecific() {
    const API = process.env.REACT_APP_API_URL;
    const Token = useState(localStorage.getItem("token"));
    const [cargando, setCargando] = useState(false);
    const [mascotaUsuario, setMascotaUsuario] = useState([]);
    const [mascota, setMascota] = useState([]);
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


        const mascotaUser = API + "/api/mascota/id/" + mascotaSeleccionada;
        fetch(mascotaUser, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            // console.log("Resultado: " + JSON.stringify(result))
            setMascota(result.mascota);
        })
        .catch(error => console.log('error', error));

        const mascotaUrl= API + "/api/examen/" + mascotaSeleccionada;
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
            const filtradoMascota = result.examen.filter(exam => {
                return exam.estado === "Completado";
            })
            if(filtradoMascota.length == 0){
                var inexistente = [""].map(vacio => {
                    return (
                        <label key="0" className="titulo-no-encontrado">No existen exámenes completados por el momento</label>
                    )
                })
                setMascotaUsuario(inexistente);
            }else{
                var completados = filtradoMascota.map(resultado => {
                    if(resultado.tipoExamen == "Parasitologia"){
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
                    }else if(resultado.tipoExamen == "Urianalisis"){
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
                    }else if(resultado.tipoExamen == "Hematologia"){
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
                    }
                })
                setMascotaUsuario(completados.reverse());
            }
        })
        .catch(error => console.log('error', error));
    }, []);

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
            <div className="carga" style={ cargando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Eliminando...</label>
            </div>
            <div className="grid-home-1" onClick={returnHome}>
                <img src='../imgs/Regresar.png' className="regresar" onClick={returnHome}></img>
                <label className="titulo-usuario">Datos Mascota</label>
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
                <label className="titulo-examen">Mascota</label>

                <div>
                    <div>
                        {mascota.especie == "Perro (Canino)" ? <img src="../imgs/Perro.png" className="especifico-imagen"></img> : [mascota.especie == "Gato (Felino)" ? <img src="../imgs/Gato.png" className="especifico-imagen"></img> : [mascota.especie == "Caballo (Equino)" ? <img src="../imgs/Caballo.png" className="especifico-imagen"></img> : [mascota.especie == "Vaca (Bovino)" ? <img src="../imgs/Vaca.png" className="especifico-imagen"></img> : <img src="../imgs/Mascota.png" className="especifico-imagen"></img>]]]}

                        <label className="especifico-titulo">{mascota.nombre}</label>
                    </div>
                    <div className="separador"></div>
                    <div>
                        <label className="especifico-datos"><b>Especie:</b> {mascota.especie}</label>
                        <label className="especifico-datos"><b>Raza:</b> {mascota.raza}</label>
                        <label className="especifico-datos"><b>Edad:</b> {mascota.edad}</label>
                        <label className="especifico-datos"><b>Sexo:</b> {mascota.sexo}</label>
                    </div>
                    <div>
                        <label className="especifico-datos"><b>Médico:</b> {mascota.MVZ}</label>
                        <label className="especifico-datos"><b>Castrado:</b> {mascota.castrado}</label>
                        <label className="especifico-datos"><b>ID Mascota:</b> {mascota._id}</label>
                    </div>
                    <br></br>
                </div>

                {mascotaUsuario.length == 0 ? <label className="titulo-no-encontrado">Cargando datos de los exámenes...</label> : mascotaUsuario}

                <br></br>

                <button onClick={() => borrarMascota(mascota._id)} className="veterinario-button-eliminar">Eliminar a {mascota.nombre}</button>

                <br></br><br></br><br></br>
                
            </div>
        </div>
    );
}
 
export default PetSpecific;