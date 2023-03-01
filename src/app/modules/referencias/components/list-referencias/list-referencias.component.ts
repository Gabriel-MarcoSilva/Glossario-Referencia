import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-referencias',
  templateUrl: './list-referencias.component.html',
  styleUrls: ['./list-referencias.component.css']
})
export class ListReferenciasComponent {

  public id!: number;
  public imageNext: String = "../../../../../assets/next.png"
  public imageBack: String = "../../../../../assets/back.png"

  public cadOk: Boolean = false


  constructor(
    private route: Router
  ) { }

  next() {
    alert("proximo")
  }

  back() {
    alert("anterior")
  }

  cad() {
    //this.route.navigate(['/glossario/cad-glossario'])
    this.cadOk = !this.cadOk
  }

  edit(id: number) {
    const bloco = document.querySelectorAll(".item-list")[id] as HTMLElement

    this.route.navigate([`edit/${id}`])
  }

}
