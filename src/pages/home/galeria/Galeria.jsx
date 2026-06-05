// galeria/Galeria.jsx
import img1 from "../../../assets/productos/Imagen1.webp";
import img4 from "../../../assets/productos/Imagen4.webp";
import img6 from "../../../assets/productos/Imagen6.webp";
import img8 from "../../../assets/productos/Imagen8.webp";
import Dobles from "../../../assets/productos/Duplex.webp";
import { useState } from "react";
import "./Galeria.css";

export default function Galeria() {
    const [modalImage, setModalImage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const galleryItems = [
        {
        title: "House Chicureo",
        subtitle: "Línea Zebra Duo",
        image: img1,
        full: img1,
        className: "wide",
    },
    {
        title: "Duplex Las Condes",
        subtitle: "Linea Zebra Duo",
        image: img4,
        full: img4,
        className: "",
    },
    {
        title: "Oficinas Corporativas Providencia",
        subtitle: "Blackout",
        image: img6,
        full: img6,
        className: "tall",
    },
    {
        title: "Terraza Santiago",
        subtitle: "Línea Screen",
        image: img8,
        full: img8,
        className: "",
    },
    {
        title: "Home Office Huechuraba",
        subtitle: "Dobles",
        image: Dobles,
        full: Dobles,
        className: "wide",
    },
    ];

    const openModal = (src) => {
        setModalImage(src);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImage("");
    };

    return (
        <>
            <section id="galeria" className="sec">
                <div className="sec-inner">
                    <div className="sec-head">
                        <div className="tag">
                            Espacios Transformados
                        </div>

                        <h2 className="sec-title">
                            Casas que Inspiran <em>Distinción</em>
                        </h2>

                        <p className="sec-lead">
                            Proyectos residenciales y corporativos reales
                            ejecutados recientemente en los sectores más
                            exclusivos de la capital.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        {galleryItems.map((item, index) => (
                            <div
                                key={index}
                                className={`gallery-item ${item.className}`}
                                onClick={() => openModal(item.full)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                                <div className="gallery-overlay">
                                    <span>{item.subtitle}</span>
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div
                className={`modal ${modalOpen ? "active" : ""}`}
                onClick={closeModal}
            >
                <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="modal-close"
                        onClick={closeModal}
                    >
                        ×
                    </button>

                    <img
                        src={modalImage}
                        alt="Galería"
                    />
                </div>
            </div>
        </>
    );
}