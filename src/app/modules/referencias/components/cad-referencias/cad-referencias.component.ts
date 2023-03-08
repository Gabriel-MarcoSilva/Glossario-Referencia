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
  @Output() CadOk: EventEmitter<any> = new EventEmitter()
  @Output() ld: EventEmitter<any> = new EventEmitter()
  @Input() size!: number

  public form!: FormGroup;

  public referencia!: Referencia

  public referencias!: Referencia[]

  constructor(
    private fb: FormBuilder,
    private service: ReferenciasService
  ) {
    this.form = this.fb.group({
      author: ['', Validators.required],
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

  async onSubmit() {

    const author = this.form.controls["author"].value
    const publisher = this.form.controls["publisher"].value
    let Year = this.form.value ? this.form.controls["Year"].value : 0
    let numEdit = this.form.value ? this.form.controls["numEdit"].value : 0
    let Vol = this.form.value ? this.form.controls["Vol"].value : 0
    let Pag = this.form.value ? this.form.controls["Pag"].value : 0
    const publication = this.form.controls["publication"].value
    const subtitle = this.form.controls["subtitle"].value
    const title = this.form.controls["title"].value
    const created_at = this.date()
    
    this.referencia = new Referencia(await this.size, author, title, subtitle, parseInt(numEdit), publisher, created_at, "--", publication, parseInt(Pag), parseInt(Vol), parseInt(Year))

    this.save()
  }

  save() {
    this.service.cadRef(this.referencia).subscribe((res) => {
      window.location.reload()
    }, err => this.ld.emit())
  }

  trade() {
    this.CadOk.emit()
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
