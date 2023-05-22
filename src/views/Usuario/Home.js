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

function Home() {
    const usuario = useState(localStorage.getItem("usuario"));
    const Token = useState(localStorage.getItem("token"));
    const [mascotasUsuario, setMascotasUsuarios] = useState([]);
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

        fetch("https://api-arquitecturas-ti.vercel.app/api/mascota/Usuario/", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            // console.log("Resultado: " + JSON.stringify(result))
            var mascotasCards = result.mascotas.map(mascota => {
                return (
                    <div className="mascota-card" key={mascota._id}>
                        <img src='../imgs/Mascota.png' className='mascota-image'></img>
                        <label className='mascota-titulo-examen'>{mascota.nombre}</label>
                        <label className='mascota-titulo-dato'>Raza: {mascota.raza}<br></br><br></br>Edad: {mascota.edad}</label>
                        <button onClick={() => petSpecificDetails(mascota._id)} className="mascota-button-info">+ Info</button>
                        <button onClick={() => petExamDetails(mascota._id)} className="mascota-button-examen">Examenes</button>
                    </div>
                )
            })
            setMascotasUsuarios(mascotasCards);
        })
        .catch(error => console.log('error', error));
    }, []);

    const logoutUser = () => {
        localStorage.clear();
        navigate("/login");
    }

    const returnHome = () =>{
        navigate("/home");
    }

    const petExamDetails = (mascotaSeleccionada) => {
        navigate("/pet-exam", { state: {mascotaSeleccionada}});
    }

    const petSpecificDetails = (mascotaSeleccionada) => {
        navigate("/pet-specific", { state: {mascotaSeleccionada}});
    }

    const addNewExam = () => {
        navigate("/add-exam");
    }

    const addNewPet = () => {
        navigate("/add-pet");
    }

    return (
        <div className="grid-home">
            <div className="grid-home-1">
                <label className="titulo-usuario">¡Bienvenido {usuario}!</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button-selected" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewPet} className="moreOption-button" title="Agregar Nueva Mascota"><img src='../imgs/Agregar-Mascota.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewExam} className="moreOption-button" title="Solicitar Nuevo Examen Clínico"><img src='../imgs/Solicitar-Examen.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Mis Mascotas:</label>

                {mascotasUsuario}

                <br></br>
                
            </div>
        </div>
    );
}
 
export default Home;