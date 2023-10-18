import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-formulariopedido',
  templateUrl: './formulariopedido.component.html',
  styleUrls: ['./formulariopedido.component.css']
})
export class FormulariopedidoComponent {

  form = this.fb.group({

    pedidoId: new FormControl("", Validators.required),
    producto: new FormControl("", Validators.required),
    precio: new FormControl("", Validators.required),
    cantidad: new FormControl("", Validators.required),
  
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
