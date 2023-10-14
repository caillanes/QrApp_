import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  navigateToCertifications() {
    this.router.navigate(['/certificaciones']);
  }

  navigateToExperience() {
    this.router.navigate(['/experiencia-laboral']);
  }

  navigateToMyData() {
    this.router.navigate(['/mis-datos']);
  }

  logout() {

    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');

    this.router.navigate(['/login']);
  }
  
}
