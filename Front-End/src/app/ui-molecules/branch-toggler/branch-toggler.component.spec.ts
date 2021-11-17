import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchTogglerComponent } from './branch-toggler.component';

describe('BranchTogglerComponent', () => {
  let component: BranchTogglerComponent;
  let fixture: ComponentFixture<BranchTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
