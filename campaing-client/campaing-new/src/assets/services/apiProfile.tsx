import { User } from "../components/interfaces/User";
import { useQuery } from 'react-query';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7143',
});

export const useProfile = (id?: number) => {
  const fetchUser = async () => {
    const response = await axiosInstance.get<User>(`/User${id ? `/${id}` : ''}`);

    return response.data;
  };

  return useQuery<User, Error>({
    queryKey: ['User', id], // Include the ID in the queryKey
    queryFn: fetchUser,
  });
};
