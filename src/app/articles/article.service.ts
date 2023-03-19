import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

  getHero(id: number | string) {
    return this.getArticles().pipe(
      // (+) before `id` turns the string into a number
      map(
        (articles: Article[]) => articles.find((article) => article.id === +id)!
      )
    );
  }
}
