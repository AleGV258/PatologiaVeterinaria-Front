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

function HomeVet() {
    const Token = useState(localStorage.getItem("token"));
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));
    const [busqueda, setBusqueda] = useState("");
    var [mascotasUsuarios, setMascotasUsuarios] = useState([]);
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

        fetch("https://api-arquitecturas-ti.vercel.app/api/mascota/", requestOptions)
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
                        <label className="titulo-no-encontrado">¡Lo sentimos! No existen mascotas registradas</label>
                    )
                })
                setMascotasUsuarios(inexistente);
            }else{
                var mascotasCards = result.mascotas.map(mascota => {
                    return (
                        <div className="opcion-mascota-veterinario" key={mascota._id} onClick={() => goMascotaExams(mascota._id)}>
                            <div className="nombre-mascota-veterinario">{mascota.especie.split(' ')[0]}<br></br>{mascota.raza}</div>
                            <img src='../imgs/Mascota.png' className="imagen-mascota-veterinario"></img>
                            <label className="titulo-examen">{mascota.nombre.split(' ')[0]}</label>
                        </div>
                    )
                })
                setMascotasUsuarios(mascotasCards);
            }
        })
        .catch(error => console.log('error', error));
    }, []);

    const busquedaMascota = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                token: Token[0]
            },
            redirect: 'follow'
        };

        fetch("https://api-arquitecturas-ti.vercel.app/api/mascota/", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            // console.log("Resultado: " + JSON.stringify(result))
            const mascotaFiltrada = result.mascotas.filter(mascota => {
                return (mascota.nombre.toUpperCase().includes(busqueda.toUpperCase()) || mascota.especie.toUpperCase().includes(busqueda.toUpperCase()) || mascota.raza.toUpperCase().includes(busqueda.toUpperCase()) || mascota.sexo.toUpperCase().includes(busqueda.toUpperCase()))
            })
            if(mascotaFiltrada.length == 0){
                var inexistente = [""].map(vacio => {
                    return (
                        <label className="titulo-no-encontrado">¡Lo sentimos! No existen mascotas relacionadas con su búsqueda</label>
                    )
                })
                setMascotasUsuarios(inexistente);
            }else{
                var mascotasCards = mascotaFiltrada.map(mascota => {
                    return (
                        <div className="opcion-mascota-veterinario" key={mascota._id} onClick={() => goMascotaExams(mascota._id)}>
                            <div className="nombre-mascota-veterinario">{mascota.especie.split(' ')[0]}<br></br>{mascota.raza}</div>
                            <img src='../imgs/Mascota.png' className="imagen-mascota-veterinario"></img>
                            <label className="titulo-examen">{mascota.nombre.split(' ')[0]}</label>
                        </div>
                    )
                })
                setMascotasUsuarios(mascotasCards);
            }
        })
        .catch(error => console.log('error', error));
    }

    const logoutUser = () => {
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

    const goMascotaExams = (mascotaSeleccionada) => {
        navigate("/exam-pet", { state: {mascotaSeleccionada}});
    }

    const handleBusquedaChange = (event) => {
        setBusqueda(event.target.value);
    };

    return (
        <div className="grid-home">
            <div className="grid-home-1">
                <label className="titulo-usuario">¡Bienvenido {usuario}!</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button-selected" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExams} className="moreOption-button" title="Exámenes Pendientes/Completados"><img src='../imgs/Examen.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeReport} className="moreOption-button" title="Informes"><img src='../imgs/Informe.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeRegisterVet} className="moreOption-button" title="Agregar Nuevos Veterinarios"><img src='../imgs/Agregar-Veterinario.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Mascotas:</label>

                <div className="seccion-buscador">
                    <input type="text" id="buscador-veterinario" name="buscador-veterinario" placeholder="Buscar Mascota" className="input-buscador" required value={busqueda} onChange={handleBusquedaChange} ></input>
                    <button onClick={busquedaMascota} className="boton-buscador">Buscar</button>
                </div>

                {mascotasUsuarios.length == 0 ? <label className="titulo-no-encontrado">Cargando datos de las mascotas...</label> : mascotasUsuarios}

                <br></br>
                
            </div>
        </div>
    );
}
 
export default HomeVet;