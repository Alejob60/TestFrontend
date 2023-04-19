import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEstudiantesComponent } from './components/listado-estudiantes/listado-estudiantes.component';
import { AgregarEditarEstudianteComponent } from './components/agregar-editar-estudiante/agregar-editar-estudiante.component';
import { BorrarEstudiantesComponent } from './components/borrar-estudiantes/borrar-estudiantes.component';
import { VerEstudiantesComponent } from './components/ver-estudiantes/ver-estudiantes.component';

const routes: Routes = [
  {path:'', redirectTo:'listEstudiantes', pathMatch:'full'},
  {path:'listEstudiantes', component: ListadoEstudiantesComponent},
  {path: 'verEstudiante/:id', component: VerEstudiantesComponent},
  {path: 'agregarEstudiante', component: AgregarEditarEstudianteComponent},
  {path: 'editarEstudiante/:id', component: AgregarEditarEstudianteComponent},
  {path: 'eliminarEstudiante/:id', component: BorrarEstudiantesComponent},
  {path: '**', redirectTo:'listEstudiantes', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
