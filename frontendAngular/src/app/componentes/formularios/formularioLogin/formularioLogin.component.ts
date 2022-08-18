import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulariosModule } from '../formularios/formularios.module';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formularioLogin',
  templateUrl: './formularioLogin.component.html',
  styleUrls: ['./formularioLogin.component.css']
})

export class FormularioLoginComponent{

  formGroup: FormGroup<{ usuario: FormControl<string | null>; pass: FormControl<string | null>; }>;

  constructor(private router:Router, private formBuilder: FormBuilder){


    this.formGroup = formBuilder.group({
      usuario: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],

      
      pass: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,}$")
      ])]
    })

  }







  
  miFormulario = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)





  });



  


  irALaListaDeClientes(){
    this.router.navigate(['/clientes'])
  }

  ngOnInit(): void {
  }

  enviarFormRF() {
    console.log(this.formGroup);
    this.interno.usuario = this.formGroup.value.usuario;
    this.interno.pass = this.formGroup.value.pass;
    console.log("Usuario: " + this.interno.usuario);
    console.log("Pass: " + this.interno.pass);
    this.formGroup.reset();
  }







}