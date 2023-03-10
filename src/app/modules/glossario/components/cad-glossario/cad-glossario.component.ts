import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Glossario } from 'src/app/model/Glossario.models';
import { GlossarioService } from 'src/app/services/glossario/glossario.service';

@Component({
  selector: 'app-cad-glossario',
  templateUrl: './cad-glossario.component.html',
  styleUrls: ['./cad-glossario.component.css']
})
export class CadGlossarioComponent {

  @Output() CadOk: EventEmitter<any> = new EventEmitter() //relacionmento filha-mae (a filha emite um evento para a mãe)
  @Output() ld: EventEmitter<any> = new EventEmitter()

  @Input() size!: number //relacionamento mãe-filha (a mãe envia um dado para a filha)

  //declaração de variáveis

  public form!: FormGroup
  public glossario!: Glossario

  constructor(
    private fb: FormBuilder,
    private service: GlossarioService
  ) {
    this.form = this.fb.group({ //validação de formulário
      keyWord: ['', Validators.required],
      description: ['', Validators.required],
      created_at: [''],
      updated_at: [''],
    })
  }

  async onSubmit() { //função que atribui valores para serem adicionados

    const keyWord = this.form.controls["keyWord"].value
    const description = this.form.controls["description"].value
    const created_at = this.date()

    //usa o modelo de referencia para gerar uma nova
    this.glossario = (new Glossario(await this.size  , keyWord, description, created_at, "--"))

    this.save() //chama a função 
  }

  save() { // cadastra no banco de dados e reinicia a página
    this.service.setGlossario(this.glossario).subscribe((res) => {
      window.location.reload()
    }, err => this.ld.emit()) //caso dê erro ele emite o evento que dá reload na chamada do banco em lad() de list-glossario
  }

  date() { // gera a data do cadastro
    const data = new Date();

    const DD = String(data.getDate()).padStart(2, "0") //pega o dia
    const MM = String(data.getMonth() + 1).padStart(2, "0") //pega o mês
    const YY = data.getFullYear() //pega o ano

    const date: String = `${DD}/${MM}/${YY}`

    return date
  }

  trade() { //emite p evento de visualização do compoennte
    this.CadOk.emit()
  }
}
