import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {
  username: string | null;

  constructor(private router: Router, private authService: AuthService) {
    this.username = this.authService.getUsername();
  }

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  async scanQrCode() {
    try {
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        console.log('Scanned something', result.content);
      }
    } catch (error) {
      console.error('Error scanning', error);
      // Mostrar un mensaje explicando que la camara es necesaria para escanear codigos QR
    }
  }
}