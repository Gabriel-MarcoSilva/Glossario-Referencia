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

  //declaração de variáveis e constantes

  public cadOk: Boolean = false
  public editOk: Boolean = false
  public itens!: Glossario[]
  public it!: Glossario[]
  public value!: Glossario

  public algo!: Number
  public nextId!: number

  quantidade = 10; inicio = 0;

  searchTerm: String = ""

  public insertIds: Number[] = []

  constructor(
    private router: Router,
    private service: GlossarioService
  ) {
    this.load()
  }

  next() { //avança 10 unidades na listagem
    if (this.insertIds.length > this.quantidade) {
      this.quantidade += 10
      this.inicio += 10
    }
  }

  back() { //retorna 10 unidades na listagem
    if (this.inicio != 0) {
      this.quantidade -= 10
      this.inicio -= 10
    }
  }

  cad() { // deixa visível ou não o componente cad-glossario
    this.cadOk = !this.cadOk
  }

  edit() { //deixa visível ou não o compoente edit-glossario
    this.editOk = !this.editOk
  }

  load() { //carrega os dados do banco
    this.service.getGlossario().subscribe(data => {

      const i = data.length
      let dado!: Number

      data.map((item) => {
        for (let k = i; k > i - 1; k--) {

          dado = item.id //pega o ultimo id

          if (item.id || item.id === 0) { //adiciona ao array os ids do banco
            this.insertIds.push(item.id)
          }
        }
      })

      this.it = data; //atribui valores da listagem para os arrays
      this.itens = data; // array que é usado como base para o outro pesquisar

      this.nextId = dado != undefined ? parseInt(this.linearSearch(dado).toString()) : 0 //chama a função que gera o id para o poximo item a ser cadastrado, caso dado seja diferente de indefinido, se for ele recebe o id = 0, funciona somente para o primeiro dado

    })
  }

  linearSearch(key: Number) { //função recursiva que busca no array de ids se já existe o id cadsatrado
    for (let i = 0; i < this.insertIds.length; i++) {
      if (this.insertIds[i] === key) { //se ja existir o id a função chama ela mesma com o valor com acrescimo
        key = this.linearSearch((parseInt(key.toString()) + 1))
      }
    }

    return key //caso o id n exista na lista de ids é retornado esse id
  }

  Expandir(id: Number) { //mostra a descrição de forma dinâmica
    const ID = parseInt(id.toString()) - this.inicio
    const item = document.querySelectorAll(".itemDescription")[ID] as HTMLElement

    if (item.style.whiteSpace == "nowrap" || item.style.whiteSpace == "") {
      item.style.whiteSpace = "break-spaces"
    } else {
      item.style.whiteSpace = "nowrap"
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

  delete(id: Number) {// função delete que apaga um glossario e reinicia a página
    const conf = confirm("Deseja apagar palavra?")

    if (conf) {
      this.service.deleteGlossario(id).subscribe((res) => {
        window.location.reload()
      })
    }

    return
  }
}