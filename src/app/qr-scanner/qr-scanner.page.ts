import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {
  username: string | null;

  constructor(private router: Router, private authService: AuthService) {
    // En el constructor, puedes inicializar 'username' con el nombre de usuario.
    this.username = this.authService.getUsername();
  }

  ngOnInit() {
    // Esto es parte del ciclo de vida del componente y se ejecutará cuando el componente esté listo.
    // Aquí también puedes acceder y asignar 'username'.
    this.username = this.authService.getUsername();
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
