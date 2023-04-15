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

class Home extends Component {
    // state = {  }
    render() { 
        return (
            <div className="grid">
                <div className="grid-1">
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
 
export default Home;