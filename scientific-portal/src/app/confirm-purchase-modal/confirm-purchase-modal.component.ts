import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-purchase-modal',
  templateUrl: './confirm-purchase-modal.component.html',
})
export class ConfirmPurchaseModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmPurchaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; price: number },
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
