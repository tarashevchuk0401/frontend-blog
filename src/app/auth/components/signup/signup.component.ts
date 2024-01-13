import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  
  constructor(private authService: AuthService){}

  ngOnInit(): void {}

  submit(email: string, password: string) {
    this.authService.signUp(email, password).subscribe((d) => console.log(d));
    // this.authService.fetchUserData().pipe(delay(1000)).subscribe(d => console.log(d))
  }
}
