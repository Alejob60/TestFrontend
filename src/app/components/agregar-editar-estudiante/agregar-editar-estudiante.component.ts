import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/interface/estudiante';
import { EstudianteService } from 'src/app/service/estudiante.service';

@Component({
  selector: 'app-agregar-editar-estudiante',
  templateUrl: './agregar-editar-estudiante.component.html',
  styleUrls: ['./agregar-editar-estudiante.component.css']
})

export class AgregarEditarEstudianteComponent implements OnInit {
  form: FormGroup;
  id:number;

  operador: string ='Agregar';

  constructor(private fb:FormBuilder,
    private _estudianteService: EstudianteService,
    private router:Router,
    private aRoute: ActivatedRoute){
    this.form =this.fb.group({
      nombre: ['',Validators.required],
      Edad: ['',Validators.required],
      Grado: ['',Validators.required],
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id != 0){
        this.operador='Editar';
        this.obtenerEstudiante(this.id);
    }
  }

  obtenerEstudiante(id:number){
      this._estudianteService.getEstudiante({id}).subscribe(data =>{
      this.form.patchValue({
        nombre: data.nombre,
        Edad: data.edad,
        Grado: data.grado
      })  
      })
  }

  agregarEditarEstudiante(){
    
    const estudiante: Estudiante={
      nombre:this.form.value.nombre,
      edad:  this.form.value.Edad,
      grado: this.form.value.Grado
    }

    if(this.id != 0 )
    {
      estudiante.id=this.id;
      this.editarEstudiante(this.id,estudiante);
    }else{
      this.agregarEstudiante(estudiante);
    }
  }

  editarEstudiante(id:number,estudiante:Estudiante){
    this._estudianteService.updateEstudiante(id, estudiante).subscribe(()=> {
    this.router.navigate(['/listEstudiantes']);
    })


  }
  agregarEstudiante(estudiante:Estudiante){
    //send object to backend
    this._estudianteService.addEstudiante(estudiante).subscribe(data=> {
      this.router.navigate(['/listEstudiantes']);
    });

  }
}
