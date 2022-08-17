import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioContactoComponent } from '../formularioContacto/formularioContacto.component';
import { FormularioLoginComponent } from '../formularioLogin/formularioLogin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';




@NgModule({
  declarations: [
    FormularioContactoComponent,
    FormularioLoginComponent
  ],
  exports: [
    FormularioContactoComponent,
    FormularioLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormulariosModule { }
