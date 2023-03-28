import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ProductComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'product/:id', component: ProductComponent },

  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
