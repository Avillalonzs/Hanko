// src/layout/Layout.jsx
import "./Layout.css";
import Navbar from "../pages/components/Navbar.jsx";
import Footer from "../pages/components/Footer.jsx";
import WhatsAppFloat from "../pages/components/WhatsAppFloat.jsx";


function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

export default Layout;