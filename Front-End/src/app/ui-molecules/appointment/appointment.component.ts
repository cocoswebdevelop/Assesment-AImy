import { Component, Input, OnInit,AfterViewInit} from '@angular/core';
import { appointments } from 'src/app/core/interfaces/appointments';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements AfterViewInit {

  constructor() { }
  @Input() height : number;
  @Input() appointment : appointments;
  @Input() doubleAppointment? : boolean;
  
  ngAfterViewInit(): void {
    this.setStylingProperties();
  }

  setStylingProperties(){
    let height = this.height + 'px';
    document.getElementById('appointment' + this.appointment.id).style.height = height;
    document.getElementById('appointment' + this.appointment.id).style.background = 'var(--appointment-' + `${this.appointment.colourTag}` + ')';
  }

}
