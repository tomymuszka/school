import { useState } from 'react';
import { useAuth } from '../context/Authcontext';

export const AccessPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const { isAdmin, login } = useAuth();

  const handleClickLogin = () => {
    login(password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-900">
          Ingresa la contraseña para administrar el sitio
        </h1>
        <input
          type="password" // Cambiado de "text" a "password" para mayor seguridad
          id="textfield"
          className="w-full p-4 text-lg border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ingresa la contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-center items-center">
          <button
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={handleClickLogin}
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};
