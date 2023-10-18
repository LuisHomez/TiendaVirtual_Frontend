import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})

export class FormularioClientesComponent {

  form = this.fb.group({
     nombre: new FormControl("", Validators.required),
     correoElectronico: new FormControl("", Validators.required),
     dreccionEnvio: new FormControl("", Validators.required),
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
