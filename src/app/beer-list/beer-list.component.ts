import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerService } from '../shared/data-access/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Observable<any>;

  constructor(private beerService: BeerService) {
    this.beers = this.beerService.getBeers();
  }

  ngOnInit(): void {
  }



}
