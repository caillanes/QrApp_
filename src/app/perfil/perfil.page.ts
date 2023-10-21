import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  correo: string = '';
  nombre: string = '';
  contrasena: string = '';
  nombreGuardado: string = '';
  camposVacios: boolean = false;

  constructor(private location: Location, private authService: AuthService, private alertController: AlertController, private router: Router) {}
  
  volverAtras() {
    this.location.back();
  }
  
  ngOnInit() {
    const userEmail = localStorage.getItem('usuarioCorreo');
    this.correo = userEmail ? userEmail : '';
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  guardarDatos() {
    if (this.nombre.trim() === '' || this.contrasena.trim() === '') {
      this.camposVacios = true;
      this.mostrarAlerta('Los campos no pueden estar vacíos');

      // Arrgeglar el shake
      if (this.nombre.trim() === '') {
        document.getElementById('nombre-input')?.classList.add('shake');
      }
      if (this.contrasena.trim() === '') {
        document.getElementById('contrasena-input')?.classList.add('shake');
      }
    } else {
      this.camposVacios = false;

      // Arrgeglar el shake
      document.getElementById('nombre-input')?.classList.remove('shake');
      document.getElementById('contrasena-input')?.classList.remove('shake');

      console.log('Datos guardados con éxito');
      this.mostrarAlerta('Cambios guardados');
      this.nombreGuardado = this.nombre;
    }
  }

  limpiarCampos() { // Arrgeglar el shake
    this.nombre = '';
    this.contrasena = '';
    this.nombreGuardado = '';
    this.camposVacios = false;

    document.getElementById('nombre-input')?.classList.remove('shake');
    document.getElementById('contrasena-input')?.classList.remove('shake');
  }

  mostrarInformacion() {
    const informacion = `Nombre: ${this.nombreGuardado}\nCorreo: ${this.correo}`;
    this.mostrarAlerta(informacion);
  }
}
