import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, reduce } from 'rxjs';
import { CartService } from '../shared/data-access/cart.service';
import { cartItem } from '../shared/data-access/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems$: Observable<cartItem[]>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cartContent$;
  }

  helperF(amount: number, item: cartItem): number {
    return amount + item.quantity * item.beer.price;
  }

  ngOnInit(): void {}

/*   decreaseQuantity(beerItem: cartItem, quantity: number): void {
    this.cartService.addBeer(beerItem.beer, beerItem.quantity-1);
    console.log("O-o -")
  }

  incrementQuantity(beerItem: cartItem, quantity: number): void {
    this.cartService.addBeer(beerItem.beer, beerItem.quantity+1);
    console.log("O-O +");
  } */

  onQuantityChanged(value: number, item: cartItem) {
    console.log('onQuantityChanged value: ', value);
    this.cartService.addBeer(item.beer, value);
  }

  onDeleteClicked(id: number) {
    this.cartService.deleteBeer(id);
  }

}
