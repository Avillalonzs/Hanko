// config/config.js

// ===============================
// 🌐 INFORMACIÓN GENERAL
// ===============================
export const COMPANY_NAME = "ROLLER HANKO";
export const WEBSITE_URL = "https://rollerhanko.cl";

// ===============================
// 📞 CONTACTO
// ===============================
export const PHONE = "56954468506";
export const PHONE_FORMATTED = "+56 9 5446 8506";

export const EMAIL = "contacto@rollerhanko.cl";

// ===============================
// 💬 WHATSAPP
// ===============================
export const WHATSAPP_BASE = `https://wa.me/${PHONE}`;

export const WHATSAPP_DEFAULT_MESSAGE =
    "Hola, necesito información sobre sus servicios";

export const WHATSAPP_LINK =
    `${WHATSAPP_BASE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

// ===============================
// 🌐 REDES SOCIALES
// ===============================
export const FACEBOOK_URL =
    "https://www.facebook.com/cortinajeshanko";

export const INSTAGRAM_URL =
    "https://www.instagram.com/hanko_cortinajes/";

// ===============================
// 📝 TEXTOS CONTACTO
// ===============================
export const CONTACT_TEXTS = {
    tag:
        "Atención personalizada y asesoría experta para su proyecto.",

    title:
        "Solicite Información sobre su",

    titleEmphasis:
        "Proyecto",

    description:
        "Contáctese con nosotros, queremos ayudarle a crear un espacio único y funcional",

    descriptionEmphasis:
        "para su proyecto",

    location:
        "Santiago, Chile",

    schedule:
        "Lunes a Viernes · 09:00 — 18:00",

    form: {
        namePlaceholder:
            "Nombre completo",

        emailPlaceholder:
            "Correo electrónico",

        phonePlaceholder:
            "Teléfono de contacto",

        messagePlaceholder:
            "Cuéntenos sobre su proyecto...",
    },

    buttons: {
        submit:
            "Enviar Solicitud",

        whatsapp:
            "WhatsApp Directo",
    }
};

// ===============================
// ✉️ GENERADOR MENSAJE CONTACTO
// ===============================
export const buildContactMessage = (
    nombre,
    email,
    telefono,
    mensaje
) => `
Hola ${COMPANY_NAME}, contacto desde el sitio web.

📌 Nombre: ${nombre}
📧 Email: ${email}
📞 Teléfono: ${telefono}

📝 Proyecto:
${mensaje}
`;

// ===============================
// 🧮 CONFIGURACIÓN COTIZADOR
// ===============================
export const COTIZADOR_CONFIG = {
    title:
        "Estimador de Inversión por m²",

    projectTypes: [
        {
            label: "Screen",
            value: 35000
        },
        {
            label: "Blackout",
            value: 45000
        },
        {
            label: "Zebra Duo",
            value: 50000
        },
        {
            label: "Dobles",
            value: 65000
        }
    ],

    labels: {
        projectType:
            "Tipo de Cortina",

        surface:
            "Superficie Estimada (m²)",
    },

    placeholders: {
        surface:
            "Ej: 120",
    },

    result: {
        title:
            "Estimación de Inversión",

        note:
            "* Valor referencial sujeto a validación técnica.",
    }
};