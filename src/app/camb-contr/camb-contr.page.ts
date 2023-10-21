import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-camb-contr',
  templateUrl: './camb-contr.page.html',
  styleUrls: ['./camb-contr.page.scss'],
})
export class CambContrPage {
  email: string = '';

  constructor(private router: Router, public alertController: AlertController) {}

  enviar() {
    console.log('Correo ingresado: ', this.email); // Agregar esta línea para depurar
    if (this.email) {
      // Verifica si el campo de correo no está vacío
      // Si no está vacío, redirige a la página de inicio
      this.router.navigate(['/home']);
    } else {
      // Si el campo de correo está vacío, muestra una alerta de error
      this.mostrarAlerta('Por favor, ingrese un correo.');
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
