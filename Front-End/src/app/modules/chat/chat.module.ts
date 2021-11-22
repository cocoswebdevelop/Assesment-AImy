import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { UiAtomsModule } from 'src/app/ui-atoms/ui-atoms.module';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiAtomsModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
