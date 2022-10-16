import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerCardComponent } from './shared/UI/beer-card/beer-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerListComponent } from './beer-list/beer-list.component';
import { NavbarComponent } from './shared/feature/navbar/navbar.component';
import { SearchBarComponent } from './shared/UI/search-bar/search-bar.component';
import { NavMenuItemComponent } from './shared/UI/nav-menu-item/nav-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerCardComponent,
    BeerListComponent,
    NavbarComponent,
    SearchBarComponent,
    NavMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
