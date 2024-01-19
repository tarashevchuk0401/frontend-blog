import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './shared/components/components/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './shared/components/components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/actions';
import { LoginComponent } from './auth/components/login/login.component';
// import { TestComponent } from './auth/components/test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    SidebarComponent,
    MatIconModule,
    HeaderComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontendblog';

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser())

  }


}
