import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioOpinionsComponent } from './formulario-opinions.component';

describe('FormularioOpinionsComponent', () => {
  let component: FormularioOpinionsComponent;
  let fixture: ComponentFixture<FormularioOpinionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioOpinionsComponent]
    });
    fixture = TestBed.createComponent(FormularioOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
