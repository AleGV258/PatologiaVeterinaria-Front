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
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));
    const [busqueda, setBusqueda] = useState("");
    const navigate = useNavigate();

    document.body.style.overflowY = "visible";

    const logoutUser = () => {
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

    const handleBusquedaChange = (event) => {
        setBusqueda(event.target.value);
    };


    // --------------------------------------------- PRUEBA
    const para=()=>{navigate("/parasitologia");};const uri=()=>{navigate("/urianalisis");};const hemo=()=>{navigate("/hematologia");};
    // --------------------------------------------- PRUEBA

    return (
        <div className="grid-home">
            <div className="grid-home-1">
                <label className="titulo-usuario">¡Bienvenido {usuario}!</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button-selected" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExamPending} className="moreOption-button" title="Exámenes Pendientes"><img src='../imgs/Examen-Pendiente.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExamComplete} className="moreOption-button" title="Exámenes Completados"><img src='../imgs/Examen-Completado.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeReport} className="moreOption-button" title="Informes"><img src='../imgs/Informe.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Mascotas:</label>

                <div className="seccion-buscador">
                    <input type="text" id="buscador-veterinario" name="buscador-veterinario" placeholder="Buscar Mascota" className="input-buscador" required value={busqueda} onChange={handleBusquedaChange} ></input>
                    <button onClick={""} className="boton-buscador">Buscar</button>
                </div>

                <div className="opcion-mascota-veterinario" onClick={para}>
                    <div className="nombre-mascota-veterinario">Mascota</div>
                    <img src='../imgs/Perro-Prueba.png' className="imagen-mascota-veterinario"></img>
                    <label className="titulo-examen">Dueño Dueño</label>
                </div>

                <div className="opcion-mascota-veterinario" onClick={uri}>
                    <div className="nombre-mascota-veterinario">Mascota</div>
                    <img src='../imgs/Perro-Prueba.png' className="imagen-mascota-veterinario"></img>
                    <label className="titulo-examen">Dueño Dueño</label>
                </div>

                <div className="opcion-mascota-veterinario" onClick={hemo}>
                    <div className="nombre-mascota-veterinario">Mascota</div>
                    <img src='../imgs/Perro-Prueba.png' className="imagen-mascota-veterinario"></img>
                    <label className="titulo-examen">Dueño Dueño</label>
                </div>

                <div className="opcion-mascota-veterinario">
                    <div className="nombre-mascota-veterinario">Mascota</div>
                    <img src='../imgs/Perro-Prueba.png' className="imagen-mascota-veterinario"></img>
                    <label className="titulo-examen">Dueño Dueño</label>
                </div>

                <div className="opcion-mascota-veterinario">
                    <div className="nombre-mascota-veterinario">Mascota</div>
                    <img src='../imgs/Perro-Prueba.png' className="imagen-mascota-veterinario"></img>
                    <label className="titulo-examen">Dueño Dueño</label>
                </div>

                <div className="opcion-mascota-veterinario">
                    <div className="nombre-mascota-veterinario">Mascota</div>
                    <img src='../imgs/Perro-Prueba.png' className="imagen-mascota-veterinario"></img>
                    <label className="titulo-examen">Dueño Dueño</label>
                </div>

                <br></br>

{/* 
                <div className="mascota-card">
                    <img src='../imgs/Mascota.png' className='mascota-image'></img>
                    <label className='mascota-titulo-examen'>Mascota 1</label>
                    <label className='mascota-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <button onClick={petSpecificDetails} className="mascota-button-info">+ Info</button>
                    <button onClick={petExamDetails} className="mascota-button-examen">Examenes</button>
                </div>

                <div className="mascota-card">
                    <img src='../imgs/Mascota.png' className='mascota-image'></img>
                    <label className='mascota-titulo-examen'>Mascota 2</label>
                    <label className='mascota-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <button onClick={petSpecificDetails} className="mascota-button-info">+ Info</button>
                    <button onClick={petExamDetails} className="mascota-button-examen">Examenes</button>
                </div>
                
                <div className="mascota-card">
                    <img src='../imgs/Mascota.png' className='mascota-image'></img>
                    <label className='mascota-titulo-examen'>Mascota 3</label>
                    <label className='mascota-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <button onClick={petSpecificDetails} className="mascota-button-info">+ Info</button>
                    <button onClick={petExamDetails} className="mascota-button-examen">Examenes</button>
                </div>
                
                <div className="mascota-card">
                    <img src='../imgs/Mascota.png' className='mascota-image'></img>
                    <label className='mascota-titulo-examen'>Mascota 4</label>
                    <label className='mascota-titulo-dato'>Raza: <br></br><br></br>Edad: </label>
                    <button onClick={petSpecificDetails} className="mascota-button-info">+ Info</button>
                    <button onClick={petExamDetails} className="mascota-button-examen">Examenes</button>
                </div> */}
                
            </div>
        </div>
    );
}
 
export default HomeVet;