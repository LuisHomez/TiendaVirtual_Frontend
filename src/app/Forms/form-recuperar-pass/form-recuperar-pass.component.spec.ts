import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecuperarPassComponent } from './form-recuperar-pass.component';

describe('FormRecuperarPassComponent', () => {
  let component: FormRecuperarPassComponent;
  let fixture: ComponentFixture<FormRecuperarPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRecuperarPassComponent]
    });
    fixture = TestBed.createComponent(FormRecuperarPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
