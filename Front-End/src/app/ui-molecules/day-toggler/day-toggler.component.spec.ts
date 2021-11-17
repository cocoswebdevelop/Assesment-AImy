import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTogglerComponent } from './day-toggler.component';

describe('DayTogglerComponent', () => {
  let component: DayTogglerComponent;
  let fixture: ComponentFixture<DayTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
