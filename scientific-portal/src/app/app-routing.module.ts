import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { SintesesComponent } from './pages/sinteses/sinteses.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AuthGuard } from './guards/auth.guard';
import { KnmComponent } from './pages/courses/potassium-nitromethanate/knm/knm.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'sinteses', component: SintesesComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'courses/knm/:id', component: KnmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
