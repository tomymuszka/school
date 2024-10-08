import { Grade } from '../pages/grade/grade';
import axiosInstance from './axiosInstance';

export const fetchGrade = async (schoolId: number): Promise<Grade[]> => {
  try {
    const response = await axiosInstance.get(`/grade/school/${schoolId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching grades:', error);
    throw error;
  }
};

export const createGrade = async (name: string, schoolId: number) => {
  try {
    await axiosInstance.post('/grade', { name, schoolId });
  } catch (error) {
    console.log(error);
  }
};

// export const createUser = async (userData) => {
//   try {
//     const response = await axiosInstance.post('/users', userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating user:', error);
//     throw error;
//   }
// };

// Añade más llamadas API relacionadas con usuarios según sea necesario
