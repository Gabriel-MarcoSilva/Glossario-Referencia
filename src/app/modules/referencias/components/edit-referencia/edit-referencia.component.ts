import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Referencia } from 'src/app/model/Referencia.model';
import { ReferenciasService } from 'src/app/services/referencias/referencias.service';

@Component({
  selector: 'app-edit-referencia',
  templateUrl: './edit-referencia.component.html',
  styleUrls: ['./edit-referencia.component.css']
})
export class EditReferenciaComponent {
  @Input() info!: Referencia
  @Input() ID!: Number

  @Output() EditOk: EventEmitter<any> = new EventEmitter()

  public form!: FormGroup

  constructor(
    private service: ReferenciasService
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      id: new FormControl(this.ID, Validators.required),
      author: new FormControl(this.info ? this.info.author : '', Validators.required),
      title: new FormControl(this.info ? this.info.title : '', Validators.required),
      subtitle: new FormControl(this.info ? this.info.subtitle : '', Validators.required),
      publisher: new FormControl(this.info ? this.info.publisher : '', Validators.required),
      numEdition: new FormControl(this.info ? this.info.numEdition : ''),
      publication: new FormControl(this.info ? this.info.publication : '', Validators.required),
      Pag: new FormControl(this.info ? this.info.Pag : ''),
      Vol: new FormControl(this.info ? this.info.Vol : ''),
      Year: new FormControl(this.info ? this.info.Year : ''),
      created_at: new FormControl(this.info ? this.info.created_at : '', Validators.required),
      updated_at: new FormControl(this.date())
    })

  }

  trade() {
    this.EditOk.emit()
  }

  async onSubmit() {

    const id = parseInt(this.ID.toString())

    await this.service.editRef(id!, this.form.value).subscribe(res => {
      window.location.reload()
    })
  }

  delete() {
    this.service.deleteRef(this.info.id).subscribe((res) => {
      window.location.reload()
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

}
