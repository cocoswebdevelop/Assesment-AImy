import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDropdownLComponent } from './button-dropdown-l.component';

describe('ButtonDropdownLComponent', () => {
  let component: ButtonDropdownLComponent;
  let fixture: ComponentFixture<ButtonDropdownLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDropdownLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDropdownLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
