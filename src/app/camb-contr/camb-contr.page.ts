import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-camb-contr',
  templateUrl: './camb-contr.page.html',
  styleUrls: ['./camb-contr.page.scss'],
})
export class CambContrPage {
  email: string = '';

  constructor(
    private router: Router, 
    public alertController: AlertController,
    private apiService: ApiService // Inyecta el ApiService
  ) {}

  enviar() {
    console.log('Correo ingresado: ', this.email);
    if (this.isEmailValid(this.email)) {
      // Obtén el ID de usuario a partir del correo electrónico
      this.apiService.getUserId(this.email).subscribe((userId: number) => {
        if (userId !== null) {
          // Usa el ID de usuario para obtener la contraseña
          this.apiService.getPassWord(userId).subscribe(
            (response: any) => {
              console.log(response);
              this.router.navigate(['/home']);
            },
            (error: any) => {
              console.log(error);
              this.mostrarAlerta('Ha ocurrido un error al intentar resetear la contraseña.');
            }
          );
        } else {
          this.mostrarAlerta('No se encontró un usuario con ese correo electrónico.');
        }
      });
    } else {
      this.mostrarAlerta('Por favor, ingrese un correo válido.');
    }
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  isEmailValid(email: string): boolean {
    return email.includes('@') && email.includes('.');
  }
}