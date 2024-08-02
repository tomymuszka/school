import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import { fetchSchool } from '../../api/schoolApi'; // Ajusta la ruta según tu estructura de carpetas

export interface School {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

const Main = () => {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

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
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="main">
      {schools.map(school => (
        <div key={school.id} className="school">
          <Link to="/grade">
            <button>{school.name}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Main;
