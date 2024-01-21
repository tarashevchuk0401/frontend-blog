import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {articleActions} from '../../state/actions';
import {
  selectArticles,
  selectIsLoading,
  selectSingleArticle,
} from '../../state/reducers';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../../shared/types/article.interface';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-single-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-article.component.html',
  styleUrl: './single-article.component.scss',
})
export class SingleArticleComponent implements OnInit {
  currentId: string = this.activatedRoute.snapshot.params['id'];
  currentArticle: Article | null | undefined = null;
  isLoading: boolean = true;

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(articleActions.getSingleArticle({id: this.currentId}));

    this.store
      .select(selectSingleArticle)
      .subscribe((d: Article | null | undefined) => (this.currentArticle = d));

    this.store.select(selectIsLoading).subscribe((d) => (this.isLoading = d));
  }
}
