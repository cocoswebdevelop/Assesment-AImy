import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSComponent } from './input-s.component';

describe('InputSComponent', () => {
  let component: InputSComponent;
  let fixture: ComponentFixture<InputSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
