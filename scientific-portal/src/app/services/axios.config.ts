import axios from 'axios';
import { environment } from 'src/environments/environment';

export const api = axios.create({
  baseURL: environment.apiBaseUrl,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
