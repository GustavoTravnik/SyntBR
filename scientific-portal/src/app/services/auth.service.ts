import { Injectable } from '@angular/core';
import { api } from '../services/axios.config';
import * as jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersBaseApiPath = '/api/login';

  public async login(email: string, password: string) {
    try {
      const response = await api.post(this.usersBaseApiPath, {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      return { success: true, token };
    } catch (err: any) {
      return {
        success: false,
        error: err.response?.data?.message || 'Erro ao logar',
      };
    }
  }

  public async getLoggedUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    return jwt.jwtDecode(token);
  }

  isLoggedIn() {
    return this.getLoggedUser() !== null;
  }

  public async logout() {
    localStorage.setItem('token', '');
  }
}
