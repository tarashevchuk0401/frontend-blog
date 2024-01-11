import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  // constructor(private authService: AuthService) {}

  submit(email: string, password: string) {
    // this.authService.signUp(email, password).subscribe((d) => console.log(d));
  }

}
