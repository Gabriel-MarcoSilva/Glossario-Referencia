import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGlossarioComponent } from './edit-glossario.component';

describe('EditGlossarioComponent', () => {
  let component: EditGlossarioComponent;
  let fixture: ComponentFixture<EditGlossarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGlossarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGlossarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
