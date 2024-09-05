import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-md shadow-md w-72">
        <div className="flex justify-between items-center">
          <h2>Contacto</h2>
          <button
            onClick={onClose}
            className="bg-none border-none cursor-pointer text-3xl"
          >
            ✖
          </button>
        </div>
        <div className="mt-2.5 mb-0">
          <p>Para aportar imágenes de pruebas y/o resúmenes:</p>
          <a
            href="mailto:manda.tuspruebas@gmail.com"
            className="text-blue-500 no-underline hover:underline"
          >
            manda.tuspruebas@gmail.com
          </a>
          <p>Publicidad y Relaciones Comerciales con TusPruebas.com:</p>
          <a
            href="mailto:tuspruebas4@gmail.com"
            className="text-blue-500 no-underline hover:underline"
          >
            tuspruebas4@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
