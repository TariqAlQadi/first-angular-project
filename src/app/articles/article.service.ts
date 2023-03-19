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

  getHeroes(): Observable<Article[]> {
    return of(ARTICLES);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      map((heroes: Article[]) => heroes.find((hero) => hero.id === +id)!)
    );
  }
}
