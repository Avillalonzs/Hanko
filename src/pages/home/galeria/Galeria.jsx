// galeria/Galeria.jsx

import { useState } from "react";
import "./galeria.css";

export default function Galeria() {
    const [modalImage, setModalImage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const galleryItems = [
        {
            title: "Penthouse Vitacura",
            subtitle: "Línea Doble Magistral",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=8",
            full: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400",
            className: "wide",
        },
        {
            title: "Residencia Lo Barnechea",
            subtitle: "Minimalist Screen",
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800",
            full: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400",
            className: "",
        },
        {
            title: "Master Suite Las Condes",
            subtitle: "Blackout Armonía",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
            full: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400",
            className: "tall",
        },
        {
            title: "Sala de Estar Providencia",
            subtitle: "Zebra Elegance",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
            full: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400",
            className: "",
        },
        {
            title: "Oficinas Corporativas El Golf",
            subtitle: "Screen Técnico",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
            full: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400",
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