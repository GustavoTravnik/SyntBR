import axios from 'axios';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

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

api.interceptors.response.use(
  response => response,
  async error => {
    const { response } = error;

    if (response && response.status === 401) {
      Swal.fire({
        title: 'Login Expirado',
        text: 'Sua sessão expirou. Por favor, faça login novamente.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      localStorage.removeItem('token');
      window.location.href = '/login'; // Adjust the path as needed
    } else if (response && response.status === 403) {
      Swal.fire({
        title: 'Validação de acesso',
        text: response.data.message || 'Acesso negado. Faça login novamente.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }

    return Promise.reject(error);
  }
);