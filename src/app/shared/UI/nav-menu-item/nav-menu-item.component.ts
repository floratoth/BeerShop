import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu-item',
  templateUrl: './nav-menu-item.component.html',
  styleUrls: ['./nav-menu-item.component.scss'],
})
export class NavMenuItemComponent implements OnInit {
  @Input() title?: string;
  @Input() iconSrc?: string;

  constructor() {}

  ngOnInit(): void {}
}
