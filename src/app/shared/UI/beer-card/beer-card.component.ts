import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CartService } from '../../data-access/cart.service';
import { FavouritesService } from '../../data-access/favourites.service';
import { Beer } from '../../model/beer';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
})
export class BeerCardComponent implements OnInit {
  @Input() beerStyle?: string;
  @Input() beerName?: string;
  @Input() beerDesc?: string;
  @Input() imageUrl?: string;
  @Input() price?: number;
  @Input() content?: number;
  @Input() id: number;
  @Input() beer: Beer;
  @Output() cardClicked = new EventEmitter<number>();
  @Output() valueChanged: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('input') myDiv?: ElementRef<HTMLInputElement>;
  inputValue: number;
  totalQuantity?: number;

  constructor(public favouritesService: FavouritesService, private cartService: CartService) {}

  ngOnInit(): void {}

  onCardClicked(): void {
    this.cardClicked.emit(this.id);
  }

  onQuantityChange() {
    this.inputValue = Number(this.myDiv?.nativeElement.value);
    let beerFoundInCart = false;
    this.cartService.cartContent$.getValue().map((item) => {
      if (item.beer.id === this.id) {
        beerFoundInCart = true;
        this.totalQuantity = item.quantity + this.inputValue;
        this.cartService.addBeer(this.beer, this.totalQuantity);
      }
    })
    if (!beerFoundInCart) {
      this.cartService.addBeer(this.beer, this.inputValue);
    }
  }
}
