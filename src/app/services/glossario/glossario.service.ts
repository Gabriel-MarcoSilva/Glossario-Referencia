import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlossarioService {

  private baseUrl = "http://localhost:4000"

  constructor(
    private http: HttpClient
  ) { }

  //listagem das palavras cadastradas

  getGlossario() { 
    return this.http.get(this.baseUrl)
  }

  //cadastro de novo glossario

  setGlossario(data: any) {
    return this.http.post("cad-glossario", data)
   }

  //editar palavra no glossario

  editGlossario() { }

  //listar palavra no glossario específico

  getGlossarioById() { }

  //deletar uma palavra no glossario

  deleteGlossario() { }

}
