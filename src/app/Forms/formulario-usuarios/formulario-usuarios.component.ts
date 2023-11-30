import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioBD } from 'src/app/Models/UsuarioBD';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
   selector: 'app-formulario-usuarios',
   templateUrl: './formulario-usuarios.component.html',
   styleUrls: ['./formulario-usuarios.component.css']
})

export class FormularioUsuariosComponent implements OnInit{

  title = "";

  form = this.fb.group({
     nombreUsuario: new FormControl("", Validators.required),
     contrasena: new FormControl("", Validators.required),
     rol: new FormControl("", Validators.required),
     correo: new FormControl("", Validators.required),
     nombres: new FormControl("", Validators.required),
     apellidos: new FormControl("", Validators.required),
  });
  
  constructor(public dialog:MatDialog,private fb: FormBuilder, public dialogRef: DialogRef, public formService:FormsService, public api: RestService) {}
  
  
  ngOnInit(): void {
    
    this.title = this.formService.title;
    if (this.formService.title == 'Editar') {
      this.form.setControl('nombreUsuario', new FormControl(this.formService.usuario.nombreUsuario.toString()));
      this.form.setControl('contrasena', new FormControl(this.formService.usuario.contraseña.toString()));
      this.form.setControl('rol', new FormControl(this.formService.usuario.rol.toString()));
      this.form.setControl('correo', new FormControl(this.formService.usuario.correoElectronico.toString()));
      this.form.setControl('nombres', new FormControl(this.formService.usuario.nombres.toString()));
      this.form.setControl('apellidos', new FormControl(this.formService.usuario.apellidos.toString()));
    }    
  }

  close(){
    this.dialogRef.close();
  }

  onSubmit(): void{
    if(this.form.valid){
      if (this.formService.title == 'Editar') {
        let object:UsuarioBD = {
          usuarioId:this.formService.usuario.usuarioId,
          nombreUsuario:this.form.controls['nombreUsuario'].value,
          contraseña:this.form.controls['contrasena'].value,
          rol:this.form.controls['rol'].value,
          correoElectronico:this.form.controls['correo'].value,
          nombres:this.form.controls['nombres'].value,
          apellidos:this.form.controls['apellidos'].value,
          estado:this.formService.usuario.estado,
        }
      
        this.api.Put('Usuarios', String(this.formService.usuario.usuarioId), object)
          .then(() => {
              this.dialog.closeAll();        
              Swal.fire('Ok!','Se ha realizado la modificación!','success').then(()=>{
                window.location.reload();
              });        
            })
            .catch(error => {
              console.log(error);
            });
      }else if(this.formService.title == 'Crear Nuevo') {
        let object:UsuarioBD = {
          usuarioId:0,
          nombreUsuario:this.form.controls['nombreUsuario'].value,
          contraseña:this.form.controls['contrasena'].value,
          rol:this.form.controls['rol'].value,
          correoElectronico:this.form.controls['correo'].value,
          nombres:this.form.controls['nombres'].value,
          apellidos:this.form.controls['apellidos'].value,
          estado:true,
        }
        this.api.Post('Usuarios', object)
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