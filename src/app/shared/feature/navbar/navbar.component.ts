import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogoClicked(): void {
    this.router.navigate(['/beers']);
  }

  onCartClicked(): void {
    this.router.navigate(['/cart']);
  }

  onWishlistClicked(): void {
    this.router.navigate(['/wishlist']);
  }
}
