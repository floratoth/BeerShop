import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BeerService } from '../shared/data-access/beer.service';
import { Beer } from '../shared/model/beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  beers: Observable<Beer[]>;
  checkedStyleFilterBoxValues: string[] = [];
  checkedMaltFilterBoxValues: string[] = [];
  filterOptionsByStyle: any[] = [
    {
      name: 'Extra Pale',
      isChecked: true,
    },
    {
      name: 'Pale Ale',
      isChecked: true,
    },
    {
      name: 'Maris Otter Extra Pale',
      isChecked: true,
    },
    {
      name: 'Wheat',
      isChecked: true,
    },
    {
      name: 'Propino Pale Malt',
      isChecked: true,
    },
    {
      name: 'Munich',
      isChecked: true,
    },
  ];
  filterOptionsByMalt: any[] = [
    {
      name: 'Contains 0-4 malts',
      value: [0, 4],
    },
    {
      name: 'Contains 2-6 malts',
      value: [2, 6],
    },
    {
      name: 'Contains 4-8 malts',
      value: [4, 8],
    },
    {
      name: 'Contains 6-10 malts',
      value: [6, 10],
    },
    {
      name: 'Contains 8-12 malts',
      value: [8, 12],
    },
  ];
  activeFilters$?: Observable<any[]>;

  constructor(private beerService: BeerService) {
    this.beers = this.beerService.getBeers();
  }

  ngOnInit(): void {}

  onCheckboxValueChange(
    event: Event,
    checkedValues: string[],
    valueType: 'string' | 'array'
  ): void {
    let target = event.target as HTMLInputElement;
    if (target.checked) {
      checkedValues?.push(target.value);
    } else {
      checkedValues?.splice(checkedValues.indexOf(target.value), 1);
    }
    this.beers = this.beers.pipe(
      map((list) => {
        return list.filter((element) => {
          let passedAllFilter: number = 0;
          checkedValues.map((item) => {
            if (valueType === 'string') {
              if (item === element.beer_style) {
                passedAllFilter++;
              }
            }
            if (valueType === 'array') {
              let itemArr = item.split(',');
              if (
                Number(itemArr[0]) <= element.number_of_malt &&
                Number(itemArr[1]) >= element.number_of_malt
              ) {
                passedAllFilter++;
              }
            }
          });
          return passedAllFilter === checkedValues.length;
        });
      })
    );
  }
}
