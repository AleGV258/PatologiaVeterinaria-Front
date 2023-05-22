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

function Hematologia() {
    const [cargando, setCargando] = useState(false);
    const Token = useState(localStorage.getItem("token"));
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
                "Hematocrito": {
                    "Valor": valorHematocrito,
                    "Variación": variacionHematocrito,
                    "Morfología Celular": morfologiaHematocrito
                },
                "Hemoglobina": {
                    "Valor": valorHemoglobina,
                    "Variación": variacionHemoglobina,
                    "Morfología Celular": morfologiaHemoglobina
                },
                "Eritrocitos": {
                    "Valor": valorEritrocitos,
                    "Variación": variacionEritrocitos,
                    "Morfología Celular": morfologiaEritrocitos
                },
                "VGM": {
                    "Valor": valorVGM,
                    "Variación": variacionVGM,
                    "Morfología Celular": morfologiaVGM
                },
                "CGMH": {
                    "Valor": valorCGMH,
                    "Variación": variacionCGMH,
                    "Morfología Celular": morfologiaCGMH
                },
                "Reticulocitos": {
                    "Valor": valorReticulocitos,
                    "Variación": variacionReticulocitos,
                    "Morfología Celular": morfologiaReticulocitos
                },
                "Plaquetas": {
                    "Valor": valorPlaquetas,
                    "Variación": variacionPlaquetas,
                    "Morfología Celular": morfologiaTipo
                },
                "Sólidos Totales": {
                    "Valor": valorSolidos,
                    "Variación": variacionSolidos,
                    "Morfología Celular": morfologiaSolidos
                },
                "Leucocitos Totales": {
                    "Valor": valorLeucocitos,
                    "Variación": variacionLeucocitos,
                    "Morfología Celular": morfologiaLeucocitos
                },
                "Neutrófilos": {
                    "Valor": valorNeutrofilos,
                    "Variación": variacionNeutrofilos,
                    "Morfología Celular": morfologiaLeucocitos
                },
                "Bandas": {
                    "Valor": valorBandas,
                    "Variación": variacionBandas,
                    "Morfología Celular": morfologiaLeucocitos
                },
                "Linfocitos": {
                    "Valor": valorLinfocitos,
                    "Variación": variacionLinfocitos,
                    "Morfología Celular": morfologiaLinfocitos
                },
                "Monocitos": {
                    "Valor": valorMonocitos,
                    "Variación": variacionMonocitos,
                    "Morfología Celular": morfologiaMonocitos
                },
                "Eosinófilos": {
                    "Valor": valorEosinofilos,
                    "Variación": variacionEosinofilos,
                    "Morfología Celular": morfologiaEosinofilos
                },
                "Basófilos": {
                    "Valor": valorBasofilos,
                    "Variación": variacionBasofilos,
                    "Morfología Celular": morfologiaBasofilos
                },
                "Artefactos": {
                    "Valor": valorArtefactos,
                    "Morfología Celular": morfologiaArtefactos
                },
                "Interpretacion": interpretacion
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

        var url = "https://api-arquitecturas-ti.vercel.app/api/examen/" + examenSeleccionado;
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
    const handleValorHematocritoChange = (event) => {
        setValorHematocrito(event.target.value);
    };
    
    const handleValorHemoglobinaChange = (event) => {
        setValorHemoglobina(event.target.value);
    };
    
    const handleValorEritrocitosChange = (event) => {
        setValorEritrocitos(event.target.value);
    };
    
    const handleValorVGMChange = (event) => {
        setValorVGM(event.target.value);
    };
    
    const handleValorCGMHChange = (event) => {
        setValorCGMH(event.target.value);
    };
    
    const handleValorReticulocitosChange = (event) => {
        setValorReticulocitos(event.target.value);
    };
    
    const handleValorPlaquetasChange = (event) => {
        setValorPlaquetas(event.target.value);
    };
    
    const handleValorSolidosChange = (event) => {
        setValorSolidos(event.target.value);
    };
    
    const handleValorLeucocitosChange = (event) => {
        setValorLeucocitos(event.target.value);
    };
    
    const handleValorNeutrofilosChange = (event) => {
        setValorNeutrofilos(event.target.value);
    };
    
    const handleValorBandasChange = (event) => {
        setValorBandas(event.target.value);
    };
    
    const handleValorLinfocitosChange = (event) => {
        setValorLinfocitos(event.target.value);
    };
    
    const handleValorMonocitosChange = (event) => {
        setValorMonocitos(event.target.value);
    };
    
    const handleValorEosinofilosChange = (event) => {
        setValorEosinofilos(event.target.value);
    };
    
    const handleValorBasofilosChange = (event) => {
        setValorBasofilos(event.target.value);
    };
    
    const handleValorArtefactosChange = (event) => {
        setValorArtefactos(event.target.value);
    };
    
    const handleVariacionHematocritoChange = (event) => {
        setVariacionHematocrito(event.target.value);
    };
    
    const handleVariacionHemoglobinaChange = (event) => {
        setVariacionHemoglobina(event.target.value);
    };
    
    const handleVariacionEritrocitosChange = (event) => {
        setVariacionEritrocitos(event.target.value);
    };
    
    const handleVariacionVGMChange = (event) => {
        setVariacionVGM(event.target.value);
    };
    
    const handleVariacionCGMHChange = (event) => {
        setVariacionCGMH(event.target.value);
    };
    
    const handleVariacionReticulocitosChange = (event) => {
        setVariacionReticulocitos(event.target.value);
    };
    
    const handleVariacionPlaquetasChange = (event) => {
        setVariacionPlaquetas(event.target.value);
    };
    
    const handleVariacionSolidosChange = (event) => {
        setVariacionSolidos(event.target.value);
    };
    
    const handleVariacionLeucocitosChange = (event) => {
        setVariacionLeucocitos(event.target.value);
    };
    
    const handleVariacionNeutrofilosChange = (event) => {
        setVariacionNeutrofilos(event.target.value);
    };
    
    const handleVariacionBandasChange = (event) => {
        setVariacionBandas(event.target.value);
    };
    
    const handleVariacionLinfocitosChange = (event) => {
        setVariacionLinfocitos(event.target.value);
    };
    
    const handleVariacionMonocitosChange = (event) => {
        setVariacionMonocitos(event.target.value);
    };
    
    const handleVariacionEosinofilosChange = (event) => {
        setVariacionEosinofilos(event.target.value);
    };
    
    const handleVariacionBasofilosChange = (event) => {
        setVariacionBasofilos(event.target.value);
    };
    
    const handleMorfologiaHematocritoChange = (event) => {
        setMorfologiaHematocrito(event.target.value);
    };
    
    const handleMorfologiaHemoglobinaChange = (event) => {
        setMorfologiaHemoglobina(event.target.value);
    };
    
    const handleMorfologiaEritrocitosChange = (event) => {
        setMorfologiaEritrocitos(event.target.value);
    };
    
    const handleMorfologiaVGMChange = (event) => {
        setMorfologiaVGM(event.target.value);
    };
    
    const handleMorfologiaCGMHChange = (event) => {
        setMorfologiaCGMH(event.target.value);
    };
    
    const handleMorfologiaReticulocitosChange = (event) => {
        setMorfologiaReticulocitos(event.target.value);
    };
    
    const handleMorfologiaTipoChange = (event) => {
        setMorfologiaTipo(event.target.value);
    };
    
    const handleMorfologiaSolidosChange = (event) => {
        setMorfologiaSolidos(event.target.value);
    };
    
    const handleMorfologiaLeucocitosChange = (event) => {
        setMorfologiaLeucocitos(event.target.value);
    };
    
    const handleMorfologiaLinfocitosChange = (event) => {
        setMorfologiaLinfocitos(event.target.value);
    };
    
    const handleMorfologiaMonocitosChange = (event) => {
        setMorfologiaMonocitos(event.target.value);
    };
    
    const handleMorfologiaEosinofilosChange = (event) => {
        setMorfologiaEosinofilos(event.target.value);
    };
    
    const handleMorfologiaBasofilosChange = (event) => {
        setMorfologiaBasofilos(event.target.value);
    };
    
    const handleMorfologiaArtefactosChange = (event) => {
        setMorfologiaArtefactos(event.target.value);
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
        setValorHematocrito("");
        setValorHemoglobina("");
        setValorEritrocitos("");
        setValorVGM("");
        setValorCGMH("");
        setValorReticulocitos("");
        setValorPlaquetas("");
        setValorSolidos("");
        setValorLeucocitos("");
        setValorNeutrofilos("");
        setValorBandas("");
        setValorLinfocitos("");
        setValorMonocitos("");
        setValorEosinofilos("");
        setValorBasofilos("");
        setValorArtefactos("");
        setVariacionHematocrito("");
        setVariacionHemoglobina("");
        setVariacionEritrocitos("");
        setVariacionVGM("");
        setVariacionCGMH("");
        setVariacionReticulocitos("");
        setVariacionPlaquetas("");
        setVariacionSolidos("");
        setVariacionLeucocitos("");
        setVariacionNeutrofilos("");
        setVariacionBandas("");
        setVariacionLinfocitos("");
        setVariacionMonocitos("");
        setVariacionEosinofilos("");
        setVariacionBasofilos("");
        setMorfologiaHematocrito("");
        setMorfologiaHemoglobina("");
        setMorfologiaEritrocitos("");
        setMorfologiaVGM("");
        setMorfologiaCGMH("");
        setMorfologiaReticulocitos("");
        setMorfologiaTipo("");
        setMorfologiaSolidos("");
        setMorfologiaLeucocitos("");
        setMorfologiaLinfocitos("");
        setMorfologiaMonocitos("");
        setMorfologiaEosinofilos("");
        setMorfologiaBasofilos("");
        setMorfologiaArtefactos("");
      };

    return (
        <div className="grid-home">
            <div className="carga" style={ cargando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Registrando...</label>
            </div>
            <div className="grid-home-1" onClick={seeExamPending}>
                <img src='../imgs/Regresar.png' className="regresar" onClick={seeExamPending}></img>
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
                                    <td className="examen-tabla-continuacion">23-HG-<input type="text" required value={caso} onChange={handleCasoChange} className="examen-input-tabla examen-input-continuacion" placeholder="Ingrese número de caso"></input></td>
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
                                            {/* <option value="" disabled selected>Seleccione especie</option> */}
                                            <option value="canino" selected>Canino</option>
                                            {/* <option value="felino">Felino</option> */}
                                            {/* <option value="equino">Equino</option> */}
                                            {/* <option value="bovino">Bovino</option> */}
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
                                    <th className="examen-segunda-version1">Mesurando</th>
                                    <th className="examen-segunda-version1">Valor</th>
                                    <th className="examen-segunda-version1">Variación</th>
                                    <th className="examen-segunda-version1">Referencia</th>
                                    <th className="examen-segunda-version1">Unidades</th>
                                    <th className="examen-segunda-version1" colspan="2">Morfología Celular</th>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Hematocrito</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorHematocrito} onChange={handleValorHematocritoChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_hematocrito_examen" id="variacion_hematocrito_examen" className="examen-input-tabla" value={variacionHematocrito} onChange={handleVariacionHematocritoChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">0.37 - 0.55</td>
                                    <td className="examen-segunda-version2">L/L</td>
                                    <td className="examen-segunda-version2">Anisocitosis</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_hematocrito_examen" id="morfologia_hematocrito_examen" className="examen-input-tabla" value={morfologiaHematocrito} onChange={handleMorfologiaHematocritoChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Hemoglobina</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorHemoglobina} onChange={handleValorHemoglobinaChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_hemoglobina_examen" id="variacion_hemoglobina_examen" className="examen-input-tabla" value={variacionHemoglobina} onChange={handleVariacionHemoglobinaChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">120 - 180</td>
                                    <td className="examen-segunda-version2">g/L</td>
                                    <td className="examen-segunda-version2">Policromasia</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_hemoglobina_examen" id="morfologia_hemoglobina_examen" className="examen-input-tabla" value={morfologiaHemoglobina} onChange={handleMorfologiaHemoglobinaChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Eritrocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorEritrocitos} onChange={handleValorEritrocitosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_eritrocitos_examen" id="variacion_eritrocitos_examen" className="examen-input-tabla" value={variacionEritrocitos} onChange={handleVariacionEritrocitosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">5.5 - 8.5</td>
                                    <td className="examen-segunda-version2">x10<sup>12</sup>/L</td>
                                    <td className="examen-segunda-version2">P. Basofílico</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_eritrocitos_examen" id="morfologia_eritrocitos_examen" className="examen-input-tabla" value={morfologiaEritrocitos} onChange={handleMorfologiaEritrocitosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">VGM</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorVGM} onChange={handleValorVGMChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_vgm_examen" id="variacion_vgm_examen" className="examen-input-tabla" value={variacionVGM} onChange={handleVariacionVGMChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">60 - 77</td>
                                    <td className="examen-segunda-version2">fL</td>
                                    <td className="examen-segunda-version2">Hipocromía</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_vgm_examen" id="morfologia_vgm_examen" className="examen-input-tabla" value={morfologiaVGM} onChange={handleMorfologiaVGMChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">CGMH</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorCGMH} onChange={handleValorCGMHChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_cgmh_examen" id="variacion_cgmh_examen" className="examen-input-tabla" value={variacionCGMH} onChange={handleVariacionCGMHChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">320 - 360</td>
                                    <td className="examen-segunda-version2">g/L</td>
                                    <td className="examen-segunda-version2">Aglutinación</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_cgmh_examen" id="morfologia_cgmh_examen" className="examen-input-tabla" value={morfologiaCGMH} onChange={handleMorfologiaCGMHChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Reticulocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorReticulocitos} onChange={handleValorReticulocitosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_reticulocitos_examen" id="variacion_reticulocitos_examen" className="examen-input-tabla" value={variacionReticulocitos} onChange={handleVariacionReticulocitosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">&lt; 60</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Rouleaux</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_reticulocitos_examen" id="morfologia_reticulocitos_examen" className="examen-input-tabla" value={morfologiaReticulocitos} onChange={handleMorfologiaReticulocitosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Plaquetas</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorPlaquetas} onChange={handleValorPlaquetasChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_plaquetas_examen" id="variacion_plaquetas_examen" className="examen-input-tabla" value={variacionPlaquetas} onChange={handleVariacionPlaquetasChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">200 - 600</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Metarrubricitos</td>
                                    <td className="examen-segunda-version2">
                                        <input type="text" required value={morfologiaTipo} onChange={handleMorfologiaTipoChange} className="examen-input-tabla" placeholder="-"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Sólidos Totales</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorSolidos} onChange={handleValorSolidosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_solidos_examen" id="variacion_solidos_examen" className="examen-input-tabla" value={variacionSolidos} onChange={handleVariacionSolidosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">60 - 75</td>
                                    <td className="examen-segunda-version2">g/L</td>
                                    <td className="examen-segunda-version2">Poiquilocitosis</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_solidos_examen" id="morfologia_solidos_examen" className="examen-input-tabla" value={morfologiaSolidos} onChange={handleMorfologiaSolidosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Leucocitos Totales</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorLeucocitos} onChange={handleValorLeucocitosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_leucocitos_examen" id="variacion_leucocitos_examen" className="examen-input-tabla" value={variacionLeucocitos} onChange={handleVariacionLeucocitosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">6.0 - 17.0</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2" colspan="2" rowspan="3">Tipo:<input type="text" required value={morfologiaLeucocitos} onChange={handleMorfologiaLeucocitosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Neutrófilos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorNeutrofilos} onChange={handleValorNeutrofilosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_neutrofilos_examen" id="variacion_neutrofilos_examen" className="examen-input-tabla" value={variacionNeutrofilos} onChange={handleVariacionNeutrofilosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">3.0 - 11.5</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Bandas</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorBandas} onChange={handleValorBandasChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_bandas_examen" id="variacion_bandas_examen" className="examen-input-tabla" value={variacionBandas} onChange={handleVariacionBandasChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">0 - 0.3</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Linfocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorLinfocitos} onChange={handleValorLinfocitosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_linfocitos_examen" id="variacion_linfocitos_examen" className="examen-input-tabla" value={variacionLinfocitos} onChange={handleVariacionLinfocitosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">1.0 - 4.8</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Neutrófilos tóxicos</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_linfocitos_examen" id="morfologia_linfocitos_examen" className="examen-input-tabla" value={morfologiaLinfocitos} onChange={handleMorfologiaLinfocitosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Monocitos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorMonocitos} onChange={handleValorMonocitosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_monocitos_examen" id="variacion_monocitos_examen" className="examen-input-tabla" value={variacionMonocitos} onChange={handleVariacionMonocitosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">0 - 1.4</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Linfocitos reactivos</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_monocitos_examen" id="morfologia_monocitos_examen" className="examen-input-tabla" value={morfologiaMonocitos} onChange={handleMorfologiaMonocitosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Eosinófilos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorEosinofilos} onChange={handleValorEosinofilosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_eosinofilos_examen" id="variacion_eosinofilos_examen" className="examen-input-tabla" value={variacionEosinofilos} onChange={handleVariacionEosinofilosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">0 - 0.9</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Mielo. Inmaduros</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_eosinofilos_examen" id="morfologia_eosinofilos_examen" className="examen-input-tabla" value={morfologiaEosinofilos} onChange={handleMorfologiaEosinofilosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Hematocrito</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorHematocrito} onChange={handleValorHematocritoChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_hematocrito_examen" id="variacion_hematocrito_examen" className="examen-input-tabla" value={variacionHematocrito} onChange={handleVariacionHematocritoChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">0.37 - 0.55</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Anisocitosis</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_hematocrito_examen" id="morfologia_hematocrito_examen" className="examen-input-tabla" value={morfologiaHematocrito} onChange={handleMorfologiaHematocritoChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Basófilos</th>
                                    <td className="examen-segunda-version2"><input type="text" required value={valorBasofilos} onChange={handleValorBasofilosChange} className="examen-input-tabla" placeholder="-"></input></td>
                                    <td className="examen-segunda-version2">
                                        <select name="variacion_basofilos_examen" id="variacion_basofilos_examen" className="examen-input-tabla" value={variacionBasofilos} onChange={handleVariacionBasofilosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="alto">Alto</option>
                                            <option value="bajo">Bajo</option>
                                            <option value="nc">NC</option>
                                        </select>
                                    </td>
                                    <td className="examen-segunda-version2">Raros</td>
                                    <td className="examen-segunda-version2">x10<sup>9</sup>/L</td>
                                    <td className="examen-segunda-version2">Microfilarias</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_basofilos_examen" id="morfologia_basofilos_examen" className="examen-input-tabla" value={morfologiaBasofilos} onChange={handleMorfologiaBasofilosChange} required>
                                            <option value="-" selected>-</option>
                                            <option value="1+">1+</option>
                                            <option value="2+">2+</option>
                                            <option value="3+">3+</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="examen-segunda-version2">Artefactos:</th>
                                    <td className="examen-segunda-version2" colspan="4"><input type="text" required value={valorArtefactos} onChange={handleValorArtefactosChange} className="examen-input-tabla" placeholder="Ninguno"></input></td>
                                    <td className="examen-segunda-version2">Macroplaquetas</td>
                                    <td className="examen-segunda-version2">
                                        <select name="morfologia_artefactos_examen" id="morfologia_artefactos_examen" className="examen-input-tabla" value={morfologiaArtefactos} onChange={handleMorfologiaArtefactosChange} required>
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
 
export default Hematologia;