import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../model/beer';

export type cartItem = {
  quantity: number;
  beer: Beer;
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartContent$: BehaviorSubject<cartItem[]> = new BehaviorSubject<cartItem[]>(
    []
  );
  itemsPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  addBeer(newBeer: Beer, newQuantity: number): void {
    let beers = this.cartContent$.getValue();
    let beerExistInCart: boolean = false;
    beers.map((item) => {
      if (item.beer.id === newBeer.id) {
        item.quantity = newQuantity;
        beerExistInCart = true;
      }
    });
    if (!beerExistInCart) {
      beers.push({ quantity: newQuantity, beer: newBeer });
    }
    this.cartContent$.next(beers);
    this.changePrice(beers);
  }

  deleteBeer(id: number): void {
    let beers = this.cartContent$.getValue();
    beers.map((item, index) => {
      if (item.beer.id === id) {
        beers.splice(index, 1);
      }
    });
    this.cartContent$.next(beers);
    this.changePrice(beers);
  }

  changePrice(itemList: cartItem[]): void {
    let totalPrice;
    let beerPrice;
    totalPrice = itemList.reduce((total, curr) => {
      beerPrice = curr.quantity * curr.beer.price;
      return total + beerPrice;
    }, 0);
    this.itemsPrice$.next(totalPrice);
  }
}
