import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

@Component({
   selector: 'app-formulario-usuarios',
   templateUrl: './formulario-usuarios.component.html',
   styleUrls: ['./formulario-usuarios.component.css']
})

export class FormularioUsuariosComponent {

  form = this.fb.group({
     nombreUsuario: new FormControl("", Validators.required),
     contraseña: new FormControl("", Validators.required),
     rol: new FormControl("", Validators.required),
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
