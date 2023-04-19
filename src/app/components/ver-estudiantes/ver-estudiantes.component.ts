import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estudiante } from 'src/app/interface/estudiante';
import { EstudianteService } from 'src/app/service/estudiante.service';

@Component({
  selector: 'app-ver-estudiantes',
  templateUrl: './ver-estudiantes.component.html',
  styleUrls: ['./ver-estudiantes.component.css']
})
export class VerEstudiantesComponent implements OnInit {
  id: number;
  estudiante!: Estudiante;
  constructor(private _estudianteService:EstudianteService,
    private aRoute: ActivatedRoute){
        this.id=Number(this.aRoute.snapshot.paramMap.get('id'));
      }
  ngOnInit(): void {
    this.obtenerEstudiante();
  }

  obtenerEstudiante(){
    this._estudianteService.getEstudiante({ id:this.id }).subscribe((data: any) =>{
    this.estudiante=data;
    })
  }

}
