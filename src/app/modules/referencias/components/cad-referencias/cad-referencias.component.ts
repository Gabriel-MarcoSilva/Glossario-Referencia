import { Component, EventEmitter, Output } from '@angular/core';
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

  onSubmit() {

    const author = this.form.controls["author"].value
    const publisher = this.form.controls["publisher"].value
    const Year = this.form.controls["Year"].value
    const numEdit = this.form.controls["numEdit"].value
    const Vol = this.form.controls["Vol"].value
    const Pag = this.form.controls["Pag"].value
    const publication = this.form.controls["publication"].value
    const subtitle = this.form.controls["subtitle"].value
    const title = this.form.controls["title"].value
    const created_at = this.date()

    this.referencia = new Referencia(4, author, title, subtitle, numEdit, publisher, created_at, "--", publication, Pag, Vol, Year)
  
    console.log(this.referencia)

    this.save()
  }
  
  save(){
    this.service.cadRef(this.referencia).subscribe((res) => {
      window.location.reload()
    }, err => {
      console.log(err);
    })
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
