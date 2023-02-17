import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadGlossarioComponent } from './cad-glossario.component';

describe('CadGlossarioComponent', () => {
  let component: CadGlossarioComponent;
  let fixture: ComponentFixture<CadGlossarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadGlossarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadGlossarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
