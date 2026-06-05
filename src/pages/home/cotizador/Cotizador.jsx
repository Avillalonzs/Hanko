// cotizador/Cotizador.jsx

import { useState } from "react";
import "./Cotizador.css";

import {
    COMPANY_NAME,
    WHATSAPP_BASE,
} from "../../../config/config";

import {
    visualOptions,
    getTipoText,
    formatCLP,
    calcularSubtotal,
    calcularTotal,
    buildWhatsAppMessage,
} from "./cotizador";

import {
    COTIZADOR_CONFIG,
} from "../../../data/cotizador";

export default function Cotizador() {
    const [tipo, setTipo] = useState(
        visualOptions[0].value
    );

    const [ambiente, setAmbiente] = useState("");
    const [ancho, setAncho] = useState("");
    const [alto, setAlto] = useState("");

    const [items, setItems] = useState([]);

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

        const subtotal = calcularSubtotal(
            ancho,
            alto,
            tipo
        );

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

    const total = calcularTotal(items);

    const enviarWhatsApp = () => {
        if (!items.length) {
            alert(
                "Añada al menos un elemento para compilar el manifiesto."
            );

            return;
        }

        const msg = buildWhatsAppMessage(
            COMPANY_NAME,
            items,
            total
        );

        window.open(
            `${WHATSAPP_BASE}?text=${encodeURIComponent(
                msg
            )}`,
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
                        {COTIZADOR_CONFIG.title}
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
                            <label>
                                Designación de Espacio
                            </label>

                            <input
                                type="text"
                                value={ambiente}
                                onChange={(e) =>
                                    setAmbiente(
                                        e.target.value
                                    )
                                }
                                placeholder="Ej: Living, Dormitorio Principal, Oficina"
                            />
                        </div>

                        <div className="field">
                            <label>
                                {
                                    COTIZADOR_CONFIG
                                        .labels.projectType
                                }
                            </label>

                            <div className="visual-selector">
                                {visualOptions.map(
                                    (option) => (
                                        <div
                                            key={option.id}
                                            className={`visual-option ${
                                                tipo ===
                                                option.value
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setTipo(
                                                    option.value
                                                )
                                            }
                                        >
                                            <span className="visual-icon">
                                                {
                                                    option.icon
                                                }
                                            </span>

                                            {
                                                option.label
                                            }{" "}
                                            (
                                            {option.value /
                                                1000}
                                            K/m²)
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="field-grid">
                            <div className="field">
                                <label>
                                    Ancho Real (cm)
                                </label>

                                <input
                                    type="number"
                                    value={ancho}
                                    onChange={(e) =>
                                        setAncho(
                                            e.target.value
                                        )
                                    }
                                    placeholder="120"
                                />
                            </div>

                            <div className="field">
                                <label>
                                    Alto Real (cm)
                                </label>

                                <input
                                    type="number"
                                    value={alto}
                                    onChange={(e) =>
                                        setAlto(
                                            e.target.value
                                        )
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
                    </div>

                    <div className="cot-table-wrap">
                        <div className="cot-table-head">
                            <h3>
                                Resumen del Manifiesto
                            </h3>

                            <span className="cot-items-count">
                                {items.length} elementos
                            </span>
                        </div>

                        <div className="table-scroll">
                            <table className="cot-table">
                                <thead>
                                    <tr>
                                        <th>
                                            Detalle Textil
                                        </th>

                                        <th>
                                            Dimensiones
                                        </th>

                                        <th>
                                            Inversión Subtotal
                                        </th>

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
                                        items.map(
                                            (
                                                item,
                                                index
                                            ) => (
                                                <tr
                                                    key={
                                                        index
                                                    }
                                                >
                                                    <td>
                                                        <strong>
                                                            {
                                                                item.ambiente
                                                            }
                                                        </strong>

                                                        <br />

                                                        <small>
                                                            {
                                                                item.tipoText
                                                            }
                                                        </small>
                                                    </td>

                                                    <td>
                                                        {
                                                            item.ancho
                                                        }{" "}
                                                        ×{" "}
                                                        {
                                                            item.alto
                                                        }{" "}
                                                        cm
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
                                            )
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="cot-total-bar">
                            <div>
                                <div className="total-label">
                                    {
                                        COTIZADOR_CONFIG
                                            .result
                                            .title
                                    }
                                </div>
                            </div>

                            <div className="total-value">
                                {formatCLP(total)}
                            </div>
                        </div>

                        <div className="cot-footer">
                            <button
                                className="btn-send-quote"
                                onClick={
                                    enviarWhatsApp
                                }
                            >
                                Transferir Proyecto a un
                                Diseñador por WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}