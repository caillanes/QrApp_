import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SharedDataService } from '../servicios/shared-data.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.page.html',
  styleUrls: ['./mis-datos.page.scss'],
  animations: [
    trigger('animacionTitulo', [
      state('center', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('right', style({
        transform: 'translateX(100%)',
        opacity: 0.2
      })),
      state('left', style({
        transform: 'translateX(-100%)',
        opacity: 0.2
      })),
      transition('center <=> right', [
        animate('2.5s')
      ]),
      transition('right <=> center', [
        animate('2.5s')
      ]),
      transition('center <=> left', [
        animate('2.5s')
      ]),
      transition('left <=> center', [
        animate('2.5s')
      ]),
    ]),
    trigger('inputAnimation', [
      state('right', style({
        transform: 'translateX(100%)'
      })),
      transition('* <=> right', [
        animate('1s')
      ]),
    ])
  ]
})
export class MisDatosPage {
  user: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = 'primaria';
  fechaNacimiento: string = '';
  titleState: string = 'center';
  inputState: string = '';

  constructor(
    private alertController: AlertController,
    private sharedData: SharedDataService // Inyecta el servicio
  ) {
    this.user = this.sharedData.username; // Obtiene el nombre de usuario desde el servicio
    this.animacionTitulo(); // Inicia la animación del título
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = 'primaria';
    this.fechaNacimiento = '';

    this.inputState = 'right';
    setTimeout(() => {
      this.inputState = '';
    }, 1000);
  }

  async mostrarInformacion() {
    if (this.nombre && this.apellido) {
      const alert = await this.alertController.create({
        header: 'Información',
        message: `Nombre: ${this.nombre} ${this.apellido}`,
        buttons: ['Cerrar'],
      });

      alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debes ingresar el nombre y el apellido.',
        buttons: ['Cerrar'],
      });

      alert.present();
    }
  }

  animacionTitulo() {
    setInterval(() => {
      if (this.titleState === 'center') {
        this.titleState = 'right';
      } else if (this.titleState === 'right') {
        this.titleState = 'left';
      } else if (this.titleState === 'left') {
        this.titleState = 'center';
      }
    }, 2500);
  }
}