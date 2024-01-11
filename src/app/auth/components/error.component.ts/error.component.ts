import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-error',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './error.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {
//   constructor(private authService: AuthService) {}
// /
  submit(email: string, password: string) {
    // this.authService.signUp(email, password).subscribe((d) => console.log(d));
  }

  
}
