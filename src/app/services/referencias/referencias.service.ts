import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Referencia } from 'src/app/model/Referencia.model';

@Injectable({
  providedIn: 'root'
})
export class ReferenciasService {

  public baseUrl = "http://localhost:4000"

  constructor(
    private http: HttpClient
  ) { }


  getRef(): Observable<Referencia[]>{
    return this.http.get<Referencia[]>(`${this.baseUrl}/referencias`)
  }

  cadRef(data: any): Observable<Referencia>{
    return this.http.post<Referencia>(`${this.baseUrl}/cad-referencias`, data)
  }

  editRef(id: Number, data: FormGroup): Observable<FormGroup> {
    const url = `${this.baseUrl}/edit-referencia/${id}`
    return this.http.put<FormGroup>(url, data)
  }

  deleteRef(id: Number) {
    const url = `${this.baseUrl}/delet-referencia/${id}`
    return this.http.delete(url)
  }

}
