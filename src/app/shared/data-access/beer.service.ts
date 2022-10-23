import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Beer } from '../model/beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private url: string = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';
  private beers?: Beer[];

  constructor(private http: HttpClient) {
    this.getBeers().subscribe((item) => {
      this.beers = item;
      console.log('beers in service:', this.beers);
    });
  }

  getBeers(): Observable<Beer[]> {
    return this.http.get<any[]>(this.url).pipe(
      map((beerList) => {
        return beerList.map((beer) => {
          const newBeer: Beer = {
            id: beer.id,
            name: beer.name,
            badge: true,
            image_url: beer.image_url,
            beer_style: beer.ingredients.malt[0].name,
            contributor: beer.contributed_by.split(' ').slice(0, -1).join(' '),
            price: this.getRandomNumberBetween(5, 12),
            content: this.getRandomNumberBetween(0.2, 1),
            number_of_malt: beer.ingredients.malt.length,
            description: beer.description,
            abv: beer.abv,
            tagline: beer.tagline,
            food_pairing: beer.food_pairing,
            brewers_tips: beer.brewers_tips,
          };
          return newBeer;
        });
      })
    );
  }

  getRandomNumberBetween(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }

  getBeer(id: string): Observable<Beer> {
    return this.http.get<any>(`https://api.punkapi.com/v2/beers/${id}`).pipe(
      map((beer) => {
        const selectedBeer: Beer = {
          id: beer[0].id,
          name: beer[0].name,
          badge: true,
          image_url: beer[0].image_url,
          beer_style: beer[0].ingredients.malt[0].name,
          contributor: beer[0].contributed_by.split(' ').slice(0, -1).join(' '),
          price: this.getRandomNumberBetween(5, 12),
          content: this.getRandomNumberBetween(0.2, 1),
          number_of_malt: beer[0].ingredients.malt.length,
          description: beer[0].description,
          abv: beer[0].abv,
          tagline: beer[0].tagline,
          food_pairing: beer[0].food_pairing,
          brewers_tips: beer[0].brewers_tips,
        };
        return selectedBeer;
      })
    );
  }
}
