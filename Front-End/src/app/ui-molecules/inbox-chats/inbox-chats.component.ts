import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { chats } from 'src/app/core/interfaces/chats';

@Component({
  selector: 'app-inbox-chats',
  templateUrl: './inbox-chats.component.html',
  styleUrls: ['./inbox-chats.component.scss']
})
export class InboxChatsComponent implements OnChanges {

  constructor() { }

  @Input() chats : Array<chats>;
  @Output() setNewChat = new EventEmitter<any> ();
  ngOnChanges(): void {
    this.chats = this.chats;
  }

  selectNewChat(e){
    this.setNewChat.emit(e);
  }
}
