import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Referencia } from 'src/app/model/Referencia.model';
import { ReferenciasService } from 'src/app/services/referencias/referencias.service';

@Component({
  selector: 'app-cad-referencias',
  templateUrl: './cad-referencias.component.html',
  styleUrls: ['./cad-referencias.component.css']
})
export class CadReferenciasComponent {
  @Output() CadOk: EventEmitter<any> = new EventEmitter() //relacionamento filha-mãe (a filha emite um evento)
  @Output() ld: EventEmitter<any> = new EventEmitter()
  @Input() size!: number //relacionamento mae-filha (a filha recebe um valor)


  //declaração de variáveis
  public form!: FormGroup;

  public referencia!: Referencia

  public referencias!: Referencia[]
  public author: [{}] = [{}]

  constructor(
    private fb: FormBuilder,
    private service: ReferenciasService
  ) {
    this.form = this.fb.group({ //validação do form
      author: ['', Validators.required],
      authorSobrenome: ['', Validators.required],
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      publication: ['', Validators.required],
      Pag: [''],
      Vol: [''],
      numEdit: [''],
      Year: [''],
      publisher: ['', Validators.required],
      created_at: [''],
      updated_at: [''],
    })
  }

  async onSubmit() { //função que atribui valores para serem adicionados

    this.author.push({ "name": this.form.controls["author"].value, "sobrenome": this.form.controls["authorSobrenome"].value }) //pega o valor do input e agrga em um json
    const publisher = this.form.controls["publisher"].value
    let Year = this.form.value ? this.form.controls["Year"].value : 0
    let numEdit = this.form.value ? this.form.controls["numEdit"].value : 0
    let Vol = this.form.value ? this.form.controls["Vol"].value : 0
    let Pag = this.form.value ? this.form.controls["Pag"].value : 0
    const publication = this.form.controls["publication"].value
    const subtitle = this.form.controls["subtitle"].value
    const title = this.form.controls["title"].value
    const created_at = this.date()

    this.author.splice(0,1) //retira o primeiro item, pois a lista é inciada com um valor vazio [{}, {valores depois do submit}]

    //usa o modelo de referencia para gerar uma nova
    this.referencia = new Referencia(await this.size, this.author, title, subtitle, parseInt(numEdit), publisher, created_at, "--", publication, parseInt(Pag), parseInt(Vol), parseInt(Year)) 

    this.save() //chama a função save
  }

  save() { //cadastra e faz reload da página
    this.service.cadRef(this.referencia).subscribe((res) => {
      window.location.reload()
    }, err => this.ld.emit())
  }

  trade() { // emite o evento deixando o componente visível ou não função cad() em list-referencia
    this.CadOk.emit()
  }

  date() { //gera uma String que contém a data do cadastro
    const data = new Date();

    const DD = String(data.getDate()).padStart(2, "0") //pega o dia
    const MM = String(data.getMonth() + 1).padStart(2, "0") //pega o mês
    const YY = data.getFullYear() //pega o ano

    const date: String = `${DD}/${MM}/${YY}`

    return date
  }

  newAuthor() { // é chamada pra adicionar + de um autor e deixar os campos vazios para que seja possível cadastrar um novo
    this.author.push({ "name": this.form.controls["author"].value, "sobrenome": this.form.controls["authorSobrenome"].value })
    this.form.controls["author"].reset()
    this.form.controls["authorSobrenome"].reset()
  }
}
