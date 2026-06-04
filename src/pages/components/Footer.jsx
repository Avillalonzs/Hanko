// src/components/footer/Footer.jsx
import "./Footer.css";


function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-brand">
                    <div className="footer-logo">
                        Roller <em>Hanko</em>
                    </div>

                    <div className="footer-copy">
                        © 2026 Roller Hanko · Todos los derechos reservados ·
                        <a href="#"> DIV Desarrollo e Ingeniería Villalón</a>
                    </div>
                </div>

                <div className="social-row">
                    <a href="#" className="soc">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a href="#" className="soc">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        href="https://wa.me/56952499961"
                        target="_blank"
                        className="soc"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;