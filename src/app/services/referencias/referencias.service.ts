import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
