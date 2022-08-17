import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {
  titulo: string="Directivas de Atributos";
  amarillo: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
