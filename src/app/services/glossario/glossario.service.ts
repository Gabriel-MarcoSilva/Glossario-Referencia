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
    private http: HttpClient,
  ) { }

  //listagem das palavras cadastradas (ok)

  getGlossario(): Observable<Glossario[]>{ 
    return this.http.get<Glossario[]>(`${this.baseUrl}/glossario`)
  }

  //cadastro de novo glossario (ok)

  setGlossario(data: any): Observable<Glossario> {
    console.log("data", data)
    return this.http.post<Glossario>(`${this.baseUrl}/cad-glossario`, data)
   }

  //editar palavra no glossario

  editGlossario(id: String, data: FormData): Observable<FormData> {
    const url = `${this.baseUrl}/glossario/${id}`
    return this.http.post<FormData>(url, data)
   }

  //listar palavra no glossario específico

  getGlossarioById(id: String): Observable<Glossario> { 
    const url = `${this.baseUrl}/glossario/${id}`
    return this.http.get<Glossario>(url)

  }

  //deletar uma palavra no glossario (ok)

  deleteGlossario(id: Number) { 
   // console.log(id)
    const url = `${this.baseUrl}/delet-glossario/${id}`
    return this.http.delete(url)
  }

}
