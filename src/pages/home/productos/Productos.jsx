// src/pages/home/productos/Productos.jsx
import "./Productos.css";
import ProductoCard from "./components/producto-card/ProductoCard";
import productos from "../../../data/productos";

function Productos() {
    return (
        <section id="productos" className="sec">
            <div className="sec-inner">
                <div className="sec-head">
                    <div className="tag">Inspírate</div>

                    <h2 className="sec-title">
                        Nuestras Líneas <em>De Autor</em>
                    </h2>

                    <p className="sec-lead">
                        Transforma tus espacios, combina elegancia y funcionalidad para un control preciso
                        de la luz y ambientes acogedores.
                    </p>
                </div>

                <div className="prod-grid">
                    {productos.map((producto, index) => (
                        <ProductoCard
                            key={index}
                            badge={producto.badge}
                            image={producto.image}
                            alt={producto.alt}
                            title={producto.title}
                            description={producto.description}
                            price={producto.price}
                            unit={producto.unit}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Productos;