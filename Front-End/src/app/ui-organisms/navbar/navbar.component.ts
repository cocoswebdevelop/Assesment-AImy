import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/core/services/calendar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showChatBar : boolean;

  constructor(private _calendar : CalendarService) { }


  ngOnInit(): void {
  }

  openChats(e){
    this.showChatBar = e;
  }

  closeChats(e){
    this.showChatBar = e;
  }

  filterByStaff(e){
    this._calendar.setFilter(e)
  }

  filterByInput(e){
    this._calendar.setInputFilter(e);
  }

}
