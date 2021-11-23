import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayTogglerComponent } from './day-toggler/day-toggler.component';
import { UiAtomsModule } from '../ui-atoms/ui-atoms.module';
import { BranchTogglerComponent } from './branch-toggler/branch-toggler.component';
import { CalendarFiltersComponent } from './calendar-filters/calendar-filters.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { InboxChatsComponent } from './inbox-chats/inbox-chats.component';
import { InboxConversationComponent } from './inbox-conversation/inbox-conversation.component';




@NgModule({
  declarations: [
    DayTogglerComponent, 
    BranchTogglerComponent,
    CalendarFiltersComponent,
    NotificationsComponent,
    AppointmentComponent,
    InboxChatsComponent,
    InboxConversationComponent
  ],
  imports: [
    CommonModule,
    UiAtomsModule
  ],
  exports: [
    DayTogglerComponent,
    BranchTogglerComponent,
    CalendarFiltersComponent,
    NotificationsComponent,
    AppointmentComponent,
    InboxChatsComponent,
    InboxConversationComponent
  ]
})
export class UiMoleculesModule { }
