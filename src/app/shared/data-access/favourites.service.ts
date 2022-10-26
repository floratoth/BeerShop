import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  favourites = localStorage.getItem('favourites');
  startValue = this.favourites ? JSON.parse(this.favourites) : [];
  favourites$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>(
    this.startValue
  );

  constructor() {}

  getFavourites(): void {
    let favJson = localStorage.getItem('favourites');
    console.log('favJson', favJson);

    if (favJson !== null) {
      let favIdList = JSON.parse(favJson);
      this.favourites$.next(favIdList);
    }
  }

  addFavourite(id: number): void {
    let favJson = localStorage.getItem('favourites');
    let favIdList;
    if (favJson !== null) {
      favIdList = JSON.parse(favJson);
    } else {
      favIdList = [];
    }
    favIdList.push(id);
    localStorage.setItem('favourites', JSON.stringify(favIdList));
    this.favourites$.next(favIdList);
  }

  removeFavourite(id: number): void {
    let favJson = localStorage.getItem('favourites');
    if (favJson !== null) {
      let favidList = JSON.parse(favJson);
      let favIdListAfterRemove = favidList.filter(
        (item: number) => item !== id
      );
      localStorage.setItem('favourites', JSON.stringify(favIdListAfterRemove));
      this.favourites$.next(favIdListAfterRemove);
    }
  }

  isFavourite(id: number): boolean {
    let favJson = localStorage.getItem('favourites');
    return favJson !== null ? JSON.parse(favJson).includes(id) : false;
  }
}
