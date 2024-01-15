import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../../shared/types/article.interface';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {articleActions} from '../../state/actions';
import {ArticlesStateInterface, selectArticles} from '../../state/reducers';

@Component({
  selector: 'app-global-feeds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-feeds.component.html',
  styleUrl: './global-feeds.component.scss',
})
export class GlobalFeedsComponent implements OnInit {
  allArticle: Array<Article> | null | undefined;
  test: string = 'https://firebasestorage.googleapis.com/v0/b/frontend-blog-angular.appspot.com/o/s?alt=media&token=5cdf3de5-2769-4dc6-a38a-bf00fc510e20'

  constructor(
    private articleService: ArticleService,
    private store: Store<{article: ArticlesStateInterface}>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(articleActions.getArticle());
    
    this.store.select(selectArticles).subscribe((articles) => {
      this.allArticle = articles;
      console.log(this.allArticle)
    });
  }

}
