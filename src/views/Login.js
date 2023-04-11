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

class Login extends Component {
    // state = {  }
    render() { 
        return (
            <div className="grid">
                <div className="grid-1">
                    <form action="" method="POST" className="form-login">
                        <label className="form-titulo">¡Bienvenida/o!</label><br></br>

                        <label for="correo_electronico" className="form-label">Correo Electrónico:</label><br></br>
                        <input type="email" id="correo_electronico" name="correo_electronico" placeholder="Correo Electrónico"></input><br></br>

                        <label for="contrasena" className="form-label">Contraseña:</label><br></br>
                        <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña"></input><br></br>

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
 
export default Login;