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
    var [reporte, setReporte] = useState([]);
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

        fetch("https://api-arquitecturas-ti.vercel.app/api/reporte/", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            console.log("Resultado: " + JSON.stringify(result.examenes))
            var reportes = result.examenes.filter(examen => {
                return examen.estado == "Completado";
            })
            var reporteCard = reportes.map(data => {
                return (
                    <div className="report-card" key={data._id}>
                        <label className='veterinario-titulo-examen'>{data.idMascota}</label>
                        <label className='report-titulo-dato'>Más Datos... </label>
                        <label className='report-titulo-dato'>Propietario: </label>
                        <button onClick={""} className="report-button-examen">Ver PDF</button>
                        <button onClick={() => notificarUsuario(data._id)} className="report-button-examen">Notificar</button>
                    </div>
                );
            })
            setReporte(reporteCard);
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

    const seeExamPending = () => {
        navigate("/pend-exam");
    }

    const seeExamComplete = () => {
        navigate("/comp-exam");
    }

    const seeReport = () => {
        navigate("/report");
    }

    const notificarUsuario = (idReporte) => {
        setCargando(true);

        const raw = {
            correo: "ale.gv258@gmail.com",
            id: idReporte
        };

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                token: Token[0]
            },
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("https://api-arquitecturas-ti.vercel.app/api/reporte/enviarCorreo", requestOptions)
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
                    <button onClick={seeExamPending} className="moreOption-button" title="Exámenes Pendientes"><img src='../imgs/Examen-Pendiente.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExamComplete} className="moreOption-button" title="Exámenes Completados"><img src='../imgs/Examen-Completado.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeReport} className="moreOption-button-selected" title="Informes"><img src='../imgs/Informe.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Reportes:</label>

                <div className="veterinario-big-card">

                    <form>

                        {reporte}

                        <div className="option-section">
                            <button className="option-button-cancel" onClick={""}>Cancelar</button>
                            <input type="submit" value="Guardar" className="option-button-save"></input>
                        </div>

                    </form>
                    
                </div>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default Report;