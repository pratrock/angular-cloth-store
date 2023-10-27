import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClothComponent } from './edit-cloth.component';

describe('EditClothComponent', () => {
  let component: EditClothComponent;
  let fixture: ComponentFixture<EditClothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditClothComponent]
    });
    fixture = TestBed.createComponent(EditClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
