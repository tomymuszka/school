import React, { useState } from 'react';
import { createSchool } from '../../api/schoolApi';
import { Link } from 'react-router-dom';

// interface AddSchoolProps {
//   onSchoolAdded: (name: string) => void; // Callback para manejar la respuesta
// }

const AddSchoolPage: React.FC = () => {
  const [schoolName, setSchoolName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createSchool(schoolName);
      console.log('Enviando escuela:', schoolName);
      setSchoolName('');
    } catch (error) {
      console.error('Error al agregar la escuela:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="my-4">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Volver a escuelas
        </Link>
      </div>
      <h1 className="text-xl font-bold text-center mb-4">
        Agregar Nueva Escuela
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label
          htmlFor="schoolName"
          className="block text-lg font-medium text-gray-700"
        >
          Nombre de la escuela:
        </label>
        <input
          type="text"
          id="schoolName"
          value={schoolName}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        <button
          type="submit"
          className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Agregar Escuela
        </button>
      </form>
    </div>
  );
};

export default AddSchoolPage;
