import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { chats } from 'src/app/core/interfaces/chats';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.scss']
})
export class ChatBarComponent implements OnInit {
  chats : Array<chats>;
  
  constructor(
    private _chats : ChatService,
    private _router : Router) { }

  @Output() closeBar : EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.getChats();
  }

  async getChats(): Promise<void>{
    this.chats = await this._chats.getChats();
  }

  navigateToChats(){
    this.closeChatBar();
    this._router.navigate(['/chats']);
  }

  closeChatBar(){
    this.closeBar.emit(false);
  }
}

