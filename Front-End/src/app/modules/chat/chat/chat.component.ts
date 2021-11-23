import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { chats } from 'src/app/core/interfaces/chats';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
