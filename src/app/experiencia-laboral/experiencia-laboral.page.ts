import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.page.html',
  styleUrls: ['./experiencia-laboral.page.scss'],
})
export class ExperienciaLaboralPage {
  empresa: string = '';
  anoInicio: number | null = null;
  trabajaActualmente: boolean = false;
  anoTermino: number | null = null;
  cargo: string = '';
}