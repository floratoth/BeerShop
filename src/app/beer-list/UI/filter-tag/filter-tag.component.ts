import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BeerService } from 'src/app/shared/data-access/beer.service';

@Component({
  selector: 'app-filter-tag',
  templateUrl: './filter-tag.component.html',
  styleUrls: ['./filter-tag.component.scss'],
})
export class FilterTagComponent implements OnInit {
  @Input() filterText!: string;


  constructor(private beerService: BeerService) {
  }

  ngOnInit(): void {}

  onCloseFilterClicked(): void {

  }
}
