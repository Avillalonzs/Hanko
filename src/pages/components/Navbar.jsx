// src/components/navbar/Navbar.jsx

import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className="navbar">
                <a href="/" className="logo-wrap">
                    <div className="logo-icon">
                        <div className="logo-stripes">
                            <span className="ls"></span>
                            <span className="ls"></span>
                            <span className="ls"></span>
                        </div>
                    </div>

                    <div className="logo-text">
                        <span className="logo-sub">
                            Roller
                        </span>

                        <span className="logo-name">
                            Hanko
                        </span>
                    </div>
                </a>

                {/* DESKTOP */}
                <ul className="nav-links">
                    <li>
                        <a href="#hero">Inicio</a>
                    </li>

                    <li>
                        <a href="#productos">
                            Colecciones
                        </a>
                    </li>

                    <li>
                        <a href="#galeria">
                            Portafolio
                        </a>
                    </li>

                    <li>
                        <a href="#cotizador">
                            Cotizador
                        </a>
                    </li>

                    <li>
                        <a href="#contacto">
                            Contacto
                        </a>
                    </li>
                </ul>

                <a
                    href="#contacto"
                    className="btn-nav"
                >
                    Agendar Proyecto
                </a>

                {/* HAMBURGER */}
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>

            {/* MOBILE MENU */}
            <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
                <a href="#hero" onClick={closeMenu}>
                    Inicio
                </a>

                <a href="#productos" onClick={closeMenu}>
                    Colecciones
                </a>

                <a href="#galeria" onClick={closeMenu}>
                    Portafolio
                </a>

                <a href="#cotizador" onClick={closeMenu}>
                    Cotizador
                </a>

                <a href="#contacto" onClick={closeMenu}>
                    Contacto
                </a>

                <a
                    href="https://wa.me/56954468506"
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-wa-btn"
                >
                    WhatsApp Directo
                </a>
            </div>
        </>
    );
}