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
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      Swal.fire({
        title: 'Validação',
        text: 'Acesso negado. Faça login primeiro.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return this.router.createUrlTree(['/']);
    }
  }
}
