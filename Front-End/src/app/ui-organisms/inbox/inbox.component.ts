import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { chats } from 'src/app/core/interfaces/chats';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  chats: Array<chats>
  currentConversation: number;

  constructor(private _chats : ChatService) { }


  async ngOnInit(): Promise<void> {
    this.chats = await this._chats.getChats();
  }

  setNewConversation(e){
    this.currentConversation = e;
  }

}
