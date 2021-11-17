import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Output() openChatBar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openChats(){
    this.openChatBar.emit(true);
  }

  openNotifications(){

  }

}
