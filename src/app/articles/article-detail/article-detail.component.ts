import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  articles!: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ArticleService
  ) {}

  ngOnInit() {
    // this.article$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.service.getHero(params.get('id')!))
    // );
  }

  gotoArticles(article: Article) {
    const articleId = article ? article.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/superheroes', { id: articleId, foo: 'foo' }]);
  }
}
