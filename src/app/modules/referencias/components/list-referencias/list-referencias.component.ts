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

  //declaração de variáveis
  public id!: number;
  public nextId!: number
  public algo!: Number
  public value!: Referencia

  public cadOk: Boolean = false
  public editOk: Boolean = false

  public Allreferencias!: Referencia[]
  public referencias!: Referencia[]

  quantidade = 10; inicio = 0

  public insertIds: Number[] = []

  constructor(
    private route: Router,
    private service: ReferenciasService
  ) {

    this.load()
  }

  load() {
    this.service.getRef().subscribe(data => { //pega a lista no banco de dados

      const i = data.length
      let dado!: Number

      data.map((item) => {
        for (let k = i; k > i - 1; k--) {

          dado = item.id //pega o ultimo id

          if (item.id || item.id === 0) {
            this.insertIds.push(item.id) // atribui valores para o array de ids sem o item.id === 0, o id 0 não entrava
          }
        }
      })

      this.referencias = data; //atribui os dados do banco para os doisa arrays
      this.Allreferencias = data; //são necessários dois, pois um é modificado na busca e outro é o permanente e base para pesquisa

      this.nextId = dado != undefined ? parseInt(this.linearSearch(dado).toString()) : 0 //chama função para gerar um id novo; se for indefinido o id = 0 (caso 1)

      this.mapear() //teste para mostrar os autores pra depois formatar
    })
  }

  mapear(){
    this.referencias.map((k) => {
      console.log(k.author)
    })
  }

  linearSearch(key: Number) { //função recursiva que gera os ids das referencias

    for (let i = 0; i < this.insertIds.length; i++) { //roda o array de ids e procura se o id já foi cadastrado
      if (this.insertIds[i] === key) { //verifica se ja existe o id
        key = this.linearSearch((parseInt(key.toString()) + 1)) // caso sim a função se chama novamente
      }
    }
    //caso n exista ou já tenha feita a verificação o id é retornado
    return key
  }

  next() { // função que passa 10 unidades na listagem (visual)
    if (this.insertIds.length > this.quantidade) { //em relação à quantidade de ids cadastrados
      this.quantidade += 10
      this.inicio += 10
    }
  }

  back() { //função que volta 10 unidades na listagem (visual)
    if (this.inicio != 0) {
      this.quantidade -= 10
      this.inicio -= 10
    }
  }

  cad() { // deixa o componente cad-referencia visível ou nãp
    this.cadOk = !this.cadOk
  }

  edit() {// deixa o componente edit-referencia visível ou nãp
    this.editOk = !this.editOk
  }

  Edit(id: Number) { //chama o o form de edição

    this.Allreferencias.map((item) => { //vai atrás do form expecífico
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

    this.referencias = this.Allreferencias.filter((m) =>
      /*m.author.filter((i) =>{
        if(i.toLocaleLowerCase() === value)
        console.log(i)
      }) ||*/
      m.title.toLocaleLowerCase().includes(value) ||
      m.subtitle.toLocaleLowerCase().includes(value)
    )
  }

  delete(id: Number) { //função delete que apaga uma referencia e reinicia a página
    const conf = confirm("Deseja apagar referência?")

    if (conf) {
      this.service.deleteRef(id).subscribe((res) => {
        window.location.reload()
      })
    }

    return //null caso a pessoa cancele
  }

  Expandir(id: Number) { //mostra a descrição de forma dinâmica
    const ID = parseInt(id.toString()) - this.inicio
    const item = document.querySelectorAll(".itemDescription")[ID] as HTMLElement //relaciona o ID com a section que aparece

    if (item.style.whiteSpace == "nowrap" || item.style.whiteSpace == "") {
      item.style.whiteSpace = "break-spaces"
    } else {
      item.style.whiteSpace = "nowrap"
    }

  }

}
