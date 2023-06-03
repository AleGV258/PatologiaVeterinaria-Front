import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

function Parasitologia() {
    const API = process.env.REACT_APP_API_URL;
    const Token = useState(localStorage.getItem("token"));
    const [cargando, setCargando] = useState(false);
    // Examen General
    const [caso, setCaso] = useState("");
    const [propietario, setPropietario] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fecha, setFecha] = useState(new Date());
    const [hora, setHora] = useState(new Date());
    const [especie, setEspecie] = useState("");
    const [nombre, setNombre] = useState("");
    const [raza, setRaza] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const [castrado, setCastrado] = useState("");
    const [mvz, setMVZ] = useState("");
    const [expediente, setExpediente] = useState("");
    const [anamnesis, setAnamnesis] = useState("");
    const [tratamiento, setTratamiento] = useState("");
    const [observaciones, setObservaciones] = useState("");
    // Examen Específico
    const [muestra, setMuestra] = useState("");
    const [tecnica, setTecnica] = useState("");
    const [resultado, setResultado] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const examenSeleccionado = location.state?.examenSeleccionado || [];

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
    
        const urlData = `${API}/api/examen/informacion/${examenSeleccionado}`;    
        fetch(urlData, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            // console.log("Resultado: " + JSON.stringify(result))
            setPropietario(result.usuario.nombre);
            setEspecie(result.mascota.especie);
            setRaza(result.mascota.raza);
            setSexo(result.mascota.sexo);
            setNombre(result.mascota.nombre);
            setEdad(result.mascota.edad);
            setCastrado(result.mascota.castrado);
            setMVZ(result.mascota.MVZ);
        })
        .catch(error => console.log('error', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario
        setCargando(true);

        const raw = {
            datos: {
                "Datos Generales": {
                    "Caso": caso,
                    "Propietario": propietario,
                    "Dirección": direccion,
                    "Teléfono": telefono,
                    "Fecha": fecha,
                    "Hora": hora,
                    "Raza": raza,
                    "Sexo": sexo,
                    "MVZ": mvz
                },
                "Anamnesis": anamnesis,
                "Tratamiento Previo": tratamiento,
                "Tipo de Muestra": muestra,
                "Examen Microscópico": {
                    "Técnica": tecnica,
                    "Resultado": resultado
                },
                "Observaciones": observaciones
            }
        };

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                token: Token[0]
            },
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        var url = API + "/api/examen/" + examenSeleccionado;
        fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                setCargando(false);
                alert("El examen se ha registrado con éxito.");
                navigate("/home-vet");
                return response.json();
            } else {
                setCargando(false);
                alert("El examen no se ha registrado correctamente. ¡Intenta Nuevamente!");
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .catch(error => console.log('error', error));
    }

    // Función para formatear la fecha en el formato deseado (YYYY-MM-DD)
    const formatearFecha = (fecha) => {
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();

        // Ajusta el formato de la cadena de fecha (agrega ceros a la izquierda si es necesario)
        const diaFormateado = dia < 10 ? '0' + dia : dia;
        const mesFormateado = mes < 10 ? '0' + mes : mes;

        return `${año}-${mesFormateado}-${diaFormateado}`;
    };

    const formatearHora = (hora) => {
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
    
        const horaFormateada = horas < 10 ? '0' + horas : horas;
        const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
    
        return `${horaFormateada}:${minutosFormateados}`;
    };

    // Rutas
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

    // Examen General
    const handleCasoChange = (event) => {
        setCaso(event.target.value);
    };
    
    const handlePropietarioChange = (event) => {
        setPropietario(event.target.value);
    };
    
    const handleDireccionChange = (event) => {
        setDireccion(event.target.value);
    };
    
    const handleTelefonoChange = (event) => {
        setTelefono(event.target.value);
    };
    
    const handleFechaChange = (event) => {
        const fechaSeleccionada = new Date(event.target.value);
        setFecha(fechaSeleccionada);
    };
    
    const handleHoraChange = (event) => {
        const horaSeleccionada = new Date(event.target.value);
        setHora(horaSeleccionada);
    };
    
    const handleEspecieChange = (event) => {
        setEspecie(event.target.value);
    };
    
    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };
    
    const handleRazaChange = (event) => {
        setRaza(event.target.value);
    };
    
    const handleEdadChange = (event) => {
        setEdad(event.target.value);
    };
    
    const handleSexoChange = (event) => {
        setSexo(event.target.value);
    };
    
    const handleCastradoChange = (event) => {
        setCastrado(event.target.value);
    };
    
    const handleMVZChange = (event) => {
        setMVZ(event.target.value);
    };
    
    const handleExpedienteChange = (event) => {
        setExpediente(event.target.value);
    };
    
    const handleAnamnesisChange = (event) => {
        setAnamnesis(event.target.value);
    };
    
    const handleTratamientoChange = (event) => {
        setTratamiento(event.target.value);
    };
    
    const handleObservacionesChange = (event) => {
        setObservaciones(event.target.value);
    };

    // Examen Específico
    const handleMuestraChange = (event) => {
        setMuestra(event.target.value);
    };

    const handleTecnicaChange = (event) => {
        setTecnica(event.target.value);
    };

    const handleResultadoChange = (event) => {
        setResultado(event.target.value);
    };

    const cancelarForm = () => {
        setCaso("");
        setPropietario("");
        setDireccion("");
        setTelefono("");
        setFecha(new Date());
        setHora(new Date());
        setEspecie("");
        setNombre("");
        setRaza("");
        setEdad("");
        setSexo("");
        setCastrado("");
        setMVZ("");
        setExpediente("");
        setAnamnesis("");
        setTratamiento("");
        setObservaciones("");
        setMuestra("");
        setTecnica("");
        setResultado("");
      };

    return (
        <div className="grid-home">
            <div className="carga" style={ cargando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Registrando...</label>
            </div>
            <div className="grid-home-1" onClick={seeExams}>
                <img src='../imgs/Regresar.png' className="regresar" onClick={seeExams}></img>
                <label className="titulo-usuario">Examen de Parasitología</label>
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

                {/* <label className="titulo-examen"></label> */}

                <form className="examen" onSubmit={handleSubmit}>
                    <div className="examen-encabezado">

                        <div className="examen-encabezado-divisor"></div>

                        <div className="examen-encabezado-facultad">
                            <label className="examen-encabezado-titulo">FACULTAD DE CIENCIAS NATURALES<br></br>Laboratorio de Patología Veterinaria</label>
                            <img src='../imgs/examenes/25UAQ.png' className="examen-encabezado-escudo"></img>
                            <img src='../imgs/examenes/FCN.jpg' className="examen-encabezado-escudo"></img>
                            <img src='../imgs/examenes/UAQ.jpg' className="examen-encabezado-escudo"></img>
                            <img src='../imgs/examenes/Escudo.png' className="examen-encabezado-escudo"></img>
                        </div>

                        <div className="examen-encabezado-mascotas">
                            <div className="examen-encabezado-imagenes">
                                <img src='../imgs/examenes/Vaca.png' className="examen-encabezado-animal"></img>
                                <img src='../imgs/examenes/Gato.png' className="examen-encabezado-animal"></img>
                                <img src='../imgs/examenes/Caballo.png' className="examen-encabezado-animal"></img>
                                <img src='../imgs/examenes/Perro.png' className="examen-encabezado-animal"></img>
                            </div>
                            <div className="examen-encabezado-resultado">Resultados Parasitología</div>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaPropietario">
                                <tr>
                                    <th>Caso:</th>
                                    <td className="examen-tabla-continuacion">23-Para-<input type="text" required value={caso} onChange={handleCasoChange} className="examen-input-tabla examen-input-continuacion" placeholder="Ingrese número de caso"></input></td>
                                </tr>
                                <tr>
                                    <th>Propietario:</th>
                                    <td><input type="text" required value={propietario} onChange={handlePropietarioChange} className="examen-input-tabla" placeholder="Ingrese nombre propietario"></input></td>
                                </tr>
                                <tr>
                                    <th>Dirección:</th>
                                    <td><input type="text" required value={direccion} onChange={handleDireccionChange} className="examen-input-tabla" placeholder="Ingrese dirección propietario"></input></td>
                                </tr>
                                <tr>
                                    <th>Teléfono:</th>
                                    <td><input type="text" required value={telefono} onChange={handleTelefonoChange} className="examen-input-tabla" placeholder="Ingrese teléfono propietario"></input></td>
                                </tr>
                            </table>

                            <table className="examen-encabezado-tablaMascota">
                                <tr>
                                    <th>Fecha:</th>
                                    <td><input type="date" required value={formatearFecha(fecha)} onChange={handleFechaChange} className="examen-input-tabla" placeholder="Seleccione muestra"></input></td>
                                    <th>Hora:</th>
                                    <td><input type="time" required value={formatearHora(hora)} onChange={handleHoraChange} className="examen-input-tabla" placeholder="Seleccione muestra"></input></td>
                                </tr>
                                <tr>
                                    <th>Especie:</th>
                                    <td>
                                        <select name="especie_examen" id="especie_examen" className="examen-input-tabla" value={especie} onChange={handleEspecieChange} required>
                                            <option value="" disabled selected>Seleccione Especie</option>
                                            <option value="Perro (Canino)">Perro (Canino)</option>
                                            <option value="Gato (Felino)">Gato (Felino)</option>
                                            <option value="Caballo (Equino)">Caballo (Equino)</option>
                                            <option value="Vaca (Bovino)">Vaca (Bovino)</option>
                                        </select>
                                    </td>
                                    <th>Nombre:</th>
                                    <td><input type="text" required value={nombre} onChange={handleNombreChange} className="examen-input-tabla" placeholder="Paciente"></input></td>
                                </tr>
                                <tr>
                                    <th>Raza:</th>
                                    <td><input type="text" required value={raza} onChange={handleRazaChange} className="examen-input-tabla" placeholder="Raza"></input></td>
                                    <th>Edad:</th>
                                    <td><input type="number" required value={edad} onChange={handleEdadChange} className="examen-input-tabla" placeholder="Edad"></input></td>
                                </tr>
                                <tr>
                                    <th>Sexo:</th>
                                    <td>
                                        <select name="sexo_examen" id="sexo_examen" className="examen-input-tabla" value={sexo} onChange={handleSexoChange} required>
                                            <option value="" disabled selected>Seleccione Sexo</option>
                                            <option value="Hembra">Hembra</option>
                                            <option value="Macho">Macho</option>
                                        </select>
                                    </td>
                                    <th>Castrado:</th>
                                    <td>
                                        <select name="castrado_examen" id="castrado_examen" className="examen-input-tabla" value={castrado} onChange={handleCastradoChange} required>
                                            <option value="" disabled selected>Seleccione Castrado</option>
                                            <option value="No">No</option>
                                            <option value="Si">Si</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>MVZ:</th>
                                    <td><input type="text" required value={mvz} onChange={handleMVZChange} className="examen-input-tabla" placeholder="Médico"></input></td>
                                    <th>Expediente:</th>
                                    <td><input type="number" required value={expediente} onChange={handleExpedienteChange} className="examen-input-tabla" placeholder="Número"></input></td>
                                </tr>
                            </table>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaTratamiento">
                                <tr>
                                    <th className="examen-segunda-version1">Anamnesis / Examen Fisico:</th>
                                    <td><input type="text" required value={anamnesis} onChange={handleAnamnesisChange} className="examen-input-tabla" placeholder="Ingrese anamnesis y examen físico"></input></td>
                                </tr>
                                <tr>
                                    <th>Tratamiento previo:</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={tratamiento} onChange={handleTratamientoChange} className="examen-input-tabla" placeholder="Ingrese tratamiento hasta 3 días previos a la muestra"></input></td>
                                </tr>
                            </table>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaAnalisis">
                                <tr>
                                    <th className="examen-segunda-version2">Tipo de muestra:</th>
                                    <td>
                                        <select name="muestra_examen" id="muestra_examen" className="examen-input-tabla" value={muestra} onChange={handleMuestraChange} required>
                                            <option value="" disabled selected>Seleccione Muestra</option>
                                            <option value="Raspado">Raspado</option>
                                            <option value="Ejemplar de Parásito">Ejemplar de Parásito</option>
                                            <option value="Heces">Heces</option>
                                            <option value="Heces Seriadas">Heces Seriadas</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th colspan="2">Examen microscópico:</th>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Técnica:</th>
                                    <td>
                                        <select name="tecnica_examen" id="tecnica_examen" className="examen-input-tabla" value={tecnica} onChange={handleTecnicaChange} required>
                                            <option value="" disabled selected>Seleccione Técnica</option>
                                            <option value="Raspado Cutáneo">Raspado Cutáneo</option>
                                            <option value="Identificación Directa">Identificación Directa</option>
                                            <option value="Flotación">Flotación</option>
                                            <option value="Faust">Faust</option>
                                            <option value="Flotación y Faust">Flotación y Faust</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Resultado:</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={resultado} onChange={handleResultadoChange} className="examen-input-tabla" placeholder="Resultado"></input></td>
                                </tr>
                            </table>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaTratamiento">
                                <tr>
                                    <th className="examen-segunda-version1">Observaciones:</th>
                                    <td><input type="text" required value={observaciones} onChange={handleObservacionesChange} className="examen-input-tabla" placeholder="Observaciones"></input></td>
                                </tr>
                            </table>
                        </div>

                        <div className="option-section-examen">
                            <button className="option-button-cancel" onClick={cancelarForm}>Cancelar</button>
                            <input type="submit" value="Guardar" className="option-button-save"></input>
                        </div>
                    </div>

                </form>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default Parasitologia;