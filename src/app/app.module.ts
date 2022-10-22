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
import { CheckboxComponent } from './beer-list/UI/checkbox/checkbox.component';
import { FilterBarComponent } from './beer-list/UI/filter-bar/filter-bar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterTagComponent } from './beer-list/UI/filter-tag/filter-tag.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerCardComponent,
    BeerListComponent,
    NavbarComponent,
    SearchBarComponent,
    NavMenuItemComponent,
    CheckboxComponent,
    FilterBarComponent,
    FilterTagComponent,
    BeerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
