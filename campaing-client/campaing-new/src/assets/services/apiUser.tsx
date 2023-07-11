import { useQuery } from 'react-query';
import axios from 'axios';
import { Twitter } from '../components/interfaces/Twitter';
import { User } from '../components/interfaces/User';
import { Product } from '../components/interfaces/Products';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7143',
});

export const useMoney = (email?: string) => {
  const fetchMoney = async () => {
    const response = await axiosInstance.get<Twitter[]>(`/GetTwitter${email ? `/${email}` : ''}`);
    return response.data;
  };

  return useQuery<Twitter[], Error>({
    queryKey: ['GetTwitter', email],
    queryFn: fetchMoney,
  });
};

export const useUpdateUserDetails = () => {
  const updateUser = async (userId: number, updatedUser: User) => {
    await axiosInstance.put(`/UserUpdate/${userId}`, updatedUser);
  };

  return {
    updateUser,
  };
};

export const useGetAllUsers = () => {
  const fetchUsers = async () => {
    const response = await axiosInstance.get<User[]>('/Users');
    return response.data;
  };

  return useQuery<User[], Error>({
    queryKey: 'Users',
    queryFn: fetchUsers,
  });
};


export const useDeleteUser = () => {
  const deleteUser = async (userId: number) => {
    await axiosInstance.delete(`/DeleteUser/${userId}`);
  };

  return deleteUser;
};








export const DonationByUserApi = (email?: string) => {
    const fetchProductByUser = async () => {
      const response = await axiosInstance.get<Product[]>(`/ProductByUser${email ? `/${email}` : ''}`);
      return response.data;
    };
  
    return useQuery<Product[], Error>({
      queryKey: ['ProductByUser', email],
      queryFn: fetchProductByUser,
    });
  };