import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayTogglerComponent } from './day-toggler/day-toggler.component';
import { UiAtomsModule } from '../ui-atoms/ui-atoms.module';
import { BranchTogglerComponent } from './branch-toggler/branch-toggler.component';
import { CalendarFiltersComponent } from './calendar-filters/calendar-filters.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AppointmentComponent } from './appointment/appointment.component';




@NgModule({
  declarations: [DayTogglerComponent, BranchTogglerComponent, CalendarFiltersComponent, NotificationsComponent, AppointmentComponent],
  imports: [
    CommonModule,
    UiAtomsModule
  ],
  exports: [
    DayTogglerComponent,
    BranchTogglerComponent,
    CalendarFiltersComponent,
    NotificationsComponent,
    AppointmentComponent
  ]
})
export class UiMoleculesModule { }
