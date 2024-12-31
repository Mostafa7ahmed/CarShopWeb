import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeusComponent } from './weus.component';

describe('WeusComponent', () => {
  let component: WeusComponent;
  let fixture: ComponentFixture<WeusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
