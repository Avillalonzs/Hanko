// src/components/whatsapp/WhatsAppFloat.jsx

import "./whatsappFloat.css";

import {
    WHATSAPP_LINK,
    CONTACT_TEXTS
} from "../../config/config.js";

export default function WhatsAppFloat() {
    return (
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="wa-float"
            aria-label="WhatsApp"
        >
            <span className="wa-icon">
                💬
            </span>

            <span>
                {CONTACT_TEXTS.buttons.whatsapp}
            </span>
        </a>
    );
}