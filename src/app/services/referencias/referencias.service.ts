import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Referencia } from 'src/app/model/Referencia.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferenciasService {

  public baseUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  //listagem de referencias (ok)
  getRef(): Observable<Referencia[]> {
    return this.http.get<Referencia[]>(`${this.baseUrl}/referencias`)
  }
  //cadastro de referencias (ok)
  cadRef(data: any): Observable<Referencia> {
    return this.http.post<Referencia>(`${this.baseUrl}/cad-referencias`, data)
  }
  //remoção de referencias (ok)
  deleteRef(id: Number) {
    const url = `${this.baseUrl}/delet-referencia/${id}`
    return this.http.delete(url)
  }
  //edição de referencia (ok)
  editRef(id: Number, data: FormGroup): Observable<FormGroup> {
    const url = `${this.baseUrl}/edit-referencia/${id}`
    return this.http.put<FormGroup>(url, data)
  }


}
