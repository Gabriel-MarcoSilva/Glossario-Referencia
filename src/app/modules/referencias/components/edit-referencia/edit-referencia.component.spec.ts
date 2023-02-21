import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReferenciaComponent } from './edit-referencia.component';

describe('EditReferenciaComponent', () => {
  let component: EditReferenciaComponent;
  let fixture: ComponentFixture<EditReferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReferenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
