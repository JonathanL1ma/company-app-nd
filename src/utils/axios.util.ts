import Axios from 'axios';

export const AxiosClient = Axios.create({
  baseURL: process.env.REACT_APP_HOST,
});
