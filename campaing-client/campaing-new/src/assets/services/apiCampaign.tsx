import axios from 'axios';

import { useQuery,UseQueryResult } from 'react-query';
import { Campaign } from '../components/interfaces/Campaing';

export const axiosInstance = axios.create({
  baseURL: 'https://localhost:7143',
});

export const useCampaign = () => {
  const fetchCampaign = async () => {
    const response = await axiosInstance.get<Campaign[]>('/campaign');
    return response.data;
  };

  return useQuery<Campaign[], Error>({
    queryKey: ['campaign'],
    queryFn: fetchCampaign,
  });
};



export const useGetMyCampaigns = (email?: string) => {
  const fetchUsers = async () => {
    const response = await axiosInstance.get<Campaign[]>(`/myCampaign${email ? `/${email}` : ''}`);
    return response.data;
  };

  return useQuery<Campaign[], Error>({
    queryKey: 'myCampaign',
    queryFn: fetchUsers,
  });
};


