import { Product } from "../components/interfaces/Products";
import { useQuery } from 'react-query';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7143',
});

export const useProduct = () => {
  const fetchProduct = async () => {
    const response = await axiosInstance.get<Product>('/Product');

    return response.data;
  };

  return useQuery<Product, Error>({
    queryKey: 'product',
    queryFn: fetchProduct,
  });
};
