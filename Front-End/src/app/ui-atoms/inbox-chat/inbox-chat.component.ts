import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { chats } from 'src/app/core/interfaces/chats';


@Component({
  selector: 'app-inbox-chat',
  templateUrl: './inbox-chat.component.html',
  styleUrls: ['./inbox-chat.component.scss']
})
export class InboxChatComponent implements OnInit {
  selectedChat : number;
  constructor() { }

  @Input() chat : chats;
  @Output() currentSelectedChat = new EventEmitter<any>();

  ngOnInit(): void {

  }

  selectChat(id){
    this.currentSelectedChat.emit(id);
  }

}
