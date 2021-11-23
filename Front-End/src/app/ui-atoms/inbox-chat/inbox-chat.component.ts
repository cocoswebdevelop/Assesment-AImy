import { Component, Input, OnInit } from '@angular/core';
import { chats } from 'src/app/core/interfaces/chats';

@Component({
  selector: 'app-inbox-chat',
  templateUrl: './inbox-chat.component.html',
  styleUrls: ['./inbox-chat.component.scss']
})
export class InboxChatComponent implements OnInit {

  constructor() { }

  @Input() chat : chats;

  ngOnInit(): void {
  }

}
