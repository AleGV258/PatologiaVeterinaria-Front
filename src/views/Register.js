import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GlobalStyle.css'

/* 
    Materia: Arquitectura de TI Empresariales
    Integrantes: 
        - Salazar Castillo Guadalupe - 261540
        - Jiménez Elizalde Andrés - 259678
        - León Paulín Daniel - 260541
        - García Vargas Michell Alejandro - 259663
*/

class Register extends Component {
    // state = {  }
    render() { 
        return (
            <div className="grid">
                <div className="grid-1">
                    <form action="" method="POST" className="form-register">
                        <label className="form-titulo">¡Registrate!</label><br></br>

                        <label for="correo_electronico" className="form-label">Correo Electrónico:</label><br></br>
                        <input type="email" id="correo_electronico" name="correo_electronico" placeholder="Correo Electrónico" className="form-register-input" required></input><br></br>

                        <label for="usuario" className="form-label">Nombre de Usuario:</label><br></br>
                        <input type="text" id="usuario" name="usuario" placeholder="Nombre de Usuario" className="form-register-input" required></input><br></br>

                        <label for="contrasena" className="form-label">Contraseña:</label><br></br>
                        <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" className="form-register-input" required></input><br></br>

                        <label for="contrasena_repetir" className="form-label">Repetir Contraseña:</label><br></br>
                        <input type="password" id="contrasena_repetir" name="contrasena_repetir" placeholder="Repetir Contraseña" className="form-register-input" required></input><br></br>

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
                    <div class="triangulo-superior tri-sup-grande">
                    </div>
                    <div class="triangulo-superior tri-sup-mediano">
                    </div>
                    <div class="triangulo-superior tri-sup-chico">
                    </div>
                </div>
                <div className="grid-3"></div>
                <div className="grid-4"></div>
                <div className="grid-5"></div>
                <div className="grid-6"></div>
                <div className="grid-7">
                    <div class="triangulo-inferior tri-inf-grande">
                    </div>
                    <div class="triangulo-inferior tri-inf-mediano">
                    </div>
                    <div class="triangulo-inferior tri-inf-chico">
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Register;