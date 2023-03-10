import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  getGlossario(): Observable<Glossario[]> {
    return this.http.get<Glossario[]>(`${this.baseUrl}/glossario`)
  }

  //cadastro de novo glossario (ok)

  setGlossario(data: any): Observable<Glossario> {
    return this.http.post<Glossario>(`${this.baseUrl}/cad-glossario`, data)
  }

  //editar palavra no glossario (ok)

  editGlossario(id: Number, data: FormGroup): Observable<FormGroup> {
    const url = `${this.baseUrl}/edit-glossario/${id}`
    return this.http.put<FormGroup>(url, data)
  }

  //deletar uma palavra no glossario (ok)

  deleteGlossario(id: Number) {
    const url = `${this.baseUrl}/delet-glossario/${id}`
    return this.http.delete(url)
  }

}
