import React, { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import '../../../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

function UrianalisisUser() {
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

            setEritrocitos(result.examen.datos["Examen Microscópico"]["Eritrocitos"]);
            setRenales(result.examen.datos["Examen Microscópico"]["Renales"]);
            setLeucocitos(result.examen.datos["Examen Microscópico"]["Leucocitos"]);
            setCristales(result.examen.datos["Examen Microscópico"]["Cristales"]);
            setEscamosas(result.examen.datos["Examen Microscópico"]["Escamosas"]);
            setLipidos(result.examen.datos["Examen Microscópico"]["Lipidos"]);
            setTransitorias(result.examen.datos["Examen Microscópico"]["Transitorias"]);
            setBacterias(result.examen.datos["Examen Microscópico"]["Bacterias"]);
            setCilindros(result.examen.datos["Examen Microscópico"]["Cilindros"]);
            setOtros(result.examen.datos["Examen Microscópico"]["Otros"]);
        
            setMetodoObtencion(result.examen.datos["Metodo de Obtención"]);
            setColor(result.examen.datos["Examen Físico"]["Color"]);
            setProteinas(result.examen.datos["Examen Químico"]["Proteínas"]);
            setPH(result.examen.datos["Examen Químico"]["pH"]);
            setApariencia(result.examen.datos["Examen Físico"]["Apariencia"]);
            setGlucosa(result.examen.datos["Examen Químico"]["Glucosa"]);
            setCetonas(result.examen.datos["Examen Químico"]["Cetonas"]);
            setDensidad(result.examen.datos["Examen Físico"]["Densidad"]);
            setSangre(result.examen.datos["Examen Químico"]["Sangre"]);
            setBilirrubina(result.examen.datos["Examen Químico"]["Bilirrubina"]);
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
                <img src='./imgs/Regresar.png' className="regresar" onClick={returnHome}></img>
                <label className="titulo-usuario">Examen de Urianálisis</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='./imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewPet} className="moreOption-button" title="Agregar Nueva Mascota"><img src='./imgs/Agregar-Mascota.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={addNewExam} className="moreOption-button" title="Solicitar Nuevo Examen Clínico"><img src='./imgs/Solicitar-Examen.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3" id="pdf-content-urianalisis">

                {/* <label className="titulo-examen"></label> */}

                <form className="examen">
                    <div className="examen-encabezado">

                        <div className="examen-encabezado-divisor"></div>

                        <div className="examen-encabezado-facultad">
                            <label className="examen-encabezado-titulo">FACULTAD DE CIENCIAS NATURALES<br></br>Laboratorio de Patología Veterinaria</label>
                            <img src='./imgs/examenes/25UAQ.png' className="examen-encabezado-escudo"></img>
                            <img src='./imgs/examenes/FCN.jpg' className="examen-encabezado-escudo"></img>
                            <img src='./imgs/examenes/UAQ.jpg' className="examen-encabezado-escudo"></img>
                            <img src='./imgs/examenes/Escudo.png' className="examen-encabezado-escudo"></img>
                        </div>

                        <div className="examen-encabezado-mascotas">
                            <div className="examen-encabezado-imagenes">
                                <img src='./imgs/examenes/Vaca.png' className="examen-encabezado-animal"></img>
                                <img src='./imgs/examenes/Gato.png' className="examen-encabezado-animal"></img>
                                <img src='./imgs/examenes/Caballo.png' className="examen-encabezado-animal"></img>
                                <img src='./imgs/examenes/Perro.png' className="examen-encabezado-animal"></img>
                            </div>
                            <div className="examen-encabezado-resultado">Resultados Urianálisis</div>
                        </div>

                        <div className="examen-encabezado-datos">
                            <table className="examen-encabezado-tablaPropietario">
                                <tr>
                                    <th>Caso:</th>
                                    <td className="examen-tabla-continuacion">23-UA-<input type="text" required value={caso} disabled className="examen-input-tabla examen-input-continuacion" placeholder="Ingrese número de caso"></input></td>
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
                                            <option value="" disabled selected>Seleccione especie</option>
                                            <option value="Canino">Canino</option>
                                            <option value="Felino">Felino</option>
                                            <option value="Equino">Equino</option>
                                            <option value="Bovino">Bovino</option>
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
                                    <th className="examen-segunda-version1">Metodo de obtención:</th>
                                    <td className="examen-segunda-version2">
                                        <select name="metodo_obtencion" id="metodo_obtencion" className="examen-input-tabla" value={metodoObtencion} disabled required>
                                            <option value="" disabled selected>No referido</option>
                                            <option value="Micción">Micción</option>
                                            <option value="Cateterismo">Cateterismo</option>
                                            <option value="Cistocentesis">Cistocentesis</option>
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
                                    <td className="examen-segunda-version2"><input type="text" required value={color} disabled className="examen-input-tabla" placeholder="Ingrese color"></input></td>
                                    <th className="examen-segunda-version2">Proteínas</th>
                                    <td className="examen-segunda-version2">
                                        <select name="quimico_proteinas" id="quimico_proteinas" className="examen-input-tabla" value={proteinas} disabled required>
                                            <option value="0">0</option>
                                            <option value="Trazas">Trazas</option>
                                            <option value="0.15">0.15</option>
                                            <option value="0.3">0.3</option>
                                            <option value="1.0">1.0</option>
                                            <option value="3.0">3.0</option>
                                            <option value="20.0">20.0</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">g/L</td>
                                    <th className="examen-segunda-version2">pH</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={pH} disabled className="examen-input-tabla" placeholder="Ingrese pH"></input></td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Apariencia:</th>
                                    <td className="examen-segunda-version2">
                                        <select name="fisico_apariencia" id="fisico_apariencia" className="examen-input-tabla" value={apariencia} disabled required>
                                            <option value="" disabled selected>Elija una opción</option>
                                            <option value="Transparente">Transparente</option>
                                            <option value="Turbio 1+">Turbio 1+</option>
                                            <option value="Turbio 2+">Turbio 2+</option>
                                            <option value="Turbio 3+">Turbio 3+</option>
                                        </select>
                                    </td>
                                    <th className="examen-segunda-version2">Glucosa</th>
                                    <td className="examen-segunda-version2">
                                        <select name="quimico_glucosa" id="quimico_glucosa" className="examen-input-tabla" value={glucosa} disabled required>
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
                                        <select name="quimico_cetonas" id="quimico_cetonas" className="examen-input-tabla" value={cetonas} disabled required>
                                            <option value="Negativo">Negativo</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Densidad:</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={densidad} disabled className="examen-input-tabla" placeholder="Ingrese DU"></input></td>
                                    <th className="examen-segunda-version2">Sangre / Hg</th>
                                    <td className="examen-segunda-version2">
                                        <select name="quimico_sangre" id="quimico_sangre" className="examen-input-tabla" value={sangre} disabled required>
                                            <option value="0">0</option>
                                            <option value="5 - 10">5 - 10</option>
                                            <option value="50">50</option>
                                            <option value="> 50">&gt; 50</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">Eri/µL</td>
                                    <th className="examen-segunda-version2">Bilirrubina</th>
                                    <td className="examen-segunda-version2">
                                        <select name="quimico_bilirrubina" id="quimico_bilirrubina" className="examen-input-tabla" value={bilirrubina} disabled required>
                                            <option value="Negativo">Negativo</option>
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
                                    <td className="examen-segunda-version2"><input type="text" required value={eritrocitos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                    <th className="examen-segunda-version2">Renales</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={renales} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Leucocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={leucocitos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                    <th className="examen-segunda-version2">Cristales</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={cristales} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Escamosas</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={escamosas} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                    <th className="examen-segunda-version2">Lipidos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={lipidos} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Transitorias</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={transitorias} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                    <th className="examen-segunda-version2">Bacterias</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={bacterias} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Cilindros</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={cilindros} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
                                    <th className="examen-segunda-version2">Otros:</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={otros} disabled className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">Campo 400x</td>
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
 
export default UrianalisisUser;