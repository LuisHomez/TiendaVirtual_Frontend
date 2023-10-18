import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioproductoComponent } from './formularioproducto.component';

describe('FormularioproductoComponent', () => {
  let component: FormularioproductoComponent;
  let fixture: ComponentFixture<FormularioproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioproductoComponent]
    });
    fixture = TestBed.createComponent(FormularioproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
