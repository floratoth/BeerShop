import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FavouritesService } from '../../data-access/favourites.service';

@Component({
  selector: 'app-favourites-heart',
  templateUrl: './favourites-heart.component.html',
  styleUrls: ['./favourites-heart.component.scss']
})
export class FavouritesHeartComponent implements OnInit {
  @Input() id: number = 1;
  @Input() isFavourite: boolean = false;
  faHeart = faHeart;

  constructor(private favouritesService: FavouritesService) { }

  ngOnInit(): void {
  }

  onAddToFavourites(id: number): void {
    this.isFavourite = true;
    this.favouritesService.addFavourite(id);
  }

  onRemoveFromFavourites(id: number): void {
    this.isFavourite = false;
    this.favouritesService.removeFavourite(id);
  }

}
