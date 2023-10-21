import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicedocenteService {

  private apiUrl = '';//colocar ip + :3000
  public isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  private username: string | null = localStorage.getItem('username');

  constructor(private http: HttpClient) {}

  checkUsername(username: string): Observable<boolean> {
    // Realiza una solicitud HTTP GET a la URL de usuarios para verificar el nombre de usuario.
    return this.http.get<any[]>(`${this.apiUrl}/teachers`).pipe(
      map((teachers: any[]) => {
        // Nombre de usuario existe en la lista de users.
        return teachers.some(teachers => teachers.username === username);
      })
    );
  }

  checkPassword(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/teachers`).pipe(
      map((teachers: any[]) => {
        // Verificar si existe un usuario con el nombre de usuario y contraseña proporcionados.
        return teachers.some(teachers => teachers.username === username && teachers.password === password);
      })
    );
  }
  

  login(username: string, password: string): Observable<boolean> {
    console.log('Intentando iniciar sesión con usuario:', username);
  
    return this.checkUsername(username).pipe(
      switchMap((usernameExists: boolean) => {
        if (usernameExists) {
          return this.checkPassword(username, password);
        } else {
          return of(false); // Usuario no existe
        }
      }),
      switchMap((passwordCorrect: boolean) => {
        if (passwordCorrect) {
          console.log('Autenticación exitosa');
          // Almacena la información en el servicio y en el almacenamiento local.
          this.isAuthenticated = true;
          this.username = username;
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('username', username);
          return of(true);
        } else {
          console.log('Autenticación fallida');
          return of(false);
        }
      }),
      catchError(() => of(false)) // Manejar errores si es necesario
    );
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