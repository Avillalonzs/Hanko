// galeria/Galeria.jsx
import img1 from "../../../assets/productos/Imagen1.webp";
import img4 from "../../../assets/productos/Imagen4.webp";
import img5 from "../../../assets/productos/Imagen5.webp";
import img6 from "../../../assets/productos/Imagen6.webp";
import img7 from "../../../assets/productos/Imagen7.webp";
import { useState } from "react";
import "./galeria.css";

export default function Galeria() {
    const [modalImage, setModalImage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const galleryItems = [
        {
        title: "Penthouse Vitacura",
        subtitle: "Línea Doble Magistral",
        image: img1,
        full: img1,
        className: "wide",
    },
    {
        title: "Residencia Lo Barnechea",
        subtitle: "Minimalist Screen",
        image: img4,
        full: img4,
        className: "",
    },
    {
        title: "Master Suite Las Condes",
        subtitle: "Blackout Armonía",
        image: img5,
        full: img5,
        className: "tall",
    },
    {
        title: "Sala de Estar Providencia",
        subtitle: "Zebra Elegance",
        image: img6,
        full: img6,
        className: "",
    },
    {
        title: "Oficinas Corporativas El Golf",
        subtitle: "Screen Técnico",
        image: img7,
        full: img7,
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