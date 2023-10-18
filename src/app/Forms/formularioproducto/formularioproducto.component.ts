import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formularioproducto',
  templateUrl: './formularioproducto.component.html',
  styleUrls: ['./formularioproducto.component.css']
})
export class FormularioproductoComponent {
  form = this.fb.group({
    nombre: new FormControl("", Validators.required),
    descripcion: new FormControl("", Validators.required),
    precio: new FormControl("", Validators.required),
    categoria: new FormControl("", Validators.required),
  
  });
  
  constructor(private fb: FormBuilder, public dialogRef: DialogRef) {}

  close(){
    this.dialogRef.close();
  }


  onSubmit(): void{
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
}
