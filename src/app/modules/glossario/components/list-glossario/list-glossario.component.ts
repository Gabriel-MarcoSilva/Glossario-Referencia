import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-glossario',
  templateUrl: './list-glossario.component.html',
  styleUrls: ['./list-glossario.component.css']
})
export class ListGlossarioComponent {

  constructor(
    private router: Router
  ){}

  next(){
    alert("proximo")
  }

  back(){
    alert("anterior")
  }

  cad(){
    this.router.navigate(['/cad-glossario']);
  }

}
