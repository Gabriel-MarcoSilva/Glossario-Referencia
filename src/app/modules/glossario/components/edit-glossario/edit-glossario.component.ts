import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Glossario } from 'src/app/model/Glossario.models';
import { GlossarioService } from 'src/app/services/glossario/glossario.service';

@Component({
  selector: 'app-edit-glossario',
  templateUrl: './edit-glossario.component.html',
  styleUrls: ['./edit-glossario.component.css']
})
export class EditGlossarioComponent {

  @Input() info!: Glossario
  @Input() ID!: Number

  @Output() EditOk: EventEmitter<any> = new EventEmitter()

  public form!: FormGroup

  constructor(
    private service: GlossarioService
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      id: new FormControl(this.ID, Validators.required),
      keyWord: new FormControl(this.info ? this.info.keyWord : '', Validators.required),
      description: new FormControl(this.info ? this.info.description : '', Validators.required),
      created_at: new FormControl(this.info ? this.info.created_at : '', Validators.required),
      updated_at: new FormControl(this.date())
    })

  }

  trade() {
    this.EditOk.emit()
  }

  async onSubmit() {

    const id = parseInt(this.ID.toString())

    await this.service.editGlossario(id!, this.form.value).subscribe(res => {
      window.location.reload()
    })

    alert(this.form.value.keyWord + " atualizado com sucesso")

  }

  date() {
    const data = new Date();

    const DD = String(data.getDate()).padStart(2, "0") //pega o dia
    const MM = String(data.getMonth() + 1).padStart(2, "0") //pega o mês
    const YY = data.getFullYear() //pega o ano

    const date: String = `${DD}/${MM}/${YY}`

    return date
  }

}
