import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  cpf?: string;

  constructor(private userService: UserService) {}

  async registrar() {
    if (!this.email || !this.password || !this.cpf || !this.name) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const result = await this.userService.createUser(
      this.email,
      this.password,
      this.cpf,
      this.name,
    );

    if (result) {
      Swal.fire({
        title: 'Cadastro realizado com sucesso',
        text: 'Agora você pode fazer o login no site com seu email e senha.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      this.email = '';
      this.password = '';
      this.cpf = '';
      this.name = '';
    } else {
      Swal.fire({
        title: 'Probleminha /:',
        text: 'Problema ao salvar usuário, por favor tente mais tarde.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  }
}
