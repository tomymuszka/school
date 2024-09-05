import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSchool } from '../../api/schoolApi'; // Ajusta la ruta según tu estructura de carpetas
import { NoSchool } from '../../components/NoSchools';
import { useAuth } from '../../context/Authcontext';

export interface School {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

const Main: React.FC = () => {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const getSchools = async () => {
      try {
        const schoolsData = await fetchSchool();
        setSchools(schoolsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getSchools();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <NoSchool />;

  return (
    <div className="flex flex-col p-5 bg-gray-300 items-center">
      {schools.map((school) => (
        <div key={school.id} className="mb-2.5">
          <Link to={`/grade/${school.id}`}>
            <button className="w-96 h-20 p-2.5 text-center bg-white border border-gray-300 rounded cursor-pointer">
              {school.name}
            </button>
          </Link>
        </div>
      ))}
      {isAdmin && (
        <Link to="newschool">
          <button className="w-96 h-10 p-2.5 text-center bg-red-600 text-white rounded cursor-pointer">
            Nueva escuela
          </button>
        </Link>
      )}
    </div>
  );
};

export default Main;
