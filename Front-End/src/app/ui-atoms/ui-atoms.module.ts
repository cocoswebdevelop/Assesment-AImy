import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonLComponent } from './button-l/button-l.component';
import { ButtonMComponent } from './button-m/button-m.component';
import { ButtonSComponent } from './button-s/button-s.component';
import { InputMComponent } from './input-m/input-m.component';
import { InputSComponent } from './input-s/input-s.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ButtonLComponent,
    ButtonMComponent,
    ButtonSComponent,
    InputMComponent,
    InputSComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ButtonLComponent,
    ButtonMComponent,
    ButtonSComponent,
    InputMComponent,
    InputSComponent
  ]
})
export class UiAtomsModule { }
