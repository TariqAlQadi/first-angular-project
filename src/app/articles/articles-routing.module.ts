import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const articlesRoutes: Routes = [
  {
    path: 'articles',
    redirectTo: '/allArticles',
  },
  {
    path: 'articles/:id',
    redirectTo: '/allArticles/:id',
  },
  {
    path: 'allArticles',
    component: ArticleListComponent,
    data: {},
  },
  {
    path: 'allArticles/:id',
    component: ArticleDetailComponent,
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
