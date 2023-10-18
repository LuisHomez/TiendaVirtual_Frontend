import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFinalizarCompraComponent } from './finalizar-compra.component';

describe('FinalizarCompraComponent', () => {
  let component: FormFinalizarCompraComponent;
  let fixture: ComponentFixture<FormFinalizarCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFinalizarCompraComponent]
    });
    fixture = TestBed.createComponent(FormFinalizarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
