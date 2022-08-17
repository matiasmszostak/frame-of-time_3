import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Esta URL obtiene el listado de todos los clientes en el backend
  private baseURL = "http://localhost:8080/api/v1/clientes";



constructor(private httpClient : HttpClient) { }

//método para obtener a los clientes
obtenerListaDeClientes():Observable<Cliente[]>{
  return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
}

//metodo para registrar contactos de clientes
registrarCliente(cliente:Cliente) : Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, cliente);
}



}
