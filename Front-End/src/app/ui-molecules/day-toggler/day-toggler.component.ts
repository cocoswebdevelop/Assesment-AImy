import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-toggler',
  templateUrl: './day-toggler.component.html',
  styleUrls: ['./day-toggler.component.scss']
})
export class DayTogglerComponent implements OnInit {

  dayValue1 : string;
  dayValue2 : string;
  dayValue3 : string;

  constructor() { 
    this.dayValue1  = 'Vandaag';
    this.dayValue2  = 'Dinsdag';
    this.dayValue3  = 'Woensdag';
  }

  ngOnInit(): void {
  }

}
