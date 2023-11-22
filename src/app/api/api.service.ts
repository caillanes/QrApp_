import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fake-api-sage.vercel.app'; //colocar ip + :3000

  constructor(private http: HttpClient) {}

  getUserName(userId: number): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`).pipe(
      map((user: any) => user.username)
    );
  }

  getPassWord(userId: number): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`).pipe(
      map((user: any) => user.password)
    );
  }

  checkEmail(email: string): Observable<boolean> {
    // Realiza una solicitud HTTP GET a la URL de usuarios para verificar el nombre de usuario.
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map((users: any[]) => {
        // Nombre de usuario existe en la lista de users.
        return users.some(user => user.email === email);
      })
    );
  }

  checkEmailDos(email: string): Observable<boolean> {
    // Realiza una solicitud HTTP GET a la URL de usuarios para verificar el nombre de usuario.
    return this.http.get<any[]>(`${this.apiUrl}/teachers`).pipe(
      map((teachers: any[]) => {
        // Nombre de usuario existe en la lista de users.
        return teachers.some(teachers => teachers.email === email);
      })
    );
  }
  
  EnviarUno(email: string): Observable<boolean> {
    console.log('email...', email);
  
    return this.checkEmail(email).pipe(
      switchMap((emailExists: boolean) => {
        if (emailExists) {
          return this.checkEmailDos(email);
        } else {
          return of(false); // email no existe
        }
      })
    );
  }
}  
        
  

