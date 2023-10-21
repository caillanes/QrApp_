import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = 'primaria';
  fechaNacimiento: string = '';
  titleState: string = 'center';
  inputState: string = '';
  
  constructor(private router: Router) {
  }

  redirigirALogin() {
    this.router.navigate(['/login']);
  }
  
  redirigirALoginDocente() {
    this.router.navigateByUrl('/login-docente');
  }
}
