import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { chats } from 'src/app/core/interfaces/chats';
@Component({
  selector: 'app-bar-chat',
  templateUrl: './bar-chat.component.html',
  styleUrls: ['./bar-chat.component.scss']
})
export class BarChatComponent implements OnInit {

  constructor() { }

  @Input() chat : chats;
  @Output() closeBar : EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }


  closeChatBar(){
    this.closeBar.emit(false);
  }


  openChat(chatId){
    
  }
}
