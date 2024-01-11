import { Injectable } from '@angular/core';
import { firebaseConfig } from '../../../assets/environment/environment';
import {HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { authRequestInterface } from '../types/authRequest.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
  // providedIn: 'platform'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string): Observable<any> {
    const request : any = {
      email: email,
      password: password,
      returnSecureToken: false
    }

    // return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    // return this.http.post('https://dafsfsf', request)

    return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAoMkeQIVjqd_NhkWt0wA_Sgl4nCFzfIzc',request );
  
  }
}
