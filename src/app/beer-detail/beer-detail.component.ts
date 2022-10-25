import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BeerService } from '../shared/data-access/beer.service';
import { Beer } from '../shared/model/beer';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
  id?: number;
  beer$: Observable<Beer>;

  constructor(private route: ActivatedRoute, private beerService: BeerService) {
    this.beer$ = this.route.params.pipe(
      switchMap((params: Params) => {
        let id = params['id'];
        return this.beerService.getBeer(id);
      })
    );
  }

  ngOnInit(): void {}
}
