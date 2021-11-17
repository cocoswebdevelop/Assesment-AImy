import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { UiOrganismsModule } from 'src/app/ui-organisms/ui-organisms.module';
import { UiAtomsModule } from 'src/app/ui-atoms/ui-atoms.module';
import { UiMoleculesModule } from 'src/app/ui-molecules/ui-molecules.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    UiOrganismsModule,
    UiAtomsModule,
    UiMoleculesModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CalendarComponent
  ]
})

export class CalendarModule { }
