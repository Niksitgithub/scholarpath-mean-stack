import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = '/api/auth';

  constructor(private http: HttpClient) {}

  register(userData: any) {

    return this.http.post(`${this.apiUrl}/register`, userData).pipe(

      tap((res: any) => {

        localStorage.setItem('token', res.token);

        localStorage.setItem(
          'student',
          JSON.stringify(res.student)
        );

      })

    );

  }

  login(userData: any) {

    return this.http.post(`${this.apiUrl}/login`, userData).pipe(

      tap((res: any) => {

        localStorage.setItem('token', res.token);

        localStorage.setItem(
          'student',
          JSON.stringify(res.student)
        );

      })

    );

  }

  logout() {

    localStorage.clear();

  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem('token');

  }

}