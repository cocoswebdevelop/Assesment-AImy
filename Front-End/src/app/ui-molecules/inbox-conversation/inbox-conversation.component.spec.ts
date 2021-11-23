import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxConversationComponent } from './inbox-conversation.component';

describe('InboxConversationComponent', () => {
  let component: InboxConversationComponent;
  let fixture: ComponentFixture<InboxConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxConversationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
