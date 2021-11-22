import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonLComponent } from './button-l/button-l.component';
import { ButtonMComponent } from './button-m/button-m.component';
import { ButtonSComponent } from './button-s/button-s.component';
import { InputMComponent } from './input-m/input-m.component';
import { InputSComponent } from './input-s/input-s.component';
import { InputLComponent } from './input-l/input-l.component';
import { ButtonDropdownLComponent } from './button-dropdown-l/button-dropdown-l.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    ButtonLComponent,
    ButtonMComponent,
    ButtonSComponent,
    InputMComponent,
    InputSComponent,
    InputLComponent,
    ButtonDropdownLComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    ButtonLComponent,
    ButtonMComponent,
    ButtonSComponent,
    InputMComponent,
    InputSComponent,
    InputLComponent,
    ButtonDropdownLComponent
  ]
})
export class UiAtomsModule { }
