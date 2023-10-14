import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://192.168.72.1:3000';

  constructor(private http: HttpClient) {}

  getUserName(userId: number): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`).pipe(
      map((user: any) => user.username)
    );
  }
}
