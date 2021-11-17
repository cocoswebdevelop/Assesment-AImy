import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appointments } from '../interfaces/appointments';
import { calendarData } from '../interfaces/calendarData';
import { staff } from '../interfaces/staff';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private _http : HttpClient) { }

  async getStaff(){
    const data = await this._http.get<Array<staff>>('./assets/data/staff.json').toPromise();
    return data;
  }

  async getGlobalCalendarData(){
    const appointments = await this._http.get<Array<appointments>>('./assets/data/appointments.json').toPromise();
    const staff = await this._http.get<Array<staff>>('./assets/data/staff.json').toPromise();
    const calendarData = this.renderGlobalCalendarData(appointments, staff);
    return calendarData;
  }

  async getTimeTables(){
    const timeTables = await this._http.get<Array<string>>('./assets/data/time-tables.json').toPromise();
    return timeTables
  }

  renderGlobalCalendarData(appointments, staff){  
    let data : Array<calendarData> = [];
    
    for(let x = 0; x < staff.length; x++){
      data[x] = { 
        staff : staff[x],
        appointments : []
      }
      for (let y = 0; y < appointments.length; y++) {
        let staffId = staff[x].id;
        if(staffId === appointments[y].barber){
          data[x].appointments.push(appointments[y]);
        }

      }
    }
    return data;
  }
}
