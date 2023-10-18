import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-opinions',
  templateUrl: './formulario-opinions.component.html',
  styleUrls: ['./formulario-opinions.component.css']
})

export class FormularioOpinionsComponent {

  form = this.fb.group({
     producto: new FormControl("", Validators.required),
     puntuacion: new FormControl("", Validators.required),
     comentario: new FormControl("", Validators.required),
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
