import { Component, OnInit } from '@angular/core';
import { staff } from "../../../core/interfaces/staff";
import { appointments } from "../../../core/interfaces/appointments";
import { CalendarService } from 'src/app/core/services/calendar.service';
import { calendarData } from 'src/app/core/interfaces/calendarData';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  staffArray : Array<staff>;
  calendarData : Array<calendarData>;
  staff : staff
  appointments : Array<appointments>;
  timeTables : Array<any>;
  
  constructor(private _calendar : CalendarService) { }

  ngOnInit(): void {
    this.getGlobalCalendarData();
  } 

  // Load all calendar data from the calendar service. 

  async getGlobalCalendarData():Promise<void>{
    let calendarData = await this._calendar.getGlobalCalendarData();
    this.timeTables =  await this._calendar.getTimeTables();
    for (let index = 0; index < calendarData.length; index++) {
      calendarData[index].appointments.map(x =>{
        x.startTime = this.getSlicedTime(x.start);
        x.endTime = this.getSlicedTime(x.end);
      })  
    }
    this.calendarData = calendarData;
  }

  // getSlicedTime() returns a compareable numer to verificate wether an appointment should 
  // be placed in the view.

  getSlicedTime(timeString):number{
    let time = timeString.split(':');
    time = time[0] + time[1]; 
    return parseFloat(time);
  }

  // Nomally i would go for a library such as moment.js to determine (passed) time.
  // However, I have chosen the hard way.

  calculateHeight(appointment):number{
    let fullHours : any = (appointment.endTime - appointment.startTime) / 100;
    fullHours = fullHours.toString().split('.');
    const times = [appointment.start, appointment.end]
    let timeShares = this.calculateShares(times, fullHours[0]);
    return timeShares;
  }

  // Calculate the amount of quarters needed to display a correct height of an appointment
  // The JSON time strings will be converted to quarters of an hour. Each quarter translates to 41px in the view

  calculateShares(times, fullHours): number{
    let factor = 0;
    let factors = [];
    let num = 0;  

    let x = times[0].split(':')[0];
    let y = times[1].split(':')[0];
    x = x * 4;
    y = y * 4;

    for(let x = 0; x < times.length; x ++){
      let end = times[x].split(':');
        switch (end[1]) {
          case '15':
            num = 25;
          break;
          case '30':
            num = 50;
          break;
          case '45':
            num = 75;
          break; 
          case '00':
            num = 0;
          break;

        }
        num = num / 25;

      factors.push(num);
    }

    let fullQuarterTime1 = x + factors[0];
    let fullQuarterTime2 = y + factors[1];

    factor = fullQuarterTime2 - fullQuarterTime1;

     return factor * 41;
 }

  checkIfDoubleAppointment(){
    // To Do functionality. Check for double planned appointments. 
  }

}
