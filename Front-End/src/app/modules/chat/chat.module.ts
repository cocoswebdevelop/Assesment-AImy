import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { UiAtomsModule } from 'src/app/ui-atoms/ui-atoms.module';
import { routes } from './routes';
import { UiOrganismsModule } from 'src/app/ui-organisms/ui-organisms.module';
import { UiMoleculesModule } from 'src/app/ui-molecules/ui-molecules.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiOrganismsModule,
    UiAtomsModule,
    UiMoleculesModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ChatComponent 
  ]
})
export class ChatModule { }
