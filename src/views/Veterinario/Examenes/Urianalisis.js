import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

function Urianalisis() {
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));
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
    const [interpretacion, setInterpretacion] = useState("");
    // Examen Específico
    const [eritrocitos, setEritrocitos] = useState("");
    const [renales, setRenales] = useState("");
    const [leucocitos, setLeucocitos] = useState("");
    const [cristales, setCristales] = useState("");
    const [escamosas, setEscamosas] = useState("");
    const [lipidos, setLipidos] = useState("");
    const [transitorias, setTransitorias] = useState("");
    const [bacterias, setBacterias] = useState("");
    const [cilindros, setCilindros] = useState("");
    const [otros, setOtros] = useState("");

    const [metodoObtencion, setMetodoObtencion] = useState("");
    const [color, setColor] = useState("");
    const [proteinas, setProteinas] = useState("");
    const [pH, setPH] = useState("");
    const [apariencia, setApariencia] = useState("");
    const [glucosa, setGlucosa] = useState("");
    const [cetonas, setCetonas] = useState("");
    const [densidad, setDensidad] = useState("");
    const [sangre, setSangre] = useState("");
    const [bilirrubina, setBilirrubina] = useState("");


    const navigate = useNavigate();

    document.body.style.overflowY = "visible";

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

    const seeExamPending = () => {
        navigate("/pend-exam");
    }

    const seeExamComplete = () => {
        navigate("/comp-exam");
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
    
    const handleInterpretacionChange = (event) => {
        setInterpretacion(event.target.value);
    };

    // Examen Específico
    const handleEritrocitosChange = (event) => {
        setEritrocitos(event.target.value);
    };
    
    const handleRenalesChange = (event) => {
        setRenales(event.target.value);
    };
    
    const handleLeucocitosChange = (event) => {
        setLeucocitos(event.target.value);
    };
    
    const handleCristalesChange = (event) => {
        setCristales(event.target.value);
    };
    
    const handleEscamosasChange = (event) => {
        setEscamosas(event.target.value);
    };
    
    const handleLipidosChange = (event) => {
        setLipidos(event.target.value);
    };
    
    const handleTransitoriasChange = (event) => {
        setTransitorias(event.target.value);
    };
    
    const handleBacteriasChange = (event) => {
        setBacterias(event.target.value);
    };
    
    const handleCilindrosChange = (event) => {
        setCilindros(event.target.value);
    };
    
    const handleOtrosChange = (event) => {
        setOtros(event.target.value);
    };

    const handleMetodoObtencionChange = (event) => {
        setMetodoObtencion(event.target.value);
    };
    
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    
    const handleProteinasChange = (event) => {
        setProteinas(event.target.value);
    };
    
    const handlePHChange = (event) => {
        setPH(event.target.value);
    };
    
    const handleAparienciaChange = (event) => {
        setApariencia(event.target.value);
    };
    
    const handleGlucosaChange = (event) => {
        setGlucosa(event.target.value);
    };
    
    const handleCetonasChange = (event) => {
        setCetonas(event.target.value);
    };
    
    const handleDensidadChange = (event) => {
        setDensidad(event.target.value);
    };
    
    const handleSangreChange = (event) => {
        setSangre(event.target.value);
    };
    
    const handleBilirrubinaChange = (event) => {
        setBilirrubina(event.target.value);
    };    

    const cancelarForm = () => {
        // Examen General
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
        setInterpretacion("");
        // Examen Específico
        setEritrocitos("");
        setRenales("");
        setLeucocitos("");
        setCristales("");
        setEscamosas("");
        setLipidos("");
        setTransitorias("");
        setBacterias("");
        setCilindros("");
        setOtros("");

        setMetodoObtencion("");
        setColor("");
        setProteinas("");
        setPH("");
        setApariencia("");
        setGlucosa("");
        setCetonas("");
        setDensidad("");
        setSangre("");
        setBilirrubina("");
    };
        

    return (
        <div className="grid-home">
            <div className="grid-home-1" onClick={returnHome}>
                <img src='../imgs/Regresar.png' className="regresar" onClick={returnHome}></img>
                <label className="titulo-usuario">Examen de Parasitología</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExamPending} className="moreOption-button" title="Exámenes Pendientes"><img src='../imgs/Examen-Pendiente.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExamComplete} className="moreOption-button" title="Exámenes Completados"><img src='../imgs/Examen-Completado.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeReport} className="moreOption-button" title="Informes"><img src='../imgs/Informe.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">

                {/* <label className="titulo-examen"></label> */}

                <form className="examen">
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
                            <div className="examen-encabezado-resultado">Resultados Urianálisis</div>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaPropietario">
                                <tr>
                                    <th>Caso:</th>
                                    <td className="examen-tabla-continuacion">23-UA-<input type="text" required value={caso} onChange={handleCasoChange} className="examen-input-tabla examen-input-continuacion" placeholder="Ingrese número de caso"></input></td>
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
                                            <option value="" disabled selected>Seleccione especie</option>
                                            <option value="canino">Canino</option>
                                            <option value="felino">Felino</option>
                                            <option value="equino">Equino</option>
                                            <option value="bovino">Bovino</option>
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
                                            <option value="" disabled selected>Seleccione sexo</option>
                                            <option value="hembra">Hembra</option>
                                            <option value="macho">Macho</option>
                                        </select>
                                    </td>
                                    <th>Castrado:</th>
                                    <td>
                                        <select name="castrado_examen" id="castrado_examen" className="examen-input-tabla" value={castrado} onChange={handleCastradoChange} required>
                                            <option value="" disabled selected>Seleccione castrado</option>
                                            <option value="no">No</option>
                                            <option value="si">Si</option>
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
                                    <th className="examen-segunda-version1">Metodo de obtención:</th>
                                    <td className="examen-segunda-version2">
                                        <select name="metodo_obtencion" id="metodo_obtencion" className="examen-input-tabla" value={metodoObtencion} onChange={handleMetodoObtencionChange} required>
                                            <option value="" disabled selected>No referido</option>
                                            <option value="miccion">Micción</option>
                                            <option value="cateterismo">Cateterismo</option>
                                            <option value="cistocentesis">Cistocentesis</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaAnalisis">
                                <tr>
                                    <th className="examen-segunda-version1" colspan="2">Examen Físico</th>
                                    <th className="examen-segunda-version1" colspan="5">Examen Químico</th>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Color:</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={color} onChange={handleColorChange} className="examen-input-tabla" placeholder="Ingrese color"></input></td>
                                    <th className="examen-segunda-version2">Proteínas</th>
                                    <td className="examen-segunda-version2">
                                        <select name="quimico_proteinas" id="quimico_proteinas" className="examen-input-tabla" value={proteinas} onChange={handleProteinasChange} required>
                                            <option value="0">0</option>
                                            <option value="trazas">Trazas</option>
                                            <option value="0.15">0.15</option>
                                            <option value="0.3">0.3</option>
                                            <option value="1.0">1.0</option>
                                            <option value="3.0">3.0</option>
                                            <option value="20.0">20.0</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">g/L</td>
                                    <th className="examen-segunda-version2">pH</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={pH} onChange={handlePHChange} className="examen-input-tabla" placeholder="Ingrese pH"></input></td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Apariencia:</th>
                                    <td className="examen-segunda-version2">
                                        <select name="fisico_apariencia" id="fisico_apariencia" className="examen-input-tabla" value={apariencia} onChange={handleAparienciaChange} required>
                                            <option value="" disabled selected>Elija una opción</option>
                                            <option value="transparente">Transparente</option>
                                            <option value="1+">Turbio 1+</option>
                                            <option value="2+">Turbio 2+</option>
                                            <option value="3+">Turbio 3+</option>
                                        </select>
                                    </td>
                                    <th className="examen-segunda-version2">Glucosa</th>
                                    <td className="examen-segunda-version2">
                                        <select name="quimico_glucosa" id="quimico_glucosa" className="examen-input-tabla" value={glucosa} onChange={handleGlucosaChange} required>
                                            <option value="0">0</option>
                                            <option value="5">5</option>
                                            <option value="15">15</option>
                                            <option value="30">30</option>
                                            <option value="60">60</option>
                                            <option value="110">110</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">mmol/L</td>
                                    <th className="examen-segunda-version2">Cetonas</th>
                                    <td className="examen-segunda-version2">
                                        <select name="quimico_cetonas" id="quimico_cetonas" className="examen-input-tabla" value={cetonas} onChange={handleCetonasChange} required>
                                            <option value="negativo">Negativo</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Densidad:</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={densidad} onChange={handleDensidadChange} className="examen-input-tabla" placeholder="Ingrese DU"></input></td>
                                    <th className="examen-segunda-version2">Sangre / Hg</th>
                                    <td className="examen-segunda-version2">
                                        <select name="quimico_sangre" id="quimico_sangre" className="examen-input-tabla" value={sangre} onChange={handleSangreChange} required>
                                            <option value="0">0</option>
                                            <option value="5-10">5 - 10</option>
                                            <option value="50">50</option>
                                            <option value=">50">&gt; 50</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">Eri/µL</td>
                                    <th className="examen-segunda-version2">Bilirrubina</th>
                                    <td className="examen-segunda-version2">
                                        <select name="quimico_bilirrubina" id="quimico_bilirrubina" className="examen-input-tabla" value={bilirrubina} onChange={handleBilirrubinaChange} required>
                                            <option value="negativo">Negativo</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaAnalisis">
                                <tr>
                                    <th className="examen-segunda-version1" colspan="6">Examen microscópico</th>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Eritrocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={eritrocitos} onChange={handleEritrocitosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                    <th className="examen-segunda-version2">Renales</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={renales} onChange={handleRenalesChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Leucocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={leucocitos} onChange={handleLeucocitosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                    <th className="examen-segunda-version2">Cristales</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={cristales} onChange={handleCristalesChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Escamosas</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={escamosas} onChange={handleEscamosasChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                    <th className="examen-segunda-version2">Lipidos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={lipidos} onChange={handleLipidosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Transitorias</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={transitorias} onChange={handleTransitoriasChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                    <th className="examen-segunda-version2">Bacterias</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={bacterias} onChange={handleBacteriasChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Cilindros</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={cilindros} onChange={handleCilindrosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                    <th className="examen-segunda-version2">Otros:</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={otros} onChange={handleOtrosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                </tr>
                            </table>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaTratamiento">
                                <tr>
                                    <th className="examen-segunda-version1">Interpretación:</th>
                                    <td><input type="text" required value={interpretacion} onChange={handleInterpretacionChange} className="examen-input-tabla" placeholder="Interpretacion"></input></td>
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
 
export default Urianalisis;