import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
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
    constructor(props) {
        super(props);
        this.state = {
          correo: "",
          contrasena: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCorreoChange = this.handleCorreoChange.bind(this);
        this.handleContrasenaChange = this.handleContrasenaChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario

        var autentificacion = false;

        const raw = {
            correo: this.state.correo,
            password: this.state.contrasena
        };

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        function fetchData() {
            return new Promise((resolve, reject) => {
                fetch("https://api-arquitecturas-ti.vercel.app/api/auth/login/", requestOptions)
                    .then(response => {
                        if (response.ok) {
                            autentificacion = true;
                            return response.text();
                        } else {
                            throw new Error('La solicitud Fetch no se realizó correctamente');
                        }
                    })
                    .then(result => {
                        console.log("Resultado: " + result)
                        resolve(autentificacion);
                    })
                    .catch(error => console.log('error', error));
            });
        }

        // Llamada a la función fetchData
        fetchData().then(autentificacion => {
            console.log('Autentificacion:', autentificacion);
            // ---------------------------------- aqui
        }).catch(error => {
            console.error('Error en fetchData:', error);
        });
    }
    
    handleCorreoChange(event) {
        this.setState({ correo: event.target.value });
    }

    handleContrasenaChange(event) {
        this.setState({ contrasena: event.target.value });
    }

    render() { 
        return (
            <div className="grid">
                <div className="grid-1">
                    <form className="form-login" onSubmit={this.handleSubmit}>
                        <label className="form-titulo">¡Bienvenida/o!</label><br></br>

                        <label for="correo_electronico" className="form-label">Correo Electrónico:</label><br></br>
                        <input type="email" id="correo_electronico" name="correo_electronico" placeholder="Correo Electrónico" value={this.state.correo} onChange={this.handleCorreoChange} ></input><br></br>

                        <label for="contrasena" className="form-label">Contraseña:</label><br></br>
                        <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña"  value={this.state.contrasena} onChange={this.handleContrasenaChange} ></input><br></br>

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