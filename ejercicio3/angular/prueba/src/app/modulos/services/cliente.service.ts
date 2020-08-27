import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get('http://localhost:8080/crudUsuario/clientes').pipe(
    map(response => response as Cliente[])

  );
 }

 getCliente(id):Observable<Cliente>{


   return this.http.get<Cliente>(`http://localhost:8080/crudUsuario/clientes/${id}`)
 }

  create(cliente:Cliente) : Observable<Cliente>{
    console.log("agregar!!");
    console.log(cliente);
    return this.http.post<Cliente>('http://localhost:8080/crudUsuario/clientes',cliente, { headers:this.httpHeaders})
 }

 update(cliente:Cliente) : Observable<Cliente>{
   console.log("borrar!!");
   return this.http.put<Cliente>(`http://localhost:8080/crudUsuario/clientes/${cliente.idCliente}`,cliente,{ headers:this.httpHeaders})
}

 delete(id:number) : Observable<Cliente>{
   console.log("borrar!!");
   return this.http.delete<Cliente>(`http://localhost:8080/crudUsuario/clientes/${id}`, { headers:this.httpHeaders})
}
}
