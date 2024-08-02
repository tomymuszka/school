import axiosInstance from './axiosInstance';

export interface Document {
  name: string;
  images: string[];
  // Añade otros campos según sea necesario
}

export const fetchDocument = async (id:number):Promise<Document> => {
  try {
    const response = await axiosInstance.get(`/document/${id}`);
    console.log(response.data)
    return response.data[0];
  } catch (error) {
    console.error('Error fetching documents:', error);
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
