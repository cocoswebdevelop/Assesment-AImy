import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UiAtomsModule } from '../ui-atoms/ui-atoms.module';
import { CalendarComponent } from './calendar/calendar.component';
import { UiMoleculesModule } from '../ui-molecules/ui-molecules.module';
import { ChatModule } from '../modules/chat/chat.module';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    UiMoleculesModule,
    UiAtomsModule,
    ChatModule
  ],
  exports : [ 
    NavbarComponent,
    SidebarComponent
  ]
})
export class UiOrganismsModule { }
