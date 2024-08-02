import React from 'react';
import './colaborate.css'; // Asegúrate de importar el CSS

const InstructionsPage = () => {
  return (
    <div className="instructions-container">
      <h1>Instrucciones para enviar documentos</h1>
      <p>Si vas a escanear una foto con el celular tené en cuenta lo siguiente:</p>
      <ul>
        <li>Buscá un lugar con mucha luz, una ventana o lámpara, y evitá sombras de tu mano en la hoja (usa luz de costado).</li>
        <li>Tratá de que la hoja ocupe la mayor parte de la foto.</li>
        <li>No sesgues con mucho ángulo, mejor de frente.</li>
        <li>No te preocupes por tus datos personales, nosotros nos ocupamos de borrarlos!</li>
      </ul>
      <p>Al tener las imágenes listas no te olvides de mandarlas al mail mandarpruebas@gmail.com incluyendo el año, la materia y objetivo del examen correspondiente. Si tienes las correcciones y respuestas nos serán de gran ayuda!</p>
      <img src="src\assets\colaboracion.jpg" alt="Ejemplo de escaneo" />
    </div>
  );
};

export default InstructionsPage;
