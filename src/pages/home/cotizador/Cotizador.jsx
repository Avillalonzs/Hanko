// cotizador/Cotizador.jsx

import { useState } from "react";
import "./cotizador.css";

export default function Cotizador() {
    const [tipo, setTipo] = useState(35000);
    const [ambiente, setAmbiente] = useState("");
    const [ancho, setAncho] = useState("");
    const [alto, setAlto] = useState("");
    const [promoInput, setPromoInput] = useState("");
    const [promo, setPromo] = useState(false);
    const [promoMsg, setPromoMsg] = useState(
        "Use el código HANKOWEB para acceder a un 10% de cortesía digital."
    );
    const [items, setItems] = useState([]);

    const formatCLP = (v) => "$" + v.toLocaleString("es-CL");

    const visualOptions = [
        {
            id: "visual_screen",
            value: 35000,
            label: "Screen",
            icon: "☀️",
        },
        {
            id: "visual_blackout",
            value: 45000,
            label: "Blackout",
            icon: "🌙",
        },
        {
            id: "visual_zebra",
            value: 50000,
            label: "Zebra",
            icon: "🟰",
        },
        {
            id: "visual_doble",
            value: 65000,
            label: "Doble",
            icon: "🧩",
        },
    ];

    const getTipoText = (precio) => {
        if (precio === 45000) return "Blackout Elite";
        if (precio === 50000) return "Zebra Luxury";
        if (precio === 65000) return "Doble Magistral";
        return "Línea Screen";
    };

    const agregarCotizacion = () => {
        if (
            !ambiente.trim() ||
            !ancho ||
            !alto ||
            ancho <= 0 ||
            alto <= 0
        ) {
            alert(
                "Por favor, defina el nombre del espacio y dimensiones válidas."
            );
            return;
        }

        const area =
            (parseFloat(ancho) / 100) *
            (parseFloat(alto) / 100);

        const subtotal = Math.round(area * tipo);

        const nuevoItem = {
            ambiente,
            tipoText: getTipoText(tipo),
            ancho,
            alto,
            subtotal,
        };

        setItems([...items, nuevoItem]);

        setAmbiente("");
        setAncho("");
        setAlto("");
    };

    const eliminarItem = (index) => {
        const nuevos = [...items];
        nuevos.splice(index, 1);
        setItems(nuevos);
    };

    const subtotal = items.reduce(
        (acc, item) => acc + item.subtotal,
        0
    );

    const total = promo
        ? Math.round(subtotal * 0.9)
        : subtotal;

    const aplicarPromo = () => {
        const code = promoInput.trim().toUpperCase();

        if (code === "HANKOWEB") {
            setPromo(true);

            setPromoMsg(
                "✔ El código de cortesía del 10% OFF ha sido aplicado al manifiesto."
            );
        } else {
            setPromo(false);

            setPromoMsg(
                "✗ Código inválido. Valide su invitación digital."
            );
        }
    };

    const enviarWhatsApp = () => {
        if (!items.length) {
            alert(
                "Añada al menos un elemento para compilar el manifiesto."
            );
            return;
        }

        let msg =
            "🏠 *Manifiesto de Arquitectura · Atelier Roller Hanko*\n\n";

        items.forEach((it, i) => {
            msg += `${i + 1}. *${it.ambiente}* — ${it.tipoText}\n`;
            msg += `   Dimensiones: ${it.ancho}×${it.alto} cm → Inversión: ${formatCLP(
                it.subtotal
            )}\n`;
        });

        if (promo) {
            msg +=
                "\n✨ Beneficio exclusivo 10% (HANKOWEB) aplicado.";
        }

        msg += `\n\n*VALOR ESTIMADO TOTAL: ${formatCLP(
            total
        )}*`;

        window.open(
            "https://wa.me/56952499961?text=" +
            encodeURIComponent(msg),
            "_blank"
        );
    };

    return (
        <section id="cotizador" className="sec">
            <div className="sec-inner">
                <div className="sec-head">
                    <div className="tag">
                        Simulador Inteligente instantáneo
                    </div>

                    <h2 className="sec-title">
                        Configure su <em>Proyecto</em>
                    </h2>

                    <p className="sec-lead">
                        Calcule un valor de referencia transparente
                        ajustado a los m² reales de su arquitectura.
                    </p>
                </div>

                <div className="cotizador-layout">
                    <div className="cot-form-card">
                        <div className="cot-form-title">
                            Nueva <span>Pieza a Medida</span>
                        </div>

                        <div className="field">
                            <label>Designación de Espacio</label>

                            <input
                                type="text"
                                value={ambiente}
                                onChange={(e) =>
                                    setAmbiente(e.target.value)
                                }
                                placeholder="Ej: Master Suite, Living Principal, Directorio"
                            />
                        </div>

                        <div className="field">
                            <label>Colección Textil</label>

                            <div className="visual-selector">
                                {visualOptions.map((option) => (
                                    <div
                                        key={option.id}
                                        className={`visual-option ${
                                            tipo === option.value
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setTipo(option.value)
                                        }
                                    >
                                        <span className="visual-icon">
                                            {option.icon}
                                        </span>

                                        {option.label} (
                                        {option.value / 1000}K/m²)
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="field-grid">
                            <div className="field">
                                <label>Ancho Real (cm)</label>

                                <input
                                    type="number"
                                    value={ancho}
                                    onChange={(e) =>
                                        setAncho(e.target.value)
                                    }
                                    placeholder="120"
                                />
                            </div>

                            <div className="field">
                                <label>Alto Real (cm)</label>

                                <input
                                    type="number"
                                    value={alto}
                                    onChange={(e) =>
                                        setAlto(e.target.value)
                                    }
                                    placeholder="180"
                                />
                            </div>
                        </div>

                        <button
                            className="btn-add"
                            onClick={agregarCotizacion}
                        >
                            + Añadir Elemento
                        </button>

                        <div className="promo-side-card">
                            <label>
                                Código de Invitación Privada
                            </label>

                            <div className="promo-row">
                                <input
                                    type="text"
                                    value={promoInput}
                                    onChange={(e) =>
                                        setPromoInput(
                                            e.target.value
                                        )
                                    }
                                    placeholder="HANKOWEB"
                                />

                                <button onClick={aplicarPromo}>
                                    Validar
                                </button>
                            </div>

                            <small id="promo-msg">
                                {promoMsg}
                            </small>
                        </div>
                    </div>

                    <div className="cot-table-wrap">
                        <div className="cot-table-head">
                            <h3>Resumen del Manifiesto</h3>

                            <span className="cot-items-count">
                                {items.length} elementos
                            </span>
                        </div>

                        <div className="table-scroll">
                            <table className="cot-table">
                                <thead>
                                    <tr>
                                        <th>Detalle Textil</th>
                                        <th>Dimensiones</th>
                                        <th>Inversión Subtotal</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {!items.length ? (
                                        <tr className="cot-empty-row">
                                            <td colSpan="4">
                                                Su manifiesto se
                                                encuentra vacío en este
                                                momento.
                                            </td>
                                        </tr>
                                    ) : (
                                        items.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <strong>
                                                        {item.ambiente}
                                                    </strong>
                                                    <br />

                                                    <small>
                                                        {
                                                            item.tipoText
                                                        }
                                                    </small>
                                                </td>

                                                <td>
                                                    {item.ancho} ×{" "}
                                                    {item.alto} cm
                                                </td>

                                                <td>
                                                    {formatCLP(
                                                        item.subtotal
                                                    )}
                                                </td>

                                                <td>
                                                    <button
                                                        className="cot-delete"
                                                        onClick={() =>
                                                            eliminarItem(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        ✕
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="cot-total-bar">
                            <div>
                                <div className="total-label">
                                    Inversión Estimada Total
                                </div>
                            </div>

                            <div className="total-value">
                                {formatCLP(total)}
                            </div>
                        </div>

                        <div className="cot-footer">
                            <button
                                className="btn-send-quote"
                                onClick={enviarWhatsApp}
                            >
                                Transferir Proyecto a un Diseñador por
                                WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}