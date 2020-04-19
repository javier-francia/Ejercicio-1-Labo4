import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../../clases/articulo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  articuloSeleccionado: Articulo;
  
  constructor() { }

  ngOnInit(): void {
  }

  tomarArticuloParaDetalles(nuevoArticulo: Articulo)
  {
    this.articuloSeleccionado = nuevoArticulo;   
  }
}