import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUserData } from '../../../../auth/store/reducers';
import { CurrentUserData } from '../../../types/currentUser.interface';
import { authActions } from '../../../../auth/store/actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentUser$ : CurrentUserData| null | undefined;


    constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser())
    this.store.select(selectCurrentUserData).subscribe(d => {
      this.currentUser$ = d
      console.log(this.currentUser$)  
    })
  }

}
