import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor( private authService: AuthService){}

  submit(){
    this.authService.signUp('test1955@gmail.com', 'we32rtyudf').subscribe(d => console.log(d))
  }
}
