import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() id?: number;
  @Output() cardClicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onCardClicked(): void {
    this.cardClicked.emit(this.id);
  }
}
