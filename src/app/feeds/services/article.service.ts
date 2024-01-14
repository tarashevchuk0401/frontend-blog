import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Article} from '../../shared/types/article.interface';
import {Observable, catchError, map, throwError, toArray} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  addNewArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(
      'https://frontend-blog-angular-default-rtdb.europe-west1.firebasedatabase.app/articles/' +
        article.id +
        '/.json',
      article
    );
  }

  getAllArticles(): Observable<Array<Article>> {
    return this.http
      .get<Array<Article>>(
        'https://frontend-blog-angular-default-rtdb.europe-west1.firebasedatabase.app/articles.json'
      )
      .pipe(map((item) => Object.values(item), toArray()));
  }
}
