import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariopedidoComponent } from './formulariopedido.component';

describe('FormulariopedidoComponent', () => {
  let component: FormulariopedidoComponent;
  let fixture: ComponentFixture<FormulariopedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariopedidoComponent]
    });
    fixture = TestBed.createComponent(FormulariopedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
