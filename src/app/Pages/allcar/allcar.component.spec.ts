import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcarComponent } from './allcar.component';

describe('AllcarComponent', () => {
  let component: AllcarComponent;
  let fixture: ComponentFixture<AllcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllcarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
