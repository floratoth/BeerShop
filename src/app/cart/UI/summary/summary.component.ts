import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/data-access/cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

  price$: Observable<number>;
  vat: number = 0;
  shippingPrice: number = 0;
  total: number = 0;

  constructor(private cartService: CartService) {
    this.price$ = this.cartService.itemsPrice$;
    this.price$.subscribe((price) => {
      price > 0 ? (this.vat = 2) : (this.vat = 0);
      (price + this.vat) > 500 || !price
        ? (this.shippingPrice = 0)
        : (this.shippingPrice = 10);
      this.total = price + this.vat + this.shippingPrice;
    });
  }

  ngOnInit(): void {}
}
