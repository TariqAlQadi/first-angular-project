import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FeedComponent } from './components/feed/feed.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent },

  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
