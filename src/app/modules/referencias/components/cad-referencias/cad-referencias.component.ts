import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cad-referencias',
  templateUrl: './cad-referencias.component.html',
  styleUrls: ['./cad-referencias.component.css']
})
export class CadReferenciasComponent {

  public form!: FormGroup;


  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      keyWord:['', Validators.required],
      description:['', Validators.required],
      created_at:[''],
      updated_at:[''],
    })
  }
  @Output() CadOk: EventEmitter<any> = new EventEmitter()

  trade(){
    this.CadOk.emit()

  }

}
