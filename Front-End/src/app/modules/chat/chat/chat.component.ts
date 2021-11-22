import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  @Output() closeBar : EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }

  closeChatBar(){
    this.closeBar.emit(false);
  }
}
