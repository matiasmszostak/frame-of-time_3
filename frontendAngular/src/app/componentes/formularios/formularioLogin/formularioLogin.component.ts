import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulariosModule } from '../formularios/formularios.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formularioLogin',
  templateUrl: './formularioLogin.component.html',
  styleUrls: ['./formularioLogin.component.css']
})

export class FormularioLoginComponent{

  constructor(private router:Router){}

  miFormulario = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });



  


  irALaListaDeClientes(){
    this.router.navigate(['/clientes'])
  }



}