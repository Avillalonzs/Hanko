// src/data/productos.js
import screenImg from "../assets/productos/screen.webp";
import imagen3Img from "../assets/productos/Imagen3.webp";
import imagen10Img from "../assets/productos/Imagen10.webp";
import imagen11Img from "../assets/productos/Imagen11.webp";

const productos = [
    {
        badge: "Filtro Solar Optimo",
        image: screenImg,
        alt: "Roller Screen Premium",
        title: "Línea Screen",
        description:
            "Control térmico y protección UV sin perder las vistas exteriores ni la iluminación natural.",
        price: "$35.000",
        unit: "/ m² instalado",
    },

    {
        badge: "Opacidad Absoluta",
        image: imagen3Img,
        alt: "Blackout Arquitectónico",
        title: "Blackout",
        description:
            "Aislamiento lumínico y térmico total. Bloqueo hermético ideal para el confort y descanso.",
        price: "$45.000",
        unit: "/ m² instalado",
    },

    {
        badge: "Dinamismo Visual",
        image: imagen10Img,
        alt: "Zebra Roller Elegance",
        title: "Zebra Duo",
        description:
            "El intercalado de franjas permite regular la transición de luz de forma natural.",
        price: "$50.000",
        unit: "/ m² instalado",
    },

    {
        badge: "Sistemas Duales",
        image: imagen11Img,
        alt: "Doble Roller Hermitage",
        title: "Dobles",
        description:
            "Máxima versatilidad combinando Screen + Blackout obteniendo luz y privacidad en un mismo espacio.",
        price: "$65.000",
        unit: "/ m² instalado",
    },
];

export default productos;