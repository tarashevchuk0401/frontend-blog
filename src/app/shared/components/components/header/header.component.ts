import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Store} from '@ngrx/store';
import {
  selectCurrentUser,
  selectCurrentUserData,
} from '../../../../auth/store/reducers';
import {CurrentUserData} from '../../../types/currentUser.interface';
import {authActions} from '../../../../auth/store/actions';
import {AuthResponseInterface} from '../../../../auth/types/authResponse.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentUser$: AuthResponseInterface | null | undefined;
  currentUserData$: CurrentUserData | null | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser());

    this.store.select(selectCurrentUser).subscribe((d) => {
      this.currentUser$ = d;
    });

    this.store.select(selectCurrentUserData).subscribe((d) => {
      this.currentUserData$ = d;
    });
  }

  logOut() {
    this.store.dispatch(authActions.logOut());
  }

  // data(){
  //   console.log(this.currentUserData$)
  // }
}
