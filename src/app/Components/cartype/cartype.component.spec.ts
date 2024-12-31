import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartypeComponent } from './cartype.component';

describe('CartypeComponent', () => {
  let component: CartypeComponent;
  let fixture: ComponentFixture<CartypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
