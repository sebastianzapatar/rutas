import { Component, OnInit } from '@angular/core';

import { Producto } from 'src/app/interfaces/Producto';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:Producto[]=[];
  constructor(private productoService:ProductoService) { }


  cargarProductos():void{
    this.productoService.getProductos().
    subscribe(data=>this.productos=data);
  }
  ngOnInit(): void {
    this.cargarProductos();
  }

}
