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

function HematologiaUser() {
    const API = process.env.REACT_APP_API_URL;
    const Token = useState(localStorage.getItem("token"));
    var fechaCompleta = "";
    var fechaReporte = new Date();
    var horaReporte = new Date();
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
    const [valorHematocrito, setValorHematocrito] = useState("");
    const [valorHemoglobina, setValorHemoglobina] = useState("");
    const [valorEritrocitos, setValorEritrocitos] = useState("");
    const [valorVGM, setValorVGM] = useState("");
    const [valorCGMH, setValorCGMH] = useState("");
    const [valorReticulocitos, setValorReticulocitos] = useState("");
    const [valorPlaquetas, setValorPlaquetas] = useState("");
    const [valorSolidos, setValorSolidos] = useState("");
    const [valorLeucocitos, setValorLeucocitos] = useState("");
    const [valorNeutrofilos, setValorNeutrofilos] = useState("");
    const [valorBandas, setValorBandas] = useState("");
    const [valorLinfocitos, setValorLinfocitos] = useState("");
    const [valorMonocitos, setValorMonocitos] = useState("");
    const [valorEosinofilos, setValorEosinofilos] = useState("");
    const [valorBasofilos, setValorBasofilos] = useState("");
    const [valorArtefactos, setValorArtefactos] = useState("");

    const [variacionHematocrito, setVariacionHematocrito] = useState("");
    const [variacionHemoglobina, setVariacionHemoglobina] = useState("");
    const [variacionEritrocitos, setVariacionEritrocitos] = useState("");
    const [variacionVGM, setVariacionVGM] = useState("");
    const [variacionCGMH, setVariacionCGMH] = useState("");
    const [variacionReticulocitos, setVariacionReticulocitos] = useState("");
    const [variacionPlaquetas, setVariacionPlaquetas] = useState("");
    const [variacionSolidos, setVariacionSolidos] = useState("");
    const [variacionLeucocitos, setVariacionLeucocitos] = useState("");
    const [variacionNeutrofilos, setVariacionNeutrofilos] = useState("");
    const [variacionBandas, setVariacionBandas] = useState("");
    const [variacionLinfocitos, setVariacionLinfocitos] = useState("");
    const [variacionMonocitos, setVariacionMonocitos] = useState("");
    const [variacionEosinofilos, setVariacionEosinofilos] = useState("");
    const [variacionBasofilos, setVariacionBasofilos] = useState("");

    const [morfologiaHematocrito, setMorfologiaHematocrito] = useState("");
    const [morfologiaHemoglobina, setMorfologiaHemoglobina] = useState("");
    const [morfologiaEritrocitos, setMorfologiaEritrocitos] = useState("");
    const [morfologiaVGM, setMorfologiaVGM] = useState("");
    const [morfologiaCGMH, setMorfologiaCGMH] = useState("");
    const [morfologiaReticulocitos, setMorfologiaReticulocitos] = useState("");
    const [morfologiaTipo, setMorfologiaTipo] = useState("");
    const [morfologiaSolidos, setMorfologiaSolidos] = useState("");
    const [morfologiaLeucocitos, setMorfologiaLeucocitos] = useState("");
    const [morfologiaLinfocitos, setMorfologiaLinfocitos] = useState("");
    const [morfologiaMonocitos, setMorfologiaMonocitos] = useState("");
    const [morfologiaEosinofilos, setMorfologiaEosinofilos] = useState("");
    const [morfologiaBasofilos, setMorfologiaBasofilos] = useState("");
    const [morfologiaArtefactos, setMorfologiaArtefactos] = useState("");

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

        const examenUrl = API + "/api/examen/informacion/" + examenSeleccionado;
        fetch(examenUrl, requestOptions)
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

            fechaCompleta = result.examen.fechaRealizado;
            fechaReporte = new Date(fechaCompleta).toLocaleDateString();
            horaReporte = new Date(fechaCompleta).toLocaleTimeString();
            const fechaReporteNueva = formatearFecha(new Date(fechaCompleta));
            setFecha(fechaReporteNueva);
            setHora(horaReporte);
            setAnamnesis(result.examen.datos.Anamnesis);
            setTratamiento(result.examen.datos["Tratamiento Previo"]);

            setInterpretacion(result.examen.datos["Interpretación"]);
            setCaso(" ");
            setDireccion(" ");
            setExpediente(" ");
            setTelefono(" ");

            setValorHematocrito(result.examen.datos["Hematocrito"]["Valor"]);
            setValorHemoglobina(result.examen.datos["Hemoglobina"]["Valor"]);
            setValorEritrocitos(result.examen.datos["Eritrocitos"]["Valor"]);
            setValorVGM(result.examen.datos["VGM"]["Valor"]);
            setValorCGMH(result.examen.datos["CGMH"]["Valor"]);
            setValorReticulocitos(result.examen.datos["Reticulocitos"]["Valor"]);
            setValorPlaquetas(result.examen.datos["Plaquetas"]["Valor"]);
            setValorSolidos(result.examen.datos["Sólidos Totales"]["Valor"]);
            setValorLeucocitos(result.examen.datos["Leucocitos Totales"]["Valor"]);
            setValorNeutrofilos(result.examen.datos["Neutrófilos"]["Valor"]);
            setValorBandas(result.examen.datos["Bandas"]["Valor"]);
            setValorLinfocitos(result.examen.datos["Linfocitos"]["Valor"]);
            setValorMonocitos(result.examen.datos["Monocitos"]["Valor"]);
            setValorEosinofilos(result.examen.datos["Eosinófilos"]["Valor"]);
            setValorBasofilos(result.examen.datos["Basófilos"]["Valor"]);
            setValorArtefactos(result.examen.datos["Artefactos"]["Valor"]);
        
            setVariacionHematocrito(result.examen.datos["Hematocrito"]["Variación"]);
            setVariacionHemoglobina(result.examen.datos["Hemoglobina"]["Variación"]);
            setVariacionEritrocitos(result.examen.datos["Eritrocitos"]["Variación"]);
            setVariacionVGM(result.examen.datos["VGM"]["Variación"]);
            setVariacionCGMH(result.examen.datos["CGMH"]["Variación"]);
            setVariacionReticulocitos(result.examen.datos["Reticulocitos"]["Variación"]);
            setVariacionPlaquetas(result.examen.datos["Plaquetas"]["Variación"]);
            setVariacionSolidos(result.examen.datos["Sólidos Totales"]["Variación"]);
            setVariacionLeucocitos(result.examen.datos["Leucocitos Totales"]["Variación"]);
            setVariacionNeutrofilos(result.examen.datos["Neutrófilos"]["Variación"]);
            setVariacionBandas(result.examen.datos["Bandas"]["Variación"]);
            setVariacionLinfocitos(result.examen.datos["Linfocitos"]["Variación"]);
            setVariacionMonocitos(result.examen.datos["Monocitos"]["Variación"]);
            setVariacionEosinofilos(result.examen.datos["Eosinófilos"]["Variación"]);
            setVariacionBasofilos(result.examen.datos["Basófilos"]["Variación"]);
        
            setMorfologiaHematocrito(result.examen.datos["Hematocrito"]["Morfología Celular"]);
            setMorfologiaHemoglobina(result.examen.datos["Hemoglobina"]["Morfología Celular"]);
            setMorfologiaEritrocitos(result.examen.datos["Eritrocitos"]["Morfología Celular"]);
            setMorfologiaVGM(result.examen.datos["VGM"]["Morfología Celular"]);
            setMorfologiaCGMH(result.examen.datos["CGMH"]["Morfología Celular"]);
            setMorfologiaReticulocitos(result.examen.datos["Reticulocitos"]["Morfología Celular"]);
            setMorfologiaTipo(result.examen.datos["Plaquetas"]["Morfología Celular"]);
            setMorfologiaSolidos(result.examen.datos["Sólidos Totales"]["Morfología Celular"]);
            setMorfologiaLeucocitos(result.examen.datos["Leucocitos Totales"]["Morfología Celular"]);
            setMorfologiaLinfocitos(result.examen.datos["Linfocitos"]["Morfología Celular"]);
            setMorfologiaMonocitos(result.examen.datos["Monocitos"]["Morfología Celular"]);
            setMorfologiaEosinofilos(result.examen.datos["Eosinófilos"]["Morfología Celular"]);
            setMorfologiaBasofilos(result.examen.datos["Basófilos"]["Morfología Celular"]);
            setMorfologiaArtefactos(result.examen.datos["Artefactos"]["Morfología Celular"]);
        })
        .catch(error => console.log('error', error));
    }, []);

    const formatearFecha = (fecha) => {
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();

        // Ajusta el formato de la cadena de fecha (agrega ceros a la izquierda si es necesario)
        const diaFormateado = dia < 10 ? '0' + dia : dia;
        const mesFormateado = mes < 10 ? '0' + mes : mes;

        return `${año}-${mesFormateado}-${diaFormateado}`;
    };

    // Rutas
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
                <label className="titulo-usuario">Examen de Parasitología</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewPet} className="moreOption-button" title="Agregar Nueva Mascota"><img src='../imgs/Agregar-Mascota.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewExam} className="moreOption-button" title="Solicitar Nuevo Examen Clínico"><img src='../imgs/Solicitar-Examen.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3" id="pdf-content-hematologia">

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
                                {/* <img src='../imgs/examenes/Vaca.png' className="examen-encabezado-animal"></img> */}
                                {/* <img src='../imgs/examenes/Gato.png' className="examen-encabezado-animal"></img> */}
                                {/* <img src='../imgs/examenes/Caballo.png' className="examen-encabezado-animal"></img> */}
                                <img src='../imgs/examenes/Perro.png' className="examen-encabezado-animal2"></img>
                            </div>
                            <div className="examen-encabezado-resultado">Resultados Hematología</div>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaPropietario">
                                <tr>
                                    <th>Caso:</th>
                                    <td className="examen-tabla-continuacion">23-HG-<input type="text" required value={caso} disabled className="examen-input-tabla examen-input-continuacion" placeholder="Ingrese número de caso"></input></td>
                                </tr>
                                <tr>
                                    <th>Propietario:</th>
                                    <td><input type="text" required value={propietario} disabled className="examen-input-tabla" placeholder="Ingrese nombre propietario"></input></td>
                                </tr>
                                <tr>
                                    <th>Dirección:</th>
                                    <td><input type="text" required value={direccion} disabled className="examen-input-tabla" placeholder="Ingrese dirección propietario"></input></td>
                                </tr>
                                <tr>
                                    <th>Teléfono:</th>
                                    <td><input type="text" required value={telefono} disabled className="examen-input-tabla" placeholder="Ingrese teléfono propietario"></input></td>
                                </tr>
                            </table>

                            <table className="examen-encabezado-tablaMascota">
                                <tr>
                                    <th>Fecha:</th>
                                    <td><input type="date" required value={fecha} disabled className="examen-input-tabla" placeholder="Seleccione muestra"></input></td>
                                    <th>Hora:</th>
                                    <td><input type="time" required value={hora} disabled className="examen-input-tabla" placeholder="Seleccione muestra"></input></td>
                                </tr>
                                <tr>
                                    <th>Especie:</th>
                                    <td>
                                        <select name="especie_examen" id="especie_examen" className="examen-input-tabla" value={especie} disabled required>
                                            {/* <option value="" disabled selected>Seleccione especie</option> */}
                                            <option value="Canino" selected>Canino</option>
                                            {/* <option value="Felino">Felino</option> */}
                                            {/* <option value="Equino">Equino</option> */}
                                            {/* <option value="Bovino">Bovino</option> */}
                                        </select>
                                    </td>
                                    <th>Nombre:</th>
                                    <td><input type="text" required value={nombre} disabled className="examen-input-tabla" placeholder="Paciente"></input></td>
                                </tr>
                                <tr>
                                    <th>Raza:</th>
                                    <td><input type="text" required value={raza} disabled className="examen-input-tabla" placeholder="Raza"></input></td>
                                    <th>Edad:</th>
                                    <td><input type="number" required value={edad} disabled className="examen-input-tabla" placeholder="Edad"></input></td>
                                </tr>
                                <tr>
                                    <th>Sexo:</th>
                                    <td>
                                        <select name="sexo_examen" id="sexo_examen" className="examen-input-tabla" value={sexo} disabled required>
                                            <option value="" disabled selected>Seleccione sexo</option>
                                            <option value="Hembra">Hembra</option>
                                            <option value="Macho">Macho</option>
                                        </select>
                                    </td>
                                    <th>Castrado:</th>
                                    <td>
                                        <select name="castrado_examen" id="castrado_examen" className="examen-input-tabla" value={castrado} disabled required>
                                            <option value="" disabled selected>Seleccione castrado</option>
                                            <option value="No">No</option>
                                            <option value="Si">Si</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>MVZ:</th>
                                    <td><input type="text" required value={mvz} disabled className="examen-input-tabla" placeholder="Médico"></input></td>
                                    <th>Expediente:</th>
                                    <td><input type="number" required value={expediente} disabled className="examen-input-tabla" placeholder="Número"></input></td>
                                </tr>
                            </table>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaTratamiento">
                                <tr>
                                    <th className="examen-segunda-version1">Anamnesis / Examen Fisico:</th>
                                    <td><input type="text" required value={anamnesis} disabled className="examen-input-tabla" placeholder="Ingrese anamnesis y examen físico"></input></td>
                                </tr>
                                <tr>
                                    <th>Tratamiento previo:</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={tratamiento} disabled className="examen-input-tabla" placeholder="Ingrese tratamiento hasta 3 días previos a la muestra"></input></td>
                                </tr>
                            </table>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaAnalisis">
                                <tr>
                                    <th className="examen-segunda-version1">Mesurando</th>
                                    <th className="examen-segunda-version1">Valor</th>
                                    <th className="examen-segunda-version1">Variación</th>
                                    <th className="examen-segunda-version1">Referencia</th>
                                    <th className="examen-segunda-version1">Unidades</th>
                                    <th className="examen-segunda-version1" colspan="2">Morfología Celular</th>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Hematocrito</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorHematocrito} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_hematocrito_examen" id="variacion_hematocrito_examen" className="examen-input-tabla" value={variacionHematocrito} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">0.37 - 0.55</td>
                                    <td className="examen-segunda-version2">L/L</td>
                                    <td className="examen-segunda-version2">Anisocitosis</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_hematocrito_examen" id="morfologia_hematocrito_examen" className="examen-input-tabla" value={morfologiaHematocrito} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Hemoglobina</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorHemoglobina} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_hemoglobina_examen" id="variacion_hemoglobina_examen" className="examen-input-tabla" value={variacionHemoglobina} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">120 - 180</td>
                                    <td className="examen-segunda-version2">g/L</td>
                                    <td className="examen-segunda-version2">Policromasia</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_hemoglobina_examen" id="morfologia_hemoglobina_examen" className="examen-input-tabla" value={morfologiaHemoglobina} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Eritrocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorEritrocitos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_eritrocitos_examen" id="variacion_eritrocitos_examen" className="examen-input-tabla" value={variacionEritrocitos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">5.5 - 8.5</td>
                                    <td className="examen-segunda-version2">x10<sup>12</sup>/L</td>
                                    <td className="examen-segunda-version2">P. Basofílico</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_eritrocitos_examen" id="morfologia_eritrocitos_examen" className="examen-input-tabla" value={morfologiaEritrocitos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">VGM</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorVGM} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_vgm_examen" id="variacion_vgm_examen" className="examen-input-tabla" value={variacionVGM} disabled >
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">60 - 77</td>
                                    <td className="examen-segunda-version2">fL</td>
                                    <td className="examen-segunda-version2">Hipocromía</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_vgm_examen" id="morfologia_vgm_examen" className="examen-input-tabla" value={morfologiaVGM} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">CGMH</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorCGMH} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_cgmh_examen" id="variacion_cgmh_examen" className="examen-input-tabla" value={variacionCGMH} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">320 - 360</td>
                                    <td className="examen-segunda-version2">g/L</td>
                                    <td className="examen-segunda-version2">Aglutinación</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_cgmh_examen" id="morfologia_cgmh_examen" className="examen-input-tabla" value={morfologiaCGMH} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Reticulocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorReticulocitos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_reticulocitos_examen" id="variacion_reticulocitos_examen" className="examen-input-tabla" value={variacionReticulocitos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">&lt; 60</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Rouleaux</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_reticulocitos_examen" id="morfologia_reticulocitos_examen" className="examen-input-tabla" value={morfologiaReticulocitos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Plaquetas</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorPlaquetas} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_plaquetas_examen" id="variacion_plaquetas_examen" className="examen-input-tabla" value={variacionPlaquetas} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">200 - 600</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Metarrubricitos</td>
                                    <td className="examen-segunda-version2">
                                        <input type="text" required value={morfologiaTipo} disabled className="examen-input-tabla" placeholder="-"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Sólidos Totales</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorSolidos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_solidos_examen" id="variacion_solidos_examen" className="examen-input-tabla" value={variacionSolidos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">60 - 75</td>
                                    <td className="examen-segunda-version2">g/L</td>
                                    <td className="examen-segunda-version2">Poiquilocitosis</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_solidos_examen" id="morfologia_solidos_examen" className="examen-input-tabla" value={morfologiaSolidos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Leucocitos Totales</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorLeucocitos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_leucocitos_examen" id="variacion_leucocitos_examen" className="examen-input-tabla" value={variacionLeucocitos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">6.0 - 17.0</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2" colspan="2" rowspan="3">Tipo:<input type="text" required value={morfologiaLeucocitos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Neutrófiloss</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorNeutrofilos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_neutrofilos_examen" id="variacion_neutrofilos_examen" className="examen-input-tabla" value={variacionNeutrofilos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">3.0 - 11.5</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Bandas</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorBandas} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_bandas_examen" id="variacion_bandas_examen" className="examen-input-tabla" value={variacionBandas} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">0 - 0.3</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Linfocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorLinfocitos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_linfocitos_examen" id="variacion_linfocitos_examen" className="examen-input-tabla" value={variacionLinfocitos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">1.0 - 4.8</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Neutrófilos tóxicos</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_linfocitos_examen" id="morfologia_linfocitos_examen" className="examen-input-tabla" value={morfologiaLinfocitos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Monocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorMonocitos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_monocitos_examen" id="variacion_monocitos_examen" className="examen-input-tabla" value={variacionMonocitos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">0 - 1.4</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Linfocitos reactivos</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_monocitos_examen" id="morfologia_monocitos_examen" className="examen-input-tabla" value={morfologiaMonocitos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Eosinófilos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorEosinofilos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_eosinofilos_examen" id="variacion_eosinofilos_examen" className="examen-input-tabla" value={variacionEosinofilos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">0 - 0.9</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Mielo. Inmaduros</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_eosinofilos_examen" id="morfologia_eosinofilos_examen" className="examen-input-tabla" value={morfologiaEosinofilos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Basófilos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorBasofilos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_basofilos_examen" id="variacion_basofilos_examen" className="examen-input-tabla" value={variacionBasofilos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="Alto">Alto</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="NC">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">Raros</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Microfilarias</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_basofilos_examen" id="morfologia_basofilos_examen" className="examen-input-tabla" value={morfologiaBasofilos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Artefactos:</th>
                                    <td className="examen-segunda-version2" colspan="4"><input type="text" required value={valorArtefactos} disabled className="examen-input-tabla" placeholder="Ninguno"></input></td>
                                    <td className="examen-segunda-version2">Macroplaquetas</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_artefactos_examen" id="morfologia_artefactos_examen" className="examen-input-tabla" value={morfologiaArtefactos} disabled required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaTratamiento">
                                <tr>
                                    <th className="examen-segunda-version1">Interpretación:</th>
                                    <td><input type="text" required value={interpretacion} disabled className="examen-input-tabla" placeholder="Interpretacion"></input></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </form>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default HematologiaUser;