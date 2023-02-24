import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Glossario } from 'src/app/model/Glossario.models';
import { GlossarioService } from 'src/app/services/glossario/glossario.service';

@Component({
  selector: 'app-list-glossario',
  templateUrl: './list-glossario.component.html',
  styleUrls: ['./list-glossario.component.css']
})
export class ListGlossarioComponent {

  public cadOk: Boolean = false

  public itens!: Glossario[]

  constructor(
    private router: Router,
    private service: GlossarioService
  ) { 
    this.load()
  }

  next() {
    alert("proximo")
  }

  back() {
    alert("anterior")
  }

  cad() {
    //this.router.navigate(['/glossario/cad-glossario'])
    this.cadOk = !this.cadOk
  }
  
  load(){
    
    this.service.getGlossario().subscribe(data => {
      return this.itens = data;
    })
  }
}
