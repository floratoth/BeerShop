import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  favourites$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>(
    JSON.parse(localStorage.getItem('favourites') || '')
  );

  constructor() {}

  getFavourites(): void {
    let favIdList = JSON.parse(localStorage.getItem('favourites') || '');
    this.favourites$.next(favIdList);
  }

  addFavourite(id: number): void {
    let favIdList = JSON.parse(localStorage.getItem('favourites') || '');
    favIdList.push(id);
    localStorage.setItem('favourites', JSON.stringify(favIdList));
    this.favourites$.next(favIdList);
  }

  removeFavourite(id: number): void {
    let favidList = JSON.parse(localStorage.getItem('favourites') || '');
    let favIdListAfterRemove = favidList.filter((item: number) => item !== id);
    localStorage.setItem('favourites', JSON.stringify(favIdListAfterRemove));
    this.favourites$.next(favIdListAfterRemove);
  }

  isFavourite(id: number): boolean {
    let favIdList = JSON.parse(localStorage.getItem('favourites') || '');
    return favIdList.includes(id);
  }
}
