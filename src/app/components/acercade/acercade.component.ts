import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


import { Producto } from 'src/app/interfaces/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  constructor(private productoService:ProductoService,
    private router:Router) { }
  producto:Producto={
    id:0,
    nombre:'',
    proovedor:'',
    imagen:''
  }
  ngOnInit(): void {
  }
  create():void{
    console.log(this.producto);
    this.productoService.create(this.producto).subscribe(
      response=>{this.router.navigate(['/home'])
      Swal.fire('Nuevo producto creado','','success')
      }
    )
  }

}
