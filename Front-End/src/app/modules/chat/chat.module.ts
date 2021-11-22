import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { UiAtomsModule } from 'src/app/ui-atoms/ui-atoms.module';
import { ChatBarComponent } from './chat-bar/chat-bar.component';
import { routes } from './routes';



@NgModule({
  declarations: [ChatComponent, ChatBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiAtomsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ChatComponent,
    ChatBarComponent 
  ]
})
export class ChatModule { }
