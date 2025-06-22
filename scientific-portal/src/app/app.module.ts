import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { SintesesComponent } from './pages/sinteses/sinteses.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { KnmComponent } from './pages/courses/potassium-nitromethanate/knm/knm.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { OrderByPipe } from './pipes/order-by.pipe';
import { MatListModule } from '@angular/material/list';
import { ConfirmPurchaseModalComponent } from './confirm-purchase-modal/confirm-purchase-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    SintesesComponent,
    SobreComponent,
    CadastroComponent,
    PaymentDialogComponent,
    KnmComponent,
    OrderByPipe,
    ConfirmPurchaseModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
