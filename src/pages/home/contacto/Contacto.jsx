// contacto/Contacto.jsx

import "./contacto.css";

export default function Contacto() {
    return (
        <section id="contacto" className="sec">
            <div className="sec-inner">
                <div className="sec-head">
                    <div className="tag">
                        Atención personalizada y asesoría experta para su proyecto.
                    </div>

                    <h2 className="sec-title">
                        Solicite Información sobre su{" "}
                        <em>Proyecto</em>
                    </h2>

                </div>

                <div className="contact-layout">
                    <div className="contact-info">
                        <h3 className="contact-info-title">
                            Contáctese con nosotros, queremos ayudarle a
                            crear un espacio único y funcional <em>para su proyecto</em>
                        </h3>

                        <div className="info-list">
                            <div className="info-item">
                                <span>📍</span>
                                Santiago, Chile
                            </div>

                            <div className="info-item">
                                <span>📞</span>
                                +56 9 5249 9961
                            </div>

                            <div className="info-item">
                                <span>✉️</span>
                                contacto@rollerhanko.cl
                            </div>

                            <div className="info-item">
                                <span>🕒</span>
                                Lunes a Viernes · 09:00 — 18:00
                            </div>
                        </div>

                        <a
                            href="https://wa.me/56952499961"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-wa-btn"
                        >
                            WhatsApp Directo
                        </a>
                    </div>

                    <form className="contact-form-card">
                        <input
                            type="text"
                            placeholder="Nombre completo"
                        />

                        <input
                            type="email"
                            placeholder="Correo electrónico"
                        />

                        <input
                            type="text"
                            placeholder="Teléfono de contacto"
                        />

                        <textarea placeholder="Cuéntenos sobre su proyecto..." />

                        <button type="submit">
                            Enviar Solicitud
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}