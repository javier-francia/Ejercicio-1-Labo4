import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ArticulosService } from './servicios/articulos.service';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GrillaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ArticulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
