import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-glossario',
  templateUrl: './list-glossario.component.html',
  styleUrls: ['./list-glossario.component.css']
})
export class ListGlossarioComponent {

  public cadOk: Boolean = false

  public imageNext: String = "../../../../../assets/next.png"
  public imageBack: String = "../../../../../assets/back.png"

  constructor(
    private router: Router
  ) { }
  
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

}
