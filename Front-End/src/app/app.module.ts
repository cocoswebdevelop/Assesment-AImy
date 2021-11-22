import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CalendarModule } from './modules/calendar/calendar.module';
import { UiAtomsModule } from './ui-atoms/ui-atoms.module';
import { UiMoleculesModule } from './ui-molecules/ui-molecules.module';
import { UiOrganismsModule } from './ui-organisms/ui-organisms.module';
import { routes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from './modules/chat/chat.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    UiAtomsModule,
    UiMoleculesModule,
    UiOrganismsModule,
    CalendarModule,
    ChatModule,
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
