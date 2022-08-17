import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutComponent } from './componentes/about/about.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FormularioLoginComponent } from './componentes/formularios/formularioLogin/formularioLogin.component';
import { FormularioContactoComponent } from './componentes/formularios/formularioContacto/formularioContacto.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    pathMatch: 'full'
  },
  {
    path: 'clientes', component:ListaClientesComponent
  },
  {
    path: 'sobre-mi',
    component: AboutComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'contacto',
    component: FormularioContactoComponent
  },
  {
    path: 'login',
    component: FormularioLoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
