import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/cliente';
import { ClienteService } from '../../../cliente.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularioContacto',
  templateUrl: './formularioContacto.component.html',
  styleUrls: ['./formularioContacto.component.css']
})
export class FormularioContactoComponent implements OnInit {



  myForm: FormGroup;

  cliente: Cliente = new Cliente();


  constructor(
    private clienteServicio: ClienteService,
    private router: Router) { }



  ngOnInit() {
    console.log(this.cliente);

    /*
    this.myForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'mensaje' : new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(1000)])

    });
*/
  }


  guardarCliente() {
    this.clienteServicio.registrarCliente(this.cliente).subscribe(dato => {
      console.log(dato);
      //    this.irALaListaDeClientes();   va a la lista de clientes, no lo voy a usar
    });
  }

  irALaListaDeClientes() {
    this.router.navigate(['/clientes'])
  }


  enviado = false;

  onSubmit() {


    this.guardarCliente();
    console.log(this.cliente);
    this.cliente = new Cliente();
    this.myForm.reset();

    /*    this.myForm.markAsPristine();
        this.myForm.markAsUntouched();
            */
    this.myForm.updateValueAndValidity();
  }

}
