import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {BackendErrorMessages} from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';
import {AuthStateInterface} from '../../types/authState.interface';
import { Store } from '@ngrx/store';
import { selectValidationErrors } from '../../store/reducers';
import { authActions } from '../../store/actions';
import { authRequestInterface } from '../../types/authRequest.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, BackendErrorMessages],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private store: Store<{auth: AuthStateInterface}>
  ) {}

  backendErrors$ = this.store.select(selectValidationErrors);

  submit(email: string, password: string) {

    const request: authRequestInterface = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    
    this.store.dispatch(authActions.logIn({request}))

    ///// REFACTOR THAT
    setTimeout(() => {
      this.store.dispatch(authActions.getCurrentUser())
    },500)
  }
}
