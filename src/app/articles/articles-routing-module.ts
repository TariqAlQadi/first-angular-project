import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const articlesRoutes: Routes = [
  {
    path: 'articles',
    redirectTo: 'allArticles',
  },
  {
    path: 'article/:id',
    redirectTo: '',
  },
  {
    path: 'allArticles',
    redirectTo: '',
    component: ArticleListComponent,
  },
  {
    path: 'article/:id',
    redirectTo: '',
    component: ArticleDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
