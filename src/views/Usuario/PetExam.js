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

        var url = "https://api-arquitecturas-ti.vercel.app/api/examen/" + mascotaSeleccionada;
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
            var examenNuevo = result.examen.map(examenMascota => {
                if(examenMascota.estado == "Pendiente"){
                    return (
                        <div className="mascota-card">
                            <label className="clinico-titulo-examen">{examenMascota.tipoExamen}</label>
                            <label className='clinico-titulo-dato'>Estado: Pendiente<br></br><br></br>Más Datos... </label>
                            <button className="clinico-button-proceso">En Proceso</button>
                        </div>
                    )
                }else if(examenMascota.estado == "Completado"){
                    return (
                        <div className="mascota-card">
                            <label className="clinico-titulo-examen">{examenMascota.tipoExamen}</label>
                            <label className='clinico-titulo-dato'>Estado: Completado<br></br><br></br>Más Datos... </label>
                            <button onClick={""} className="clinico-button-descarga">Descargar</button>
                        </div>
                    )
                }
            });
            setMascotaExamenes(examenNuevo);
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

    return (
        <div className="grid-home">
            <div className="grid-home-1" onClick={returnHome}>
                <img src='../imgs/Regresar.png' className="regresar" onClick={returnHome}></img>
                <label className="titulo-usuario">Examen Clínico</label>
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
                <label className="titulo-examen">Exámenes Clínicos:</label>

                {mascotaExamenes}

                <br></br>
                
            </div>
        </div>
    );
}
 
export default PetExam;