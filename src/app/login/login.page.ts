import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.username && this.password) {
      if (this.authService.login(this.username, this.password)) {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/home']);
      } else {
        console.log('Inicio de sesión fallido');
        alert('Usuario o contraseña incorrectos');
      }
    } else {
      console.log('Campos de usuario y contraseña son obligatorios');
      alert('Por favor, ingrese un nombre de usuario y contraseña.');
    }
  }
  
}
