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
  public it!: Glossario[]
  public value!: Glossario

  public algo!: Number
  public size!: number

  quantidade = 10; inicio = 0;

  searchTerm: String = ""

  constructor(
    private router: Router,
    private service: GlossarioService
  ) {
    this.load()
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

  edit() {
    this.editOk = !this.editOk
  }

  load() {
    this.service.getGlossario().subscribe(data => {

      const i = data.length
      let dado!: Number

      data.map((j) => {
        for (let k = i; k > i - 1; k--) {
          dado = j.id
        }
      })

      this.size = parseInt(dado.toString()) + 1

      this.it = data
      this.itens = data;
    })
  }

  Expandir(id: Number) { //mostra a descrição de forma dinâmica
    const ID = parseInt(id.toString()) - this.inicio
    const item = document.querySelectorAll(".item-list")[ID] as HTMLElement

    if (item.style.maxHeight == "5vh" || item.style.maxHeight == "") {
      item.style.maxHeight = "10vh"
    } else {
      item.style.maxHeight = "5vh"
    }

  }

  Edit(id: Number) { //chama o o form de edição

    this.itens.map((item) => {
      if (item.id === id) {
        this.value = item
        this.algo = id
      }
    })

    this.editOk = !this.editOk
  }

  search(e: Event): void { //função de busca na lista

    const target = e.target as HTMLInputElement

    const value = target.value.toLowerCase()

    console.log(value)

    this.it = this.itens.filter((m) =>
      m.keyWord.toLowerCase().includes(value)
    )
  }
}