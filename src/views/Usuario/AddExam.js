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

function AddExam() {
    const Token = useState(localStorage.getItem("token"));
    const [cargando, setCargando] = useState(false);
    const [examenHematologia, setExamenHematologia] = useState("");
    const [examenUrianalisis, setExamenUrianalisis] = useState("");
    const [examenParasitologia, setExamenParasitologia] = useState("");
    var [ListaMascotas, setListaMascotas] = useState([]);
    var [ListaPerros, setListaPerros] = useState([]);
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
            let nombres = []
            let perros = []
            for (let i = 0; i < result.mascotas.length; i++) {
                if(result.mascotas[i].especie == "Perro (Canino)"){
                    perros.push([result.mascotas[i].nombre, result.mascotas[i]._id]);
                }
                nombres.push([result.mascotas[i].nombre, result.mascotas[i]._id]);
            }
            ListaMascotas = nombres.filter((item, index) => {
                return nombres.indexOf(item) === index;
            })
            ListaPerros = perros.filter((item, index) => {
                return perros.indexOf(item) === index;
            })
            setListaMascotas(ListaMascotas);
            setListaPerros(ListaPerros);
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

    const handleExamenHematologiaChange = (event) => {
        setExamenHematologia(event.target.value);
    };

    const handleExamenUrianalisiChange = (event) => {
        setExamenUrianalisis(event.target.value);
    };

    const handleExamenParasitologiaChange = (event) => {
        setExamenParasitologia(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario
        setCargando(true);

        var raw = {};

        const formName = event.target.name;
        if (formName === "formHematologia") {
            raw = {
                idMascota: examenHematologia,
                tipoExamen: "Hematologia",
            };
        } else if (formName === "formUrianalisis") {
            raw = {
                idMascota: examenUrianalisis,
                tipoExamen: "Urianalisis",
            };
        } else if (formName === "formParasitologia") {
            raw = {
                idMascota: examenParasitologia,
                tipoExamen: "Parasitologia",
            };
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: Token[0]
            },
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("https://api-arquitecturas-ti.vercel.app/api/examen/", requestOptions)
        .then(response => {
            if (response.ok) {
                setCargando(false);
                alert("El examen ha sido solicitado con éxito ♥");
                navigate("/home");
                return response.json();
            } else {
                setCargando(false);
                alert("Lo sentimos, ha habido un problema solicitando el examen clínico, ¡Intente Nuevamente!");
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className="grid-home">
            <div className="carga" style={ cargando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Solicitando Examen...</label>
            </div>
            <div className="grid-home-1" onClick={returnHome}>
                <label className="titulo-usuario">Solicita un Nuevo Examen Clínico</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewPet} className="moreOption-button" title="Agregar Nueva Mascota"><img src='../imgs/Agregar-Mascota.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewExam} className="moreOption-button-selected" title="Solicitar Nuevo Examen Clínico"><img src='../imgs/Solicitar-Examen.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Solicitar Examen:</label>

                <div className="examenes-cards">
                    <div className="examen-card">
                        <form onSubmit={handleSubmit} name="formHematologia">
                            <label className="examen-card-titulo">Hemograma</label>
                            <img src='../imgs/Sangre.png' className="examen-card-imagen"></img>
                            <select name="hematologia_examen" id="hematologia_examen" className="examen-card-select" value={examenHematologia} onChange={handleExamenHematologiaChange} required>
                                <option value="" disabled selected>Seleccione su Mascota</option>
                                {ListaPerros.map((dato, index) => (
                                        <option key={index} value={dato[1]}>{dato[0]}</option>
                                ))}
                            </select>
                            <button className="examen-card-boton" type="submit">Solicitar</button>
                        </form>
                    </div>

                    <div className="examen-card">
                        <form onSubmit={handleSubmit} name="formUrianalisis">
                            <label className="examen-card-titulo">Uriánalisis</label>
                            <img src='../imgs/Orina.png' className="examen-card-imagen"></img>
                            <select name="urianalisis_examen" id="urianalisis_examen" className="examen-card-select" value={examenUrianalisis} onChange={handleExamenUrianalisiChange} required>
                                <option value="" disabled selected>Seleccione su Mascota</option>
                                {ListaMascotas.map((dato, index) => (
                                        <option key={index} value={dato[1]}>{dato[0]}</option>
                                ))}
                            </select>
                            <button className="examen-card-boton" type="submit">Solicitar</button>
                        </form>
                    </div>

                    <div className="examen-card">
                        <form onSubmit={handleSubmit} name="formParasitologia">
                            <label className="examen-card-titulo">Parásitos</label>
                            <img src='../imgs/Parasito.png' className="examen-card-imagen"></img>
                            <select name="parasitologia_examen" id="parasitologia_examen" className="examen-card-select" value={examenParasitologia} onChange={handleExamenParasitologiaChange} required>
                                <option value="" disabled selected>Seleccione su Mascota</option>
                                {ListaMascotas.map((dato, index) => (
                                        <option key={index} value={dato[1]}>{dato[0]}</option>
                                ))}
                            </select>
                            <button className="examen-card-boton" type="submit">Solicitar</button>
                        </form>
                    </div>
                </div>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default AddExam;