import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLComponent } from './input-l.component';

describe('InputLComponent', () => {
  let component: InputLComponent;
  let fixture: ComponentFixture<InputLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
