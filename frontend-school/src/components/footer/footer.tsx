import React from 'react';
import './footer.css'

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <a href="#privacidad">Política de Privacidad</a>
            {' | '}
            <a href="#terminos">Términos y Condiciones</a>
            <div>
                <p>© 2024 TusPruebas.com . Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
