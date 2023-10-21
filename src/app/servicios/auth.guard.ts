import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true; // El usuario está autenticado y tiene acceso a la ruta.
    } else {
      // El usuario no está autenticado, redirige a la página de inicio de sesión solo si no está intentando acceder al inicio de sesión.
      if (state.url !== '/home') {
        return this.router.parseUrl('/home');
      } else {
        return true; // Permite el acceso a la página de inicio de sesión.
      }
    }
  }
}

