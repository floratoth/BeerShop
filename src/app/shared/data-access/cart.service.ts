import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, pipe } from 'rxjs';
import { Beer } from '../model/beer';

export type cartItem = {
  quantity: number;
  beer: Beer;
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  /* cartContent$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([]); */
  cartContent$: BehaviorSubject<cartItem[]> = new BehaviorSubject<cartItem[]>(
    []
  );

  constructor() {}

  /*   addBeer(beer: Beer, quantity: number): void {
    let beers = this.cartContent$.getValue();
    for (let i = 0; i < quantity; i++) {
      beers.push(beer);
    }
    console.log('cart: ', beers);
    this.cartContent$.next(beers);
  }

  deleteBeer(id: number): void {
    let beers = this.cartContent$.getValue();
    beers.splice(
      beers.findIndex((beer: Beer) => {
        return id == beer.id;
      }),
      1
    );
    this.cartContent$.next(beers);
  } */

  addBeer(newBeer: Beer, newQuantity: number): void {
    let beers = this.cartContent$.getValue();
    let beerExistInCart: boolean = false;
    beers.map((item) => {
      if (item.beer.id === newBeer.id) {
        item.quantity += newQuantity;
        beerExistInCart = true;
      }
    });
    if (!beerExistInCart) {
      beers.push({ quantity: newQuantity, beer: newBeer });
    }
    this.cartContent$.next(beers);
  }

  deleteBeer(id: number): void {
    let beers = this.cartContent$.getValue();
    beers.map((item, index) => {
      if (item.beer.id === id) {
        beers.splice(index, 1);
      }
    })
    console.log(beers);
    this.cartContent$.next(beers);
  }
}
