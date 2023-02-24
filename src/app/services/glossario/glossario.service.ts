import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Glossario } from 'src/app/model/Glossario.models';

@Injectable({
  providedIn: 'root'
})
export class GlossarioService {

  private baseUrl = "http://localhost:4000"

  constructor(
    private http: HttpClient
  ) { }

  //listagem das palavras cadastradas

  getGlossario(): Observable<Glossario[]>{ 
    return this.http.get<Glossario[]>(`${this.baseUrl}/glossario`)
  }

  //apagar
  gettGlossario(){
    return  localStorage.getItem('iuoi')
  }

  //cadastro de novo glossario

  setGlossario(data: any): Observable<Glossario[]> {
    return this.http.post<Glossario[]>(`${this.baseUrl}/cad-glossario`, data).pipe(take(1))
   }

  //editar palavra no glossario

  editGlossario() { }

  //listar palavra no glossario específico

  getGlossarioById() { }

  //deletar uma palavra no glossario

  deleteGlossario() { }

}
