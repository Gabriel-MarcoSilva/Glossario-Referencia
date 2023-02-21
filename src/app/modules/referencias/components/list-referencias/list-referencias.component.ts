import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-referencias',
  templateUrl: './list-referencias.component.html',
  styleUrls: ['./list-referencias.component.css']
})
export class ListReferenciasComponent {

  public id!: number;

  constructor(
    private route: Router
  ){}

  edit(id: number){
    const bloco = document.querySelectorAll(".item-list")[id] as HTMLElement

    this.route.navigate([`edit/${id}`])
  }

}
