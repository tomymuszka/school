import React from 'react';

const InstructionsPage = () => {
  return (
    <div className="w-4/5 mx-auto my-5 p-5 box-border bg-gray-100 border border-gray-300">
      <h1 className="text-gray-800 text-center">
        Instrucciones para enviar documentos
      </h1>
      <p className="text-gray-600 text-base leading-loose">
        Si vas a escanear una foto con el celular tené en cuenta lo siguiente:
      </p>
      <ul className="text-gray-600 text-base leading-loose ml-5">
        <li>
          Buscá un lugar con mucha luz, una ventana o lámpara, y evitá sombras
          de tu mano en la hoja (usa luz de costado).
        </li>
        <li>Tratá de que la hoja ocupe la mayor parte de la foto.</li>
        <li>No sesgues con mucho ángulo, mejor de frente.</li>
        <li>
          No te preocupes por tus datos personales, nosotros nos ocupamos de
          borrarlos!
        </li>
      </ul>
      <p className="text-gray-600 text-base leading-loose">
        Al tener las imágenes listas no te olvides de mandarlas al mail
        mandarpruebas@gmail.com incluyendo el año, la materia y objetivo del
        examen correspondiente. Si tienes las correcciones y respuestas nos
        serán de gran ayuda!
      </p>
      <img
        src="src/assets/colaboracion.jpg"
        alt="Ejemplo de escaneo"
        className="block w-full h-auto mx-auto my-5 border border-gray-300"
      />
    </div>
  );
};

export default InstructionsPage;
