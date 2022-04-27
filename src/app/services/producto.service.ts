import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from '../interfaces/Producto';
@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private headers:HttpHeaders=new HttpHeaders({'Content-type':
  'application/json'});
  private urlEndPoint:string="http://localhost:8092/api/productos";
  constructor(private http:HttpClient) { }
  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint);
  }
  create(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.urlEndPoint,producto,
      {headers:this.headers});
  }
}
