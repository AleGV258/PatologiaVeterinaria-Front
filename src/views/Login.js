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

function Login() {
    const [cargando, setCargando] = useState(false);
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [autentificacion, setAutentificacion] = useState(false);
    const navigate = useNavigate();
    

    useEffect(() => {
        const autentificacionGuardada = localStorage.getItem("autentificacion");
        if (autentificacionGuardada) {
            setAutentificacion(autentificacionGuardada);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario
        setCargando(true);

        const raw = {
            correo: correo,
            password: contrasena
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("https://api-arquitecturas-ti.vercel.app/api/auth/login/", requestOptions)
        .then(response => {
            if (response.ok) {
                setAutentificacion(true);
                return response.json();
            } else {
                setCargando(false);
                alert("El usuario y la contraseña no coinciden. ¡Intenta Nuevamente!")
                throw new Error('La solicitud Fetch no se realizó correctamente');
            }
        })
        .then(result => {
            // console.log("Resultado: " + JSON.stringify(result))
            var user = result.user.nombre
            setCorreo(result.user.correo)
            return user
        }).then(user => {
            localStorage.setItem("autentificacion", autentificacion);
            localStorage.setItem("usuario", user);
            localStorage.setItem("correo", correo);
            return user
        })
        .then(() => {
            setCargando(false);
            document.body.style.overflowY = "visible";
            navigate("/home");
        })
        .catch(error => console.log('error', error));
    }
    
    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };

    const handleContrasenaChange = (event) => {
        setContrasena(event.target.value);
    };

    // useEffect(() => {
    //     console.log("autentificacion actualizada:", autentificacion);
    // }, [autentificacion]);

    return (
        <div className="grid">
            <div className="carga" style={ cargando ? { display: "grid"} : {display: "none"}}>
                <div className="pulsar"></div>
                <label className="carga-texto">Conectando...</label>
            </div>
            <div className="grid-1">
                <form className="form-login" onSubmit={handleSubmit}>
                    <label className="form-titulo">¡Bienvenida/o!</label><br></br>

                    <label for="correo_electronico" className="form-label">Correo Electrónico:</label><br></br>
                    <input type="email" required id="correo_electronico" name="correo_electronico" placeholder="Correo Electrónico" value={correo} onChange={handleCorreoChange} ></input><br></br>

                    <label for="contrasena" className="form-label">Contraseña:</label><br></br>
                    <input type="password" required id="contrasena" name="contrasena" placeholder="Contraseña" value={contrasena} onChange={handleContrasenaChange} ></input><br></br>

                    <Link to="/register" className="form-link">
                        <a>No tienes cuenta, ¡Registrate!</a><br></br>
                    </Link>

                    <input type="submit" value="Ingresar"></input><br></br>
                </form>
                
                <div className="cuadrado-grande cuad-1"></div>
                <div className="cuadrado-mediano cuad-2"></div>
                <div className="cuadrado-mediano cuad-3"></div>
                <div className="cuadrado-chico cuad-4"></div>
                <div className="cuadrado-grande cuad-5"></div>
                <div className="cuadrado-grande cuad-6"></div>
                <div className="cuadrado-mediano cuad-7"></div>
                <div className="cuadrado-chico cuad-8"></div>
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
 
export default Login;