import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/data-access/cart.service';
import { Beer } from 'src/app/shared/model/beer';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent implements OnInit {
  @Input() beer: Beer;
  actualQuantity: number = 0;
  totalQuantity?: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onCartButtonClicked(): void {
    let beerFoundInCart = false;
    this.cartService.cartContent$.getValue().map((item) => {
      if (item.beer.id === this.beer?.id) {
        beerFoundInCart = true;
        this.totalQuantity = item.quantity + this.actualQuantity;
        this.cartService.addBeer(this.beer, this.totalQuantity);
      }
    });
    if (!beerFoundInCart) {
      this.cartService.addBeer(this.beer, this.actualQuantity);
    }
  }

  onQuantityChange(value: number): void {
    this.actualQuantity = value;
  }
}
