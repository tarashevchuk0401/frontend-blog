import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../../shared/types/article.interface';
import { nanoid } from 'nanoid'


@Component({
  selector: 'app-add-new-article',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './add-new-article.component.html',
  styleUrl: './add-new-article.component.scss'
})
export class AddNewArticleComponent {

  constructor(private articleService: ArticleService){}

  addNewArticle(form: NgForm){
    console.log(form.value);

    const newArticle: Article = {
      title: form.value.title,
      body: form.value.body,
      author: 'string',
      createdAt: new Date(),
      likesQuantity: 0,
      isLikedByUser: false,
      id: nanoid(),
      tags : ['firstTag'],
      updatedAt: undefined
    } 
    this.articleService.addNewArticle(newArticle).subscribe(d => console.log(d))
  }
}
