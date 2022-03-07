import { AxiosClient } from '../utils/axios.util';

export const getMenu = async () => {
  const { data } = await AxiosClient.get('/menu');
  return data;
};
