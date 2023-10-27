import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClothesComponent } from './show-clothes.component';

describe('ShowClothesComponent', () => {
  let component: ShowClothesComponent;
  let fixture: ComponentFixture<ShowClothesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowClothesComponent]
    });
    fixture = TestBed.createComponent(ShowClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
