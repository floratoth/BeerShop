import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';

const routes: Routes = [
  {
    path: 'beers',
    component: BeerListComponent,
    children: [
      {
        path: ':id',
        component: BeerListComponent,
      },
    ],
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
