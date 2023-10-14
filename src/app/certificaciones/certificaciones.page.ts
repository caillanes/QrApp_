import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.page.html',
  styleUrls: ['./certificaciones.page.scss'],
})
export class CertificacionesPage {
  nombreCertificado: string = '';
  fechaObtencion: string = '';
  tieneVencimiento: boolean = false;
  fechaVencimiento: string = '';
}