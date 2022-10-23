import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/data-access/cart.service';
import { Beer } from 'src/app/shared/model/beer';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent implements OnInit {
  @Input() beer?: Beer;
  actualQuantity: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {}

  onCartButtonClicked(): void {
    if (this.beer) {
      this.cartService.addBeer(this.beer, this.actualQuantity);
    }
  }

  onQuantityChange(value: number): void {
    this.actualQuantity = value;
    console.log('actualQuantity',this.actualQuantity);

  }
}
