import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean | UrlTree> {
    if (this.auth.isLoggedIn() && await this.auth.fetchLoggedUser()) {
      return true;
    } else {
      Swal.fire({
        title: 'Validação',
        text: 'Acesso negado. Faça login primeiro.',
        icon: 'warning',
        confirmButtonText: 'OK',
        didClose: () => {
          window.location.href = '/login';
        }
      });
      return this.router.createUrlTree(['/']);
    }
  }
}

export default class LoginUtils {
  static async runWithLoggedUser(asyncMethodToRun: any) {
    const token = localStorage.getItem('token');

   if (token) {
      await asyncMethodToRun();
    } else {
      Swal.fire({
        title: 'Validação',
        text: 'Acesso negado. Faça login primeiro.',
        icon: 'warning',
        confirmButtonText: 'OK', 
        didClose: () => {
          window.location.href = '/login';
        }
      });
    }
    }
}
