import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulariocategoria',
  templateUrl: './formulariocategoria.component.html',
  styleUrls: ['./formulariocategoria.component.css']
})
export class FormulariocategoriaComponent {

  form = this.fb.group({
    
    Id: new FormControl("", Validators.required),
    descripcion: new FormControl("", Validators.required),
    nombre: new FormControl("", Validators.required),
  
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
