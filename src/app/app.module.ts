import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarEstudianteComponent } from './components/agregar-editar-estudiante/agregar-editar-estudiante.component';
import { ListadoEstudiantesComponent } from './components/listado-estudiantes/listado-estudiantes.component';
import { VerEstudiantesComponent } from './components/ver-estudiantes/ver-estudiantes.component';
import { BorrarEstudiantesComponent } from './components/borrar-estudiantes/borrar-estudiantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarEstudianteComponent,
    ListadoEstudiantesComponent,
    VerEstudiantesComponent,
    BorrarEstudiantesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
