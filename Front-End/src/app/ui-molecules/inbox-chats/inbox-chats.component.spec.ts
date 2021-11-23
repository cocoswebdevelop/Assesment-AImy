import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxChatsComponent } from './inbox-chats.component';

describe('InboxChatsComponent', () => {
  let component: InboxChatsComponent;
  let fixture: ComponentFixture<InboxChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxChatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
