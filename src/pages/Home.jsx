// home/Home.jsx

import "./Home.css";
import Productos from "../pages/home/productos/Productos";
import Strip from "../pages/home/strip/Strip";
import Galeria from "../pages/home/galeria/Galeria";
import Cotizador from "../pages/home/cotizador/Cotizador.jsx";
import Contacto from "../pages/home/contacto/Contacto";
import { StaticRouterProvider } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section id="hero">
                <div className="hero-bg" id="heroBg"></div>

                <div className="hero-content">
                    <div className="hero-eyebrow">
                        Exclusividad & Diseño · Santiago
                    </div>

                    <h1 className="hero-title">
                        Cortinas
                        <br />
                        <em>Roller Premium</em>
                        <br />
                        A Medida.
                    </h1>

                    <p className="hero-sub">
                        Hanko es nuestro sello personal. Más de 20 años de
                        experiencia vistiendo los espacios más exigentes.
                    </p>

                    <div className="hero-btns">
                        <a href="#cotizador" className="btn-primary">
                            Diseñar mi presupuesto
                        </a>

                        <a href="#productos" className="btn-secondary">
                            Explorar Líneas
                        </a>
                    </div>
                </div>

                <div className="hero-trust">
                    <div className="trust-badge">
                        <strong>20+</strong>
                        <span>Años de Legado</span>
                    </div>

                    <div className="trust-badge">
                        <strong>2K+</strong>
                        <span>Clientes</span>
                    </div>

                    <div className="trust-badge">
                        <strong>3 Años</strong>
                        <span>Garantía Real</span>
                    </div>
                </div>
            </section>

            <Productos />
            <Strip />
            <Galeria />

            <Cotizador />
            <Contacto />

        </>
    );
}