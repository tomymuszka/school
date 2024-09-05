import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createGrade } from '../../api/gradeApi';

// interface AddSchoolProps {
//   onSchoolAdded: (name: string) => void; // Callback para manejar la respuesta
// }

const AddGradePage: React.FC = () => {
  const [gradeName, setGradeName] = useState<string>('');
  const { schoolId } = useParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGradeName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createGrade(gradeName, +schoolId!);
      console.log('Enviando curso:', gradeName);
      setGradeName('');
    } catch (error) {
      console.error('Error al agregar el curso:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="my-4">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Volver a cursos
        </Link>
      </div>
      <h1 className="text-xl font-bold text-center mb-4">
        Agregar Nuevo Curso
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label
          htmlFor="gradeName"
          className="block text-lg font-medium text-gray-700"
        >
          Nombre del curso:
        </label>
        <input
          type="text"
          id="gradeName"
          value={gradeName}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        <button
          type="submit"
          className="flex flex-col items-center mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Agregar Curso
        </button>
      </form>
    </div>
  );
};

export default AddGradePage;
