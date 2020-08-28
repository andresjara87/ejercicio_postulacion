import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cuenta } from '../models/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http:HttpClient) { }

  getCuenta(id):Observable<Cuenta>{

    return this.http.get<Cuenta>(`http://localhost:8080/crudUsuario/cuentas/${id}`)

  }

}
