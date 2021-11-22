import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { staff } from 'src/app/core/interfaces/staff';
import { CalendarService } from 'src/app/core/services/calendar.service';

@Component({
  selector: 'app-calendar-filters',
  templateUrl: './calendar-filters.component.html',
  styleUrls: ['./calendar-filters.component.scss']
})
export class CalendarFiltersComponent implements OnInit {
  staffData : Array<staff>

  constructor(private _calendar : CalendarService) { }

  @Output() filterByStaff = new EventEmitter<number>();

  ngOnInit(): void {
    this.getStaffMembers();
  }

  async getStaffMembers(){
    this.staffData = await this._calendar.getStaff();
  }

  showStaff(){

  }

  setNewCalendarFilter(id){
    this.filterByStaff.emit(id);
  }


}
