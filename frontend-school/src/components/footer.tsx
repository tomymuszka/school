import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center p-2.5 text-sm">
      <a
        href="#privacidad"
        className="text-blue-500 hover:text-blue-600 no-underline"
      >
        Política de Privacidad
      </a>
      {' | '}
      <a
        href="#terminos"
        className="text-blue-500 hover:text-blue-600 no-underline"
      >
        Términos y Condiciones
      </a>
      <div>
        <p>© 2024 TusPruebas.com . Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
