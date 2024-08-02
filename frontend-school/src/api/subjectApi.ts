import { Subject } from '../pages/grade/grade';
import axiosInstance from './axiosInstance';

export const fetchSubjectsByGradeId = async (id:number):Promise<Subject[]> => {
  try {
    const response = await axiosInstance.get(`/subject/grade/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching subjects:', error);
    throw error;
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
