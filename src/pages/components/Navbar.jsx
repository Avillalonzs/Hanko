// src/components/navbar/Navbar.jsx
import "./Navbar.css";


function Navbar() {
    return (
        <nav className="navbar" id="navbar">
            <a href="#hero" className="logo-wrap">
                <div className="logo-icon">
                    <div className="logo-stripes">
                        <div className="ls"></div>
                        <div className="ls"></div>
                        <div className="ls"></div>
                    </div>
                </div>

                <div className="logo-text">
                    <span className="logo-sub">Roller</span>
                    <span className="logo-name">Hanko</span>
                </div>
            </a>

            <ul className="nav-links">
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#productos">Colecciones</a></li>
                <li><a href="#galeria">Portafolio</a></li>
                <li><a href="#testimonios">Clientes</a></li>
                <li><a href="#cotizador">Cotizador</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>

            <a href="#cotizador" className="btn-nav">
                Agendar Proyecto
            </a>
        </nav>
    );
}

export default Navbar;