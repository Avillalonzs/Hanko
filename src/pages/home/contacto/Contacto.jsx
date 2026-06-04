// contacto/Contacto.jsx

import "./contacto.css";

import {
    WHATSAPP_BASE,
    WHATSAPP_LINK,
    PHONE_FORMATTED,
    EMAIL,
    CONTACT_TEXTS,
    buildContactMessage
} from "../../../config/config.js";

export default function Contacto() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const nombre = formData.get("nombre");
        const correo = formData.get("correo");
        const telefono = formData.get("telefono");
        const mensaje = formData.get("mensaje");

        const finalMessage = buildContactMessage(
            nombre,
            correo,
            telefono,
            mensaje
        );

        window.open(
            `${WHATSAPP_BASE}?text=${encodeURIComponent(finalMessage)}`,
            "_blank"
        );
    };

    return (
        <section id="contacto" className="sec">
            <div className="sec-inner">
                <div className="sec-head">
                    <div className="tag">
                        {CONTACT_TEXTS.tag}
                    </div>

                    <h2 className="sec-title">
                        {CONTACT_TEXTS.title}{" "}
                        <em>{CONTACT_TEXTS.titleEmphasis}</em>
                    </h2>
                </div>

                <div className="contact-layout">
                    <div className="contact-info">
                        <h3 className="contact-info-title">
                            {CONTACT_TEXTS.description}{" "}
                            <em>{CONTACT_TEXTS.descriptionEmphasis}</em>
                        </h3>

                        <div className="info-list">
                            <div className="info-item">
                                <span>📍</span>
                                {CONTACT_TEXTS.location}
                            </div>

                            <div className="info-item">
                                <span>📞</span>

                                <a
                                    href={WHATSAPP_BASE}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {PHONE_FORMATTED}
                                </a>
                            </div>

                            <div className="info-item">
                                <span>✉️</span>

                                <a href={`mailto:${EMAIL}`}>
                                    {EMAIL}
                                </a>
                            </div>

                            <div className="info-item">
                                <span>🕒</span>
                                {CONTACT_TEXTS.schedule}
                            </div>
                        </div>

                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="contact-wa-btn"
                        >
                            {CONTACT_TEXTS.buttons.whatsapp}
                        </a>
                    </div>

                    <form
                        className="contact-form-card"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="nombre"
                            placeholder={
                                CONTACT_TEXTS.form.namePlaceholder
                            }
                            required
                        />

                        <input
                            type="email"
                            name="correo"
                            placeholder={
                                CONTACT_TEXTS.form.emailPlaceholder
                            }
                            required
                        />

                        <input
                            type="text"
                            name="telefono"
                            placeholder={
                                CONTACT_TEXTS.form.phonePlaceholder
                            }
                        />

                        <textarea
                            name="mensaje"
                            placeholder={
                                CONTACT_TEXTS.form.messagePlaceholder
                            }
                            required
                        />

                        <button type="submit">
                            {CONTACT_TEXTS.buttons.submit}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}