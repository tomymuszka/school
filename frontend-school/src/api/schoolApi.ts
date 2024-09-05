import { School } from '../pages/main/main';
import axiosInstance from './axiosInstance';

export const fetchSchool = async (): Promise<School[]> => {
  try {
    const response = await axiosInstance.get('/school');
    return response.data;
  } catch (error) {
    console.error('Error fetching schools:', error);
    throw error;
  }
};

export const createSchool = async (name: string) => {
  try {
    await axiosInstance.post('/school', { name });
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
