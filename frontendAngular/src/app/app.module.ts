import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstructuraComponent } from './componentes/directivas/estructura/estructura.component';
import { AtributosComponent } from './componentes/directivas/atributos/atributos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './componentes/about/about.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SharedModule } from './shared/shared.module';
import { FormulariosModule } from './componentes/formularios/formularios/formularios.module';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [		
    AppComponent,
    EstructuraComponent,
    AtributosComponent,
    HeaderComponent,
    AboutComponent,
    ProyectosComponent,
    ListaClientesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    FormulariosModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
