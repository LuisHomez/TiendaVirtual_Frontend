import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClienteBD } from 'src/app/Models/ClienteBD';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})

export class FormularioClientesComponent {

  title = "";

  form = this.fb.group({
     nombre: new FormControl("", Validators.required),
     correoElectronico: new FormControl("", Validators.required),
     direccionEnvio: new FormControl("", Validators.required),
  });
  
  constructor(public dialog:MatDialog, public formService:FormsService, private fb: FormBuilder, public dialogRef: DialogRef, public api:RestService) {}

  ngOnInit(): void{

    this.title = this.formService.title;
    if(this.formService.title == 'Editar'){
      this.form.setControl('nombre', new FormControl(this.formService.cliente.nombre.toString()));
      this.form.setControl('correoElectronico', new FormControl(this.formService.cliente.correoElectronico.toString()));
      this.form.setControl('direccionEnvio', new FormControl(this.formService.cliente.direccionEnvio.toString()));
    }
  }

  close(){
    this.dialogRef.close();
  }

  onSubmit(): void{
    if(this.form.valid){
      if (this.formService.title == 'Editar'){
        let object:ClienteBD = {
          clienteId:this.formService.cliente.clienteId,
          nombre:this.form.controls['nombre'].value,
          correoElectronico:this.form.controls['correoElectronico'].value,
          direccionEnvio:this.form.controls['direccionEnvio'].value,
          estado:this.formService.cliente.estado,
        }

        this.api.Put('Clientes', String(this.formService.cliente.clienteId), object)
        .then(() => {
          this.dialog.closeAll();        
          Swal.fire('Ok!','Se ha realizado la modificación!','success').then(()=>{
            window.location.reload();
          });        
        })
        .catch(error => {
          console.log(error);
        });
      }else if(this.formService.title == "Crear Nuevo"){
        let object:ClienteBD = {
          clienteId:0,
          nombre:this.form.controls['nombre'].value,
          correoElectronico:this.form.controls['correoElectronico'].value,
          direccionEnvio:this.form.controls['direccionEnvio'].value,          
          estado:true,
        }
        this.api.Post('Clientes', object)
          .then(() => {
            this.dialog.closeAll();
            Swal.fire('Ok!','Registro exitoso!','success').then(()=>{
              window.location.reload();
            })
            .catch(error =>{
              console.log(error);
            })        
          });
      }
    }
  }
}
