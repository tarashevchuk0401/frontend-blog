import {Component, OnInit, inject} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {delay, map, tap} from 'rxjs';
import {authRequestInterface} from '../../types/authRequest.interface';
import {Store} from '@ngrx/store';
import {AuthStateInterface} from '../../types/authState.interface';
import {authActions} from '../../store/actions';
import {selectValidationErrors} from '../../store/reducers';
import {BackendErrorMessages} from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, BackendErrorMessages],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private store: Store<{auth: AuthStateInterface}>
  ) {}

  backendErrors$ = this.store.select(selectValidationErrors);

  ngOnInit(): void {}

  submit(email: string, password: string) {
    const request: authRequestInterface = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    this.store.dispatch(authActions.signUp({request}));
    ///// REFACTOR THAT
    setTimeout(() => {
      this.store.dispatch(authActions.getCurrentUser());
    }, 500);
  }
}
