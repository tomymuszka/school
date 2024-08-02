import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Accordion.css';
import { fetchGrade } from '../../api/gradeApi';
import { fetchSubjectsByGradeId } from '../../api/subjectApi';

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

const Accordion = () => {
  const [sections, setSections] = useState<{ grade: Grade, subjects: Subject[] }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);

  useEffect(() => {
    const getGradesAndSubjects = async () => {
      try {
        const gradesData = await fetchGrade();

        const gradesWithSubjects = await Promise.all(gradesData.map(async (grade) => {
          const subjectsData = await fetchSubjectsByGradeId(grade.id);
          return { grade, subjects: subjectsData };
        }));

        setSections(gradesWithSubjects);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getGradesAndSubjects();
  }, []);

  const toggleSection = (index: number) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='page'>
      {sections.map((section, index) => (
        <div className='context' key={section.grade.id}>
          <button className="accordion-title" onClick={() => toggleSection(index)}>
            {section.grade.name}
          </button>
          <div className={`accordion-content ${openSectionIndex === index ? 'open' : ''}`}>
            {section.subjects.map((subject, idx) => (
              <div key={idx}>
                <Link to={`/documents/${subject.subject_id}`}>{subject.subject_name}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
