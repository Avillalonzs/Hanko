// cotizador/cotizador.js

import {
    COTIZADOR_CONFIG,
} from "../../../data/cotizador";

export const visualOptions =
    COTIZADOR_CONFIG.projectTypes.map(
        (item, index) => ({
            id: `visual_${index}`,
            value: item.value,
            label: item.label,
            icon:
                index === 0
                    ? "☀️"
                    : index === 1
                    ? "🌙"
                    : index === 2
                    ? "🟰"
                    : index === 3
                    ? "🧩"
                    : "✨",
        })
    );

export const formatCLP = (v) =>
    "$" + v.toLocaleString("es-CL");

export const getTipoText = (precio) => {
    const found =
        COTIZADOR_CONFIG.projectTypes.find(
            (item) => item.value === precio
        );

    return found
        ? found.label
        : COTIZADOR_CONFIG.projectTypes[0]
              .label;
};

export const calcularSubtotal = (
    ancho,
    alto,
    tipo
) => {
    const area =
        (parseFloat(ancho) / 100) *
        (parseFloat(alto) / 100);

    return Math.round(area * tipo);
};

export const calcularTotal = (items) => {
    return items.reduce(
        (acc, item) => acc + item.subtotal,
        0
    );
};

export const buildWhatsAppMessage = (
    company,
    items,
    total
) => {
    let msg =
        `🏠 *Proyecto · ${company}*\n\n`;

    items.forEach((it, i) => {
        msg += `${i + 1}. *${it.ambiente}* — ${it.tipoText}\n`;

        msg += `   Dimensiones: ${it.ancho}×${it.alto} cm → Inversión: ${formatCLP(
            it.subtotal
        )}\n`;
    });

    msg += `\n\n*VALOR ESTIMADO TOTAL: ${formatCLP(
        total
    )}*`;

    return msg;
};