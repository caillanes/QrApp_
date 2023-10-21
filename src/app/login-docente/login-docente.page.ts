import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicedocenteService } from '../servicios-dos/servicedocente.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-docente',
  templateUrl: 'login-docente.page.html',
  styleUrls: ['login-docente.page.scss'],
})
export class LoginDocentePage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private serviceDocente: ServicedocenteService,
    private alertController: AlertController
  ) {}

  async login() {
    if (!this.username || !this.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese un nombre de usuario y contraseña.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    this.serviceDocente.login(this.username, this.password).subscribe(async (loginSuccessful: boolean) => {
      if (loginSuccessful) {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/qr-generator']);
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Usuario o contraseña incorrectos',
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }
}
