import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../../shared/types/article.interface';
import { nanoid } from 'nanoid'
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { AuthResponseInterface } from '../../../auth/types/authResponse.interface';
import { authActions } from '../../../auth/store/actions';


@Component({
  selector: 'app-add-new-article',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './add-new-article.component.html',
  styleUrl: './add-new-article.component.scss'
})
export class AddNewArticleComponent implements OnInit {

  currentUser : AuthResponseInterface| undefined | null;

  constructor(private articleService: ArticleService, private store: Store){}

  ngOnInit(): void {
     this.store.select(selectCurrentUser).subscribe(d => this.currentUser = d);
    
  }

  addNewArticle(form: NgForm){
    if(!this.currentUser){
      return
    }
    const newArticle: Article = {
      title: form.value.title,
      body: form.value.body,
      author: this.currentUser.localId,
      createdAt: new Date(),
      likesQuantity: 0,
      isLikedByUser: false,
      id: nanoid(),
      tags : ['firstTag'],
      updatedAt: undefined
    } 
    this.articleService.addNewArticle(newArticle).subscribe((d: Article) => console.log(d))
  }
}
