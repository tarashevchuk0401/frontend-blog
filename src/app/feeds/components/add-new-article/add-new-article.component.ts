import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-article',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './add-new-article.component.html',
  styleUrl: './add-new-article.component.scss'
})
export class AddNewArticleComponent {
  addNewArticle(form: NgForm){
    console.log(form.value)
  }
}
