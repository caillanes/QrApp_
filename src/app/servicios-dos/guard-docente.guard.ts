import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicedocenteService } from './servicedocente.service';

@Injectable({
  providedIn: 'root'
})
export class GuardDocenteGuard implements CanActivate {
  constructor(private serviceDocente: ServicedocenteService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.serviceDocente.isLoggedIn()) {
      return true; // El docente está autenticado y tiene acceso a la ruta.
    } else {
      // El docente no está autenticado, redirige a la página de inicio de sesión de docentes solo si no está intentando acceder a esa página.
      if (state.url !== '/home') {
        return this.router.parseUrl('/home');
      } else {
        return true; // Permite el acceso a la página de inicio de sesión de docentes.
      }
    }
  }
}
