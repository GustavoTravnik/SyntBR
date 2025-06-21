import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CreditService } from '../services/credit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss'],
})
export class PaymentDialogComponent {
  amount: number = 0;
  copied = false;

  constructor(
    public dialogRef: MatDialogRef<PaymentDialogComponent>,
    private creditService: CreditService,
    private router: Router
  ) {}

  close() {
    this.dialogRef.close();
  }

  async confirm() {
    if (isNaN(this.amount) || this.amount < 1) {
      Swal.fire({
        title: 'Validação',
        text: 'O valor mínimo é 1.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    const result = await this.creditService.requestCredit(this.amount);

    if (result) {
      Swal.fire({
        title: 'Obrigado :3',
        text: 'Em breve os creditos serão creditados na sua conta assim que for validada a transferência',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      this.dialogRef.close();
    } else {
      Swal.fire({
        title: 'Probleminha...',
        text: 'Erro durante a requisição dos seus créditos, tente novamente mais tarde',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      this.router.navigate(["/"]);
    }
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.amount = parseInt(input.value.replace(/[^0-9]/g, '').slice(0, 6));
  }

  copyToClipboard() {
    navigator.clipboard
      .writeText('c4c09e27-4217-48b4-81b4-100320e37827')
      .then(() => {
        this.copied = true;
        setTimeout(() => (this.copied = false), 2000);
      });
  }
}
