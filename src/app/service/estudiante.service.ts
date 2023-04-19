import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../interface/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private myAppUrl: string = environment.endpoint;
  private myAPIUrl: string ='api/Estudiantes/';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]> {
   return  this.http.get<Estudiante[]>(`${this.myAppUrl}${this.myAPIUrl}`);
  }
  
  getEstudiante({ id }: { id: number; }):Observable<Estudiante>{
    return  this.http.get<Estudiante>(`${this.myAppUrl}${this.myAPIUrl}${id}`);

  }

  deleteEstudiante(id:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myAPIUrl}${id}`);
  }

  addEstudiante(estudiante:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>(`${this.myAppUrl}${this.myAPIUrl}`,estudiante);
  }

  updateEstudiante(id:number, estudiante:Estudiante):Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myAPIUrl}${id}`,estudiante);
  }
}
