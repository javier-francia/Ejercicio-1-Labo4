import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Articulo } from '../../clases/articulo';
import { ArticulosService } from '../../servicios/articulos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() articuloParaMostrar: Articulo ;
  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
  }

  borrarArticulo(unArticulo: Articulo)
  {
    this.articulosService.deleteArticulo(unArticulo.id);
    this.articuloParaMostrar = null;
  }
}
