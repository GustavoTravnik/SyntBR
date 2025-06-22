import { Component } from '@angular/core';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  email = '';
  password = '';

  constructor(
    public auth: AuthService,
    private dialog: MatDialog,
    private router: Router,
  ) {
    const loggedUser = localStorage.getItem('token');
    if (loggedUser) {
    }
  }

  loggedIn() {
    return this.auth.isLoggedIn();
  }

  async login() {
    const success = await this.auth.login(this.email, this.password);
    if (!success) {
      alert('Login inválido.');
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  openPaymentDialog() {
    const dialogRef = this.dialog.open(PaymentDialogComponent, {
      width: '400px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Valor informado:', result);
      }
    });
  }

  getCredits() {
    return (this.auth.getLoggedUser() as any)?.credits || 0;
  }
}
