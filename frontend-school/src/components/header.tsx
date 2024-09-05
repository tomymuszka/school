import { Link } from 'react-router-dom';

const Header = ({ onModalOpen }) => {
  return (
    <div className="bg-white p-5 flex justify-start items-center shadow-md">
      <div className="flex items-center">
        <img src="src/assets/logoSinFondo.png" alt="Logo" className="w-40" />
        <h1 className="text-red-600 text-4xl ml-2.5 font-bold font-sans">
          Tus Pruebas
        </h1>
      </div>
      <nav>
        <ul className="list-none flex">
          <li className="ml-10">
            <Link
              to="/"
              className="no-underline text-black text-base font-sans"
            >
              INICIO
            </Link>
          </li>
          <li className="ml-10">
            <Link
              to="/colaboracion"
              className="no-underline text-black text-base font-sans"
            >
              COLABORACION
            </Link>
          </li>
          <li onClick={onModalOpen} className="ml-10 cursor-pointer">
            CONTACTO
          </li>
          <li className="ml-10">
            <Link
              to="/escuelas"
              className="no-underline text-black text-base font-sans"
            >
              ESCUELAS
            </Link>
          </li>
          <li className="ml-10">
            <Link
              to="/access"
              className="no-unerline text-black text-base font-sans"
            >
              INGRESAR
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
