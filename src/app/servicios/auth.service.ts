import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://192.168.1.83:3000';
  public isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  private username: string | null = localStorage.getItem('username');

  constructor(private http: HttpClient) {}

  // Nuevo método para verificar el nombre de usuario en la base de datos
  checkUsername(username: string): Observable<boolean> {
    // Realiza una solicitud HTTP GET a la URL de usuarios para verificar el nombre de usuario.
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map((users: any[]) => {
        // Comprueba si el nombre de usuario existe en la lista de usuarios.
        return users.some(user => user.username === username);
      })
    );
  }

  login(username: string, password: string): Observable<boolean> {
    console.log('Intentando iniciar sesión con usuario:', username);
  
    this.checkUsername(username).subscribe((exists) => {
      if (exists && /^\d{4}$/.test(password)) {
        console.log('Autenticación exitosa');
        // Almacena la información en el servicio y en el Local Storage.
        this.isAuthenticated = true;
        this.username = username;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', username);
        return true;
      } else {
        console.log('Autenticación fallida');
        return false;
      }
    });
  
    // Devuelve un Observable aquí (puede ser de `of(false)` en caso de error).
    return of(false);
  }
  
  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Método para obtener el nombre de usuario autenticado
  getUsername(): string | null {
    return this.username;
  }
  
  logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
  }

}
