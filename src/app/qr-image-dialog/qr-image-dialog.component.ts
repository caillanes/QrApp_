import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-image-dialog',
  templateUrl: './qr-image-dialog.component.html',
})
export class QrImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);  // Añade esta línea
  }
}