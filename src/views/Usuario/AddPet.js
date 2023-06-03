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

function AddPet() {
    const IdUsuario = useState(localStorage.getItem("id"));
    const Token = useState(localStorage.getItem("token"));
    const [cargando, setCargando] = useState(false);
    const [borrando, setBorrando] = useState(false);
    const [nombreMascota, setNombreMascota] = useState("");
    const [especieMascota, setEspecieMascota] = useState("");
    const [sexoMascota, setSexoMascota] = useState("");
    const [mvzMascota, setMVZMascota] = useState("");
    const [razaMascota, setRazaMascota] = useState("");
    const [edadMascota, setEdadMascota] = useState("");
    const [castradoMascota, setCastradoMascota] = useState("");
    var [ListaVeterinarios, setListaVeterinarios] = useState([]);
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

        fetch("https://api-arquitecturas-ti.vercel.app/api/users/veterinarios", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            console.log("Resultado: " + JSON.stringify(result))
            let nombres = []
            for (let i = 0; i < result.veterinarios.length; i++) {
                nombres.push(result.veterinarios[i].nombre)
            }
            ListaVeterinarios = nombres.filter((item, index) => {
                return nombres.indexOf(item) === index;
            })
            setListaVeterinarios(ListaVeterinarios);
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

    const handleNombreMascotaChange = (event) => {
        setNombreMascota(event.target.value);
    };

    const handleEspecieMascotaChange = (event) => {
        setEspecieMascota(event.target.value);
    };

    const handleSexoMascotaChange = (event) => {
        setSexoMascota(event.target.value);
    };

    const handleMVZMascotaChange = (event) => {
        setMVZMascota(event.target.value);
    };

    const handleRazaMascotaChange = (event) => {
        setRazaMascota(event.target.value);
    };

    const handleEdadMascotaChange = (event) => {
        setEdadMascota(event.target.value);
    };

    const handleCastradoMascotaChange = (event) => {
        setCastradoMascota(event.target.value);
    };

    const cancelarForm = () => {
        setNombreMascota("");
        setEspecieMascota("");
        setSexoMascota("");
        setMVZMascota("");
        setRazaMascota("");
        setEdadMascota("");
        setCastradoMascota("");
    }

    
    const borrarUsuario = (usuarioSeleccionado) => {
        var confirmacion = window.confirm("Está segura/o de que desea eliminar tu cuenta actual (en la que está trabajando actualmente), esta acción será irreversible.");
        setBorrando(true);

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                token: Token[0]
            },
            redirect: 'follow'
        };
        
        if(confirmacion){
            const urlUsuario = "https://api-arquitecturas-ti.vercel.app/api/users/" + usuarioSeleccionado[0];
            fetch(urlUsuario, requestOptions)
            .then(response => {
                console.log(response)
                if (response.ok) {
                    setBorrando(false);
                    alert("Tu cuenta ha sido eliminada correctamente");
                    logoutUser();
                    return response.json();
                } else {
                    setBorrando(false);
                    alert("Ha habido un error eliminando tu cuenta. ¡Intenta Nuevamente!");
                    throw new Error('La solicitud Fetch no se realizó correctamente');
                }
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario
        setCargando(true);

        const raw = {
            nombre: nombreMascota,
            especie: especieMascota, 
            raza: razaMascota, 
            sexo: sexoMascota, 
            MVZ: mvzMascota, 
            edad: edadMascota, 
            castrado: castradoMascota
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: Token[0]
            },
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("https://api-arquitecturas-ti.vercel.app/api/mascota/", requestOptions)
        .then(response => {
            console.log(response)
            if (response.ok) {
                setCargando(false);
                alert("Su mascota ha sido registrada correctamente ♥");
                navigate("/home");
                return response.json();
            } else {
                setCargando(false);
                alert("Lo sentimos, ha habido un error registrando a su mascota, ¡Intente Nuevamente! ");
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className="grid-home">
            <div className="carga" style={ cargando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Registrando...</label>
            </div>
            <div className="carga" style={ borrando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Eliminando...</label>
            </div>
            <div className="grid-home-1" onClick={returnHome}>
                <label className="titulo-usuario">Agregar una Nueva Mascota</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewPet} className="moreOption-button-selected" title="Agregar Nueva Mascota"><img src='../imgs/Agregar-Mascota.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewExam} className="moreOption-button" title="Solicitar Nuevo Examen Clínico"><img src='../imgs/Solicitar-Examen.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Nueva Mascota:</label>

                <div className="option-big-card">

                    <form onSubmit={handleSubmit}>
                        <div className="option-section">
                            <label className="option-text" for="nombre_mascota">Nombre:</label>
                            <input type="text" id="nombre_mascota" name="nombre_mascota" placeholder="Nombre de la Mascota" className="option-input" required value={nombreMascota} onChange={handleNombreMascotaChange} ></input>
                        </div>

                        <div className="option-section">
                            <label className="option-text" for="especie_mascota">Especie:</label>
                            <select name="especie_mascota" id="especie_mascota" className="option-select" value={especieMascota} onChange={handleEspecieMascotaChange} required>
                                <option value="" disabled selected>Seleccione la Especie</option>
                                <option value="Perro (Canino)">Perro (Canino)</option>
                                <option value="Gato (Felino)">Gato (Felino)</option>
                                <option value="Caballo (Equino)">Caballo (Equino)</option>
                                <option value="Vaca (Bovino)">Vaca (Bovino)</option>
                            </select>
                            {/* <input type="text" id="especie_mascota" name="especie_mascota" placeholder="Especie" className="option-input" required value={especieMascota} onChange={handleEspecieMascotaChange} ></input> */}
                        </div>

                        <div className="option-section">
                            <label className="option-text" for="raza_mascota">Raza:</label>
                            <input type="text" id="raza_mascota" name="raza_mascota" placeholder="Raza" className="option-input" required value={razaMascota} onChange={handleRazaMascotaChange} ></input>
                        </div>
                        
                        <div className="option-section">
                            <label className="option-text" for="sexo_mascota">Sexo:</label>
                            <select name="sexo_mascota" id="sexo_mascota" className="option-select" value={sexoMascota} onChange={handleSexoMascotaChange} required>
                                <option value="" disabled selected>Selecciona el Sexo</option>
                                <option value="Hembra">Hembra</option>
                                <option value="Macho">Macho</option>
                            </select>
                            {/* <input type="text" id="sexo_mascota" name="sexo_mascota" placeholder="Sexo" className="option-input" required value={sexoMascota} onChange={handleSexoMascotaChange} ></input> */}
                        </div>

                        <div className="option-section">
                            <label className="option-text" for="edad_mascota">Edad:</label>
                            <input type="number" id="edad_mascota" name="edad_mascota" placeholder="Edad" className="option-input" required value={edadMascota} onChange={handleEdadMascotaChange} ></input>
                        </div>
                        
                        <div className="option-section">
                            <label className="option-text" for="castrado_mascota">Castrado:</label>
                            <select name="castrado_mascota" id="castrado_mascota" className="option-select" value={castradoMascota} onChange={handleCastradoMascotaChange} required>
                                <option value="" disabled selected>Seleccione si está Castrado</option>
                                <option value="No">No</option>
                                <option value="Si">Si</option>
                            </select>
                            {/* <input type="text" id="castrado_mascota" name="castrado_mascota" placeholder="Castrado" className="option-input" required value={castradoMascota} onChange={handleCastradoMascotaChange} ></input> */}
                        </div>

                        <div className="option-section">
                            <label className="option-text" for="mvz_mascota">MVZ:</label>
                            <select name="mvz_mascota" id="mvz_mascota" className="option-select" value={mvzMascota} onChange={handleMVZMascotaChange} required>
                                <option value="" disabled selected>Seleccione el Médico Veterinario Zootecnista</option>
                                {ListaVeterinarios.map((dato, index) => (
                                    <option key={index} value={dato}>{dato}</option>
                                ))}
                            </select>
                            {/* <input type="text" id="mvz_mascota" name="mvz_mascota" placeholder="Médico Veterinario Zootecnista" className="option-input" required value={mvzMascota} onChange={handleMVZMascotaChange} ></input> */}
                        </div>

                        <div className="option-section">
                            <button className="option-button-cancel" onClick={cancelarForm}>Cancelar</button>
                            <input type="submit" value="Guardar" className="option-button-save"></input>
                        </div>

                    </form>

                </div>

                <br></br>

                <button onClick={() => borrarUsuario(IdUsuario)} className="veterinario-button-eliminar">Elimina tu Cuenta</button>

                <br></br><br></br><br></br>
                
            </div>
        </div>
    );
}
 
export default AddPet;