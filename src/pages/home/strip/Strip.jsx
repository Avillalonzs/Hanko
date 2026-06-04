// strip/Strip.jsx

import "./strip.css";

export default function Strip() {
    return (
        <div className="strip">
            <div className="strip-text">
                <h2>
                    Cotiza con un experto <em>Sin Costo</em>
                </h2>

                <p>
                    Asistimos a su propiedad para la toma exacta de medidas y
                    asesoría técnica de telas y espacios.
                </p>
            </div>

            <a
                href="https://wa.me/56952499961"
                target="_blank"
                rel="noreferrer"
                className="btn-strip"
            >
                Agendar Visita Exclusiva
            </a>
        </div>
    );
}