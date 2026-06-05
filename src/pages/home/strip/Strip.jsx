// strip/Strip.jsx

import "../strip/Strip.css";

import {
    WHATSAPP_LINK,
} from "../../../config/config";

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
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-strip"
            >
                Agendar Visita Exclusiva
            </a>
        </div>
    );
}