import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Accordion.css';
import { fetchGrade } from '../../api/gradeApi';
import { fetchSubjectsByGradeId } from '../../api/subjectApi';
import { useAuth } from '../../context/Authcontext';

export interface Grade {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  schoolId: number;
}

export interface Subject {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  gradeId: number;
}

interface RouteParams {
  schoolId: string;
}

const Accordion = () => {
  const [sections, setSections] = useState<
    { grade: Grade; subjects: Subject[] }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
  const { isAdmin } = useAuth();
  const { schoolId } = useParams();

  useEffect(() => {
    const schoolIdNumber = parseInt(schoolId!);
    if (!isNaN(schoolIdNumber)) {
      const getGradesAndSubjects = async () => {
        try {
          const gradesData = await fetchGrade(schoolIdNumber);
          const gradesWithSubjects = await Promise.all(
            gradesData.map(async (grade) => {
              const subjectsData = await fetchSubjectsByGradeId(grade.id);
              return { grade, subjects: subjectsData };
            })
          );
          setSections(gradesWithSubjects);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      getGradesAndSubjects();
    } else {
      setError(new Error('Invalid school ID'));
      setLoading(false);
    }
  }, [schoolId]);

  const toggleSection = (index: number) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-gray-300 pb-5">
      {sections.map((section, index) => (
        <div className="flex flex-col items-center" key={section.grade.id}>
          <button
            className="w-full max-w-4xl px-2.5 text-left bg-gray-200 border-b border-gray-300 cursor-pointer text-base mt-5 text-black"
            onClick={() => toggleSection(index)}
          >
            {section.grade.name}
          </button>
          <div
            className={`transition-max-height duration-200 ease-out bg-gray-200 overflow-hidden ${
              openSectionIndex === index
                ? 'max-h-64 w-full max-w-4xl'
                : 'max-h-0'
            }`}
          >
            {section.subjects.map((subject, idx) => (
              <div key={idx} className="p-2 border-b border-gray-200">
                <Link
                  to={`/documents/${subject.id}`}
                  className="no-underline text-black"
                >
                  {subject.subject_name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
      {isAdmin && (
        <Link to="newgrade" className="flex flex-col items-center">
          <button className=" flex flex-col items-center w-96 h-10 p-2.5 text-center bg-red-600 text-white rounded cursor-pointer">
            Nuevo curso
          </button>
        </Link>
      )}
    </div>
  );
};

export default Accordion;
