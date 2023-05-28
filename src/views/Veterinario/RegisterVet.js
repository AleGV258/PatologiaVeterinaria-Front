import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

function RegisterVet() {
    const [cargando, setCargando] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [contrasenaRepetir, setContrasenaRepetir] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario
        setCargando(true);

        const raw = {
            nombre: usuario,
            correo: correo,
            password: contrasena,
            rol: "VETERINARIO_ROLE"
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        if(contrasenaRepetir == contrasena){
            fetch("https://api-arquitecturas-ti.vercel.app/api/users/", requestOptions)
                .then(response => {
                    if (response.ok) {
                        setCargando(false);
                        alert("Usuario registrado correctamente, ¡Inicia Sesión!")
                        navigate("/home-vet");
                        return response.text();
                    } else if(contrasena.length < 6){
                        setCargando(false);
                        alert("La contraseña es demasiado corta, deben ser al menos seis caracteres. ¡Intenta Nuevamente!");
                    } else {
                        setCargando(false);
                        alert("Usuario no registrado. ¡Intenta Nuevamente!")
                        throw new Error('La solicitud Fetch no se realizó correctamente');
                    }
                })
                .then(result => console.log("Resultado: " + result))
                .catch(error => console.log('error', error));
        } else {    
            setCargando(false);
            alert("Las contraseñas no coinciden. ¡Intenta Nuevamente!");
        }
    }
    
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

    const handleUsuarioChange = (event) => {
        setUsuario(event.target.value);
    };

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };

    const handleContrasenaChange = (event) => {
        setContrasena(event.target.value);
    };

    const handleContrasenaRepetirChange = (event) => {
        setContrasenaRepetir(event.target.value);
    };

    return (
        <div className="grid-home">
            <div className="carga" style={ cargando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Registrando...</label>
            </div>
            <div className="grid-home-1" onClick={returnHome}>
                <label className="titulo-usuario">Registra un Nuevo Veterinario</label>
            </div>
            <div className="grid-home-2">
                <div>
                    <button onClick={returnHome} className="moreOption-button" title="Regresar Página Principal"><img src='../imgs/Home.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeExams} className="moreOption-button" title="Exámenes Pendientes/Completados"><img src='../imgs/Examen.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeReport} className="moreOption-button" title="Informes"><img src='../imgs/Informe.png' className="moreOption-image"></img></button><br></br>
                    <button onClick={seeRegisterVet} className="moreOption-button-selected" title="Agregar Nuevos Veterinarios"><img src='../imgs/Agregar-Veterinario.png' className="moreOption-image"></img></button>
                </div>
                <button onClick={logoutUser} className="logout-button logout-button-veterinario">Cerrar <br className="break-point"></br>Sesión</button>
            </div>
            <div className="grid-home-3">
                <label className="titulo-examen">Nuevo Veterinario:</label>

                <div className="veterinario-registro">
                    <form className="form-register" onSubmit={handleSubmit}>
                        <label className="form-titulo">¡Registra a un Veterinario!</label><br></br>

                        <label for="correo_electronico" className="form-label">Correo Electrónico:</label><br></br>
                        <input type="email" id="correo_electronico" name="correo_electronico" placeholder="Correo Electrónico" className="form-register-input" required value={correo} onChange={handleCorreoChange} ></input><br></br>

                        <label for="usuario" className="form-label">Nombre de Usuario:</label><br></br>
                        <input type="text" id="usuario" name="usuario" placeholder="Nombre de Usuario" className="form-register-input" required value={usuario} onChange={handleUsuarioChange} ></input><br></br>

                        <label for="contrasena" className="form-label">Contraseña:</label><br></br>
                        <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" className="form-register-input" required  value={contrasena} onChange={handleContrasenaChange} ></input><br></br>

                        <label for="contrasena_repetir" className="form-label">Repetir Contraseña:</label><br></br>
                        <input type="password" id="contrasena_repetir" name="contrasena_repetir" placeholder="Repetir Contraseña" className="form-register-input" required value={contrasenaRepetir} onChange={handleContrasenaRepetirChange} ></input><br></br><br></br>

                        <input type="submit" value="Registrar"></input><br></br>
                    </form>                 
                </div>

                <br></br>
                
            </div>
        </div>
    );
}
 
export default RegisterVet;