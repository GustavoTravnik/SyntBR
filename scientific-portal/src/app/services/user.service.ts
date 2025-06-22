import { Injectable } from '@angular/core';
import { api } from '../services/axios.config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersBaseApiPath = '/api/user';

  public createUser = async (
    email: string,
    password: string,
    cpf: string,
    name: string,
  ) => {
    return await api
      .post(this.usersBaseApiPath, { email, password, cpf, name })
      .then((response) => true)
      .catch((error) => false);
  };
}
