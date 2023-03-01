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
  public editOk: Boolean = false
  public itens!: Glossario[]
  public value!: Glossario

  public algo!: Number
  public size!: number

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

  edit(){
    this.editOk = !this.editOk
    console.log("oi")
  }
  
  load(){
    this.service.getGlossario().subscribe(data => {
      this.size = data.length
      return this.itens = data;
    })
  }

  Edit(id: Number){

    this.itens.map((item) =>{
      if(item.id === id){
        this.value = item
        this.algo = id
      }
    })

    console.log(this.value)

   // this.service.getGlossarioById(id).subscribe(item => console.log(item))
    this.editOk = !this.editOk
  }
}
