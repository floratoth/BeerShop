import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesHeartComponent } from './favourites-heart.component';

describe('FavouritesHeartComponent', () => {
  let component: FavouritesHeartComponent;
  let fixture: ComponentFixture<FavouritesHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesHeartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritesHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
