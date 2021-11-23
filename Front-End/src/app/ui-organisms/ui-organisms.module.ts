import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UiAtomsModule } from '../ui-atoms/ui-atoms.module';
import { UiMoleculesModule } from '../ui-molecules/ui-molecules.module';
import { ChatModule } from '../modules/chat/chat.module';
import { RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { ChatBarComponent } from './chat-bar/chat-bar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    InboxComponent,
    ChatBarComponent
  ],
  imports: [
    CommonModule,
    UiMoleculesModule,
    UiAtomsModule,
    CommonModule,
    RouterModule
  ],
  exports : [ 
    NavbarComponent,
    SidebarComponent,
    InboxComponent,
    ChatBarComponent
  ]
})
export class UiOrganismsModule { }
