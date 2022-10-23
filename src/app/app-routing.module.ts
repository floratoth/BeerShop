import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerListComponent } from './beer-list/beer-list.component';

const routes: Routes = [
  {
    path: 'beers',
    component: BeerListComponent,
  },
  {
    path: 'beers/:id',
    component: BeerDetailComponent,
  },
  {
    path: 'cart',
    component: BeerListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'beers',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
