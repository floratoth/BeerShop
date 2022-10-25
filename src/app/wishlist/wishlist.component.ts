import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BeerService } from '../shared/data-access/beer.service';
import { FavouritesService } from '../shared/data-access/favourites.service';
import { Beer } from '../shared/model/beer';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  beers: Beer[];
  wishList$: Observable<Beer[]>;

  constructor(
    private beerService: BeerService,
    private router: Router,
    private favouritesService: FavouritesService
  ) {
    this.beerService.getBeers().subscribe((beerList) => {
      this.beers = beerList.filter((beer) =>
        this.favouritesService.isFavourite(beer.id)
      );
    });
  }

  ngOnInit(): void {}

  navigateToDetailPage(id: number): void {
    this.router.navigate(['/beers', id]);
  }
}
