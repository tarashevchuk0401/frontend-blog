import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, throwError} from 'rxjs';
import {articleActions} from './actions';
import {ArticleService} from '../services/article.service';

export const getArticle = createEffect(
  (actions$ = inject(Actions), articleServices = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(articleActions.getArticle),
      switchMap(() => {
        return articleServices.getAllArticles().pipe(
          map((articles) => {
            return articleActions.getArticleSuccess({articles});
          }),
          catchError(() => {
            return of(articleActions.getArticleFailed());
          })
        );
      })
    );
  },
  {functional: true}
);

export const getSingleArticle = createEffect(
  (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(articleActions.getSingleArticle),
      switchMap(({id}) => {
        return articleService.getSingleArticle(id).pipe(
          map((articles) => {
            console.log(articles)
            return articleActions.getSingleArticleSuccess(articles);
          }),
          catchError(() => {
            return of(articleActions.getArticleFailed());
          })
        );
      })
    );
  },
  {functional: true}
);
