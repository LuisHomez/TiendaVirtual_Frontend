import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OpinionBD } from 'src/app/Models/OpinionBD';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-opinions',
  templateUrl: './formulario-opinions.component.html',
  styleUrls: ['./formulario-opinions.component.css']
})

export class FormularioOpinionsComponent implements OnInit {

  title = "";

  form = this.fb.group({
     producto: new FormControl("", Validators.required),
     puntuacion: new FormControl("", Validators.required),
     comentario: new FormControl("", Validators.required),
  });
  
  constructor(public dialog:MatDialog, private fb: FormBuilder, public dialogRef: DialogRef, public formsService: FormsService, public api: RestService) {}

  ngOnInit(): void {
    
    console.log("Lo que llega al abrir el formulario: ", this.formsService.opinion.producto);
    console.log("El valor de title: ", this.formsService.title);

    if(this.formsService.title == 'Editar'){
      console.log("Tratando de setear producto con: ", this.formsService.opinion.producto);
      this.form.setControl('producto', new FormControl(this.formsService.opinion.producto.toString()));
      this.form.setControl('puntuacion', new FormControl(this.formsService.opinion.puntuacion.toString()));
      this.form.setControl('comentario', new FormControl(this.formsService.opinion.comentario.toString()));
    }
    this.title = this.formsService.title;

  }

  close(){
    this.dialogRef.close();
  }

  onSubmit(): void{
    if(this.form.valid){
      if(this.formsService.title == 'Editar'){
        let object:OpinionBD = {
          opinionId:this.formsService.opinion.opinionId,
          productoId:this.formsService.opinion.productoId,
          puntuacion:Number(this.form.controls['puntuacion'].value),
          comentario:this.form.controls['comentario'].value,   
          fechaPublicacion: new Date(), 
          estado:true,
        }
        console.log("esto es lo que estoy enviando por put");
        console.log(object);

        this.api.Put('Opiniones',String(this.formsService.opinion.opinionId), object);
        this.dialog.closeAll();
      }      
    }
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
      );
    window.location.reload();
    }
}
