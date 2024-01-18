import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {articleActions} from '../../state/actions';
import {selectArticles, selectSingleArticle} from '../../state/reducers';
import {ActivatedRoute} from '@angular/router';
import { Article } from '../../../shared/types/article.interface';

@Component({
  selector: 'app-single-article',
  standalone: true,
  imports: [],
  templateUrl: './single-article.component.html',
  styleUrl: './single-article.component.scss',
})
export class SingleArticleComponent implements OnInit {
  currentId: string = this.activatedRoute.snapshot.params['id'];
  currentArticle: Article | null | undefined = null;

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.store.dispatch(
      articleActions.getSingleArticle({id: this.currentId})
    );

    this.store.select(selectSingleArticle).subscribe((d: Article | null | undefined) => this.currentArticle = d);
  }
}
