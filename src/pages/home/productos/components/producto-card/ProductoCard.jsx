// src/pages/home/productos/components/producto-card/ProductoCard.jsx
import "./ProductoCard.css";

function ProductoCard({
    badge,
    image,
    alt,
    title,
    description,
    price,
    unit,
}) {
    return (
        <div className="prod-card">
            <div className="prod-img">
                <span className="prod-badge">{badge}</span>

                <img src={image} alt={alt} />
            </div>

            <div className="prod-body">
                <h3 className="prod-name">{title}</h3>

                <p className="prod-desc">{description}</p>

                <div className="prod-price-row">
                    <span className="prod-price">{price}</span>

                    <span className="prod-unit">{unit}</span>
                </div>

                <button className="btn-card">
                    Cotizar Línea
                </button>
            </div>
        </div>
    );
}

export default ProductoCard;