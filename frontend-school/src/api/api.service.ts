import { Document2 } from '../common/interfaces';
import axiosInstance from './axiosInstance';

// EXAMPLE
export const getDocument = async (id: number): Promise<Document2> => {
  const response = await axiosInstance.get<Document2>(`/document/${id}`);

  return response.data;
};
