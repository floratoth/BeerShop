import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../shared/data-access/cart.service';
import { cartItem } from '../shared/data-access/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<cartItem[]>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cartContent$;
  }

  ngOnInit(): void {
  }

}
