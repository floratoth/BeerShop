import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {
  @Input() beerStyle?: string;
  @Input() beerName?: string;
  @Input() beerDesc?: string;
  @Input() imageUrl?: string;
  @Input() price?: number;
  @Input() content?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
