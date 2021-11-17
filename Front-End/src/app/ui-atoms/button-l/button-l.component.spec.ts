import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLComponent } from './button-l.component';

describe('ButtonLComponent', () => {
  let component: ButtonLComponent;
  let fixture: ComponentFixture<ButtonLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
