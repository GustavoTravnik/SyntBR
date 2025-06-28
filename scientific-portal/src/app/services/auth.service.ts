import { Injectable } from '@angular/core';
import { api } from '../services/axios.config';
import * as jwt from 'jwt-decode';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersBaseApiPath = '/api/login';
  private verifyLoggedBaseApiPath = '/api/login/verify';

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
      return false;
    }
  }

  public async fetchLoggedUser() {
    try {
      const response = await api.get(this.verifyLoggedBaseApiPath);
      return { success: true };
    } catch (err: any) {
      return false;
    }
  }

  public getLoggedUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    return jwt.jwtDecode(token);
  }

  isLoggedIn() {
    return this.getLoggedUser() !== null;
  }

  public async logout() {
    localStorage.removeItem('token');
  }
}
