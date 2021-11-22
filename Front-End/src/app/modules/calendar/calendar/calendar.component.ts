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
  appointments : Array<appointments>;
  timeTables : Array<any>;
  
  constructor(private _calendar : CalendarService) { }

  ngOnInit(): void {
    this.getGlobalCalendarData();
    this._calendar.getFilter().subscribe(x =>{
      this.setFilteredCalendarData(x);
    })

    this._calendar.getInputFilter().subscribe(y => {
      this.setFilteredCalendarDataInput(y);
    })
  } 

  // Load all calendar data from the calendar service. 

  async getGlobalCalendarData():Promise<void>{
    let calendarData = await this._calendar.getGlobalCalendarData();
    this.timeTables =  await this._calendar.getTimeTables();
    for (let i = 0; i < calendarData.length; i++) {
      calendarData[i].appointments.map(x =>{
        x.startTime = this.getSlicedTime(x.start);
        x.endTime = this.getSlicedTime(x.end);
      })  
    }
    this.calendarData = calendarData;
  }

  // Load calendar data with a filter by ID 

  async setFilteredCalendarData(filter): Promise<void> { 
    let filteredArray : Array<calendarData> = [] ;
    let calendarData = await this._calendar.getGlobalCalendarData();
    if(filter !== null){
      calendarData.forEach(x => {
        if(x.staff.id == filter){
          filteredArray.push(x);
          for(let y = 0; y < filteredArray[0].appointments.length; y++)
          filteredArray[0].appointments.map(y =>{
            y.startTime = this.getSlicedTime(y.start);
            y.endTime = this.getSlicedTime(y.end);
          })  
        }
      })
      this.calendarData = filteredArray;
    }
    else this.getGlobalCalendarData();
   
  }
  
  // Load calendar data with a filter by STRING

  async setFilteredCalendarDataInput(filter): Promise<void> { 
    let filteredArray : Array<calendarData> = [] ;
    let calendarData = await this._calendar.getGlobalCalendarData();
    if(filter.name.length > 0){
      filter = filter.name.toLowerCase();
      const staff = this.filterStaff(calendarData, filter);
      const appointments = this.filterAppointments(calendarData, filter);
 
      staff.forEach(x => {
        filteredArray.push(x)
      });
      appointments.forEach(y => {
        filteredArray.push(y)
      });

      if (filteredArray.length == 0) this.getGlobalCalendarData();
      else this.calendarData = filteredArray;
    }
    else this.getGlobalCalendarData();
   
  }


  filterStaff(calendarData, filter): Array<calendarData>{
    let filteredArray : Array<calendarData> = [] ;
    calendarData.forEach(x => {
      if(x.staff.name.toLowerCase().includes(filter)){
        filteredArray.push(x);
        for(let y = 0; y < filteredArray[0].appointments.length; y++)
        filteredArray[0].appointments.map(y =>{
          y.startTime = this.getSlicedTime(y.start);
          y.endTime = this.getSlicedTime(y.end);
        })  
      }
    })
    return filteredArray;
  }

  filterAppointments(calendarData, filter): Array<calendarData>{
    let filteredArray : Array<calendarData> = [] ;
    for(let x = 0; x < calendarData.length; x++){
      calendarData[x].appointments.forEach(y => {
        if(y.title.toLowerCase().includes(filter)){
          calendarData[x].appointments.map(y =>{
            y.startTime = this.getSlicedTime(y.start);
            y.endTime = this.getSlicedTime(y.end);
          })  
          filteredArray.push(calendarData[x]);
        }
      })
    }
    return filteredArray;
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
  // Calculates the height for each appointment

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
