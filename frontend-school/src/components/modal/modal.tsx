import React from 'react';
import './Modal.css';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Contacto</h2>
          <button onClick={onClose} className="close-button">✖</button>
        </div>
        <div className="modal-content">
          <p>Para aportar imágenes de pruebas y/o resúmenes:</p>
          <a href="mailto:manda.tuspruebas@gmail.com">manda.tuspruebas@gmail.com</a>
          <p>Publicidad y Relaciones Comerciales con TusPruebas.com:</p>
          <a href="mailto:tuspruebas4@gmail.com">tuspruebas4@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
