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

  @Output() CadOk: EventEmitter<any> = new EventEmitter()
  @Input() size!: number

  public form!: FormGroup
  public glossario!: Glossario

  constructor(
    private fb: FormBuilder,
    private service: GlossarioService
  ) {
    this.form = this.fb.group({
      keyWord: ['', Validators.required],
      description: ['', Validators.required],
      created_at: [''],
      updated_at: [''],
    })
  }

  onSubmit() {

    const keyWord = this.form.controls["keyWord"].value
    const description = this.form.controls["description"].value
    const created_at = this.date()

    this.glossario = (new Glossario(this.size  , keyWord, description, created_at, "--"))

    this.save()
  }

  save() { // ainda ta dando erro
    this.service.setGlossario(this.glossario).subscribe((res) => {
      window.location.reload()
    }, err => {
      console.log(err);
    })
  }

  date() {
    const data = new Date();

    const DD = String(data.getDate()).padStart(2, "0") //pega o dia
    const MM = String(data.getMonth() + 1).padStart(2, "0") //pega o mês
    const YY = data.getFullYear() //pega o ano

    const date: String = `${DD}/${MM}/${YY}`

    return date
  }

  trade() {
    this.CadOk.emit()
  }
}
