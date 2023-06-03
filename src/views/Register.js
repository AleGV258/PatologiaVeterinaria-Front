import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

function Register() {
    const API = process.env.REACT_APP_API_URL;
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
            rol: "USER_ROLE"
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
            const url = API + "/api/users/";
            fetch(url, requestOptions)
                .then(response => {
                    if (response.ok) {
                        setCargando(false);
                        alert("Usuario registrado correctamente, ¡Inicia Sesión!")
                        navigate("/login");
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
                .catch(error => console.log('error', error));
        }else{
            setCargando(false);
            alert("Las contraseñas no coinciden. ¡Intenta Nuevamente!")
        }
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
        <div className="grid">
            <div className="carga" style={ cargando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Registrando...</label>
            </div>
            <div className="grid-1">
                <form className="form-register" onSubmit={handleSubmit}>
                    <label className="form-titulo">¡Registrate!</label><br></br>

                    <label for="correo_electronico" className="form-label">Correo Electrónico:</label><br></br>
                    <input type="email" id="correo_electronico" name="correo_electronico" placeholder="Correo Electrónico" className="form-register-input" required value={correo} onChange={handleCorreoChange} ></input><br></br>

                    <label for="usuario" className="form-label">Nombre de Usuario:</label><br></br>
                    <input type="text" id="usuario" name="usuario" placeholder="Nombre de Usuario" className="form-register-input" required value={usuario} onChange={handleUsuarioChange} ></input><br></br>

                    <label for="contrasena" className="form-label">Contraseña:</label><br></br>
                    <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" className="form-register-input" required  value={contrasena} onChange={handleContrasenaChange} ></input><br></br>

                    <label for="contrasena_repetir" className="form-label">Repetir Contraseña:</label><br></br>
                    <input type="password" id="contrasena_repetir" name="contrasena_repetir" placeholder="Repetir Contraseña" className="form-register-input" required value={contrasenaRepetir} onChange={handleContrasenaRepetirChange} ></input><br></br>

                    <Link to="/login" className="form-link">
                        <a className="form-link">Ya tienes cuenta, ¡Inicia Sesión!</a><br></br>
                    </Link>

                    <input type="submit" value="Registrar"></input><br></br>
                </form>

                <div className="cuadrado-grande cuad-9"></div>
                <div className="cuadrado-mediano cuad-10"></div>
                <div className="cuadrado-grande cuad-11"></div>
                <div className="cuadrado-chico cuad-12"></div>
                <div className="cuadrado-mediano cuad-13"></div>
                <div className="cuadrado-mediano cuad-14"></div>
                <div className="cuadrado-chico cuad-15"></div>
                <div className="cuadrado-grande cuad-16"></div>
            </div>
            <div className="grid-2">
                <div className="triangulo-superior tri-sup-grande">
                </div>
                <div className="triangulo-superior tri-sup-mediano">
                </div>
                <div className="triangulo-superior tri-sup-chico">
                </div>
            </div>
            <div className="grid-3"></div>
            <div className="grid-4"></div>
            <div className="grid-5"></div>
            <div className="grid-6"></div>
            <div className="grid-7">
                <div className="triangulo-inferior tri-inf-grande">
                </div>
                <div className="triangulo-inferior tri-inf-mediano">
                </div>
                <div className="triangulo-inferior tri-inf-chico">
                </div>
            </div>
        </div>
    );
}
 
export default Register;