import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Articulo } from '../../clases/articulo';
import { ArticulosService } from '../../servicios/articulos.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  
  listadoArticulos: Articulo[];

  @Output() articuloSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  @Input() articuloParaBorrar: Articulo ;
  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.getArticulos();
  }

  mostrarDetalles(unArticulo:Articulo)
  {
    this.articuloSeleccionado.emit(unArticulo);
  }

  getArticulos()
  {
    this.articulosService.getArticulos().subscribe((articulosSnapshot) => {
      this.listadoArticulos = new Array();
      articulosSnapshot.forEach((articuloData: any) => {
        this.listadoArticulos.push(
          {
            id: articuloData.payload.doc.Rm.key.path.segments[6],
            descripcion: articuloData.payload.doc.data().descripcion,
            fechaDeVencimiento: new Date(articuloData.payload.doc.data().fechadevencimiento.toDate()),
            precio: articuloData.payload.doc.data().precio,
            rutaDeFoto: articuloData.payload.doc.data().rutadefoto,
            tipo: articuloData.payload.doc.data().tipo
          });
      });
    });
  }
}
