import {Injectable} from '@angular/core';
import {firebaseConfig} from '../../../assets/environment/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, catchError, map, tap} from 'rxjs';
import {authRequestInterface} from '../types/authRequest.interface';
import {AuthResponseInterface} from '../types/authResponse.interface';
import {response} from 'express';
import {environment} from '../../../environment/environment';
import {CurrentUserData} from '../../shared/types/currentUser.interface';

@Injectable({
  providedIn: 'root',
  // providedIn: 'platform'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(request: authRequestInterface): Observable<AuthResponseInterface> {
    return this.http
      .post<AuthResponseInterface>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          environment.apiKey,
        request
      )
      .pipe(
        tap((response) => {
          // Set to LocalSttorage
          return localStorage.setItem('token', response.idToken);
        })
      );
  }

  logIn(request: authRequestInterface): Observable<AuthResponseInterface> {
    return this.http
      .post<AuthResponseInterface>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          environment.apiKey,
        request
      )
      .pipe(
        tap((response) => {
          // Set to LocalSttorage
          return localStorage.setItem('token', response.idToken);
        })
      );
  }

  getCurrentUser(): Observable<CurrentUserData> {
    return this.http.post<CurrentUserData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' +
        environment.apiKey,
      {idToken: localStorage.getItem('token')}
    );
  }
}
