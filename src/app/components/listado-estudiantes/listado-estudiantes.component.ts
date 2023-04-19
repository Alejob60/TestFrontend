import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/interface/estudiante';
import { EstudianteService } from 'src/app/service/estudiante.service';

@Component({
  selector: 'app-listado-estudiantes',
  templateUrl: './listado-estudiantes.component.html',
  styleUrls: ['./listado-estudiantes.component.css']
})
export class ListadoEstudiantesComponent implements AfterViewInit {
  displayedColumns: string[] = ['Nombre', 'edad', 'grado', 'acciones'];
  dataSource = new MatTableDataSource<Estudiante>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _estudianteService:EstudianteService)
  {}

  ngOnInit(): void{
    this.obtenerEstudiantes();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  obtenerEstudiantes(){
    this._estudianteService.getEstudiantes().subscribe(data =>{
      this.dataSource.data=data;
    })
    
  }

  eliminarMascota( id: number){
    this._estudianteService.deleteEstudiante(id).subscribe(() =>{
      this.obtenerEstudiantes();

    });
  }
}

