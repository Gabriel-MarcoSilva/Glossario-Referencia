import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Referencia } from 'src/app/model/Referencia.model';
import { ReferenciasService } from 'src/app/services/referencias/referencias.service';

@Component({
  selector: 'app-list-referencias',
  templateUrl: './list-referencias.component.html',
  styleUrls: ['./list-referencias.component.css']
})
export class ListReferenciasComponent {

  public id!: number;
  public size!: number
  public imageNext: String = "../../../../../assets/next.png"
  public imageBack: String = "../../../../../assets/back.png"

  public cadOk: Boolean = false

  public Allreferencias!: Referencia[]
  public referencias!: Referencia[]

  quantidade = 10; inicio = 0

  constructor(
    private route: Router,
    private service: ReferenciasService
  ) {

    this.load()
  }

  load() {
    this.service.getRef().subscribe(data => {

      const i = data.length
      let dado!: Number

      data.map((j) => {
        for (let k = i; k > i - 1; k--) {
          dado = j.id
        }
      })

      this.referencias = data
      this.Allreferencias = data
    })
  }

  next() {
    if (this.size > this.quantidade) {
      this.quantidade += 10
      this.inicio += 10
    }
  }

  back() {
    if (this.inicio != 0) {
      this.quantidade -= 10
      this.inicio -= 10
    }
  }

  cad() {
    this.cadOk = !this.cadOk
  }

  edit(id: number) {
    const bloco = document.querySelectorAll(".item-list")[id] as HTMLElement

    this.route.navigate([`edit/${id}`])
  }

  search(e: Event): void { //função de busca na lista

    const target = e.target as HTMLInputElement

    const value = target.value.toLowerCase()
    
    this.referencias = this.Allreferencias.filter((m) =>
      m.author.toLowerCase().includes(value) ||
      m.title.toLocaleLowerCase().includes(value) ||
      m.subtitle.toLocaleLowerCase().includes(value)
    )
  }

}
