import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductoBD } from 'src/app/Models/ProductoBD';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formularioproducto',
  templateUrl: './formularioproducto.component.html',
  styleUrls: ['./formularioproducto.component.css']
})
export class FormularioproductoComponent {

  title = "";

  form = this.fb.group({
    nombre: new FormControl("", Validators.required),
    descripcion: new FormControl("", Validators.required),
    precio: new FormControl("", Validators.required),
    imagen: new FormControl("", Validators.required),  
  });
  
  constructor(public dialog:MatDialog , public formService:FormsService,private fb: FormBuilder, public dialogRef: DialogRef, public api:RestService) {}

  ngOnInit(): void{

    this.title = this.formService.title;
    console.log("El título del formulario es: ", this.title);
    if(this.formService.title == 'Editar'){
      this.form.setControl('nombre', new FormControl(this.formService.producto.nombre.toString()));
      this.form.setControl('descripcion', new FormControl(this.formService.producto.descripcion.toString()));
      this.form.setControl('precio', new FormControl(this.formService.producto.precio.toString()));
      this.form.setControl('imagen', new FormControl(this.formService.producto.imagen.toString()));
    }
  }

  close(){
    this.dialogRef.close();
  }

  onSubmit(): void{
    if(this.form.valid){
      if (this.formService.title == 'Editar'){
        let object:ProductoBD = {
          productoId:this.formService.producto.productoId,
          nombre:this.form.controls['nombre'].value,
          descripcion:this.form.controls['descripcion'].value,
          precio:this.form.controls['precio'].value,
          imagen:this.form.controls['imagen'].value,
          categoriaId:this.formService.producto.categoriaId,
          estado:true,
        }

        this.api.Put('Productos', String(this.formService.producto.productoId), object)
        .then(() => {
          this.dialog.closeAll();        
          Swal.fire('Ok!','Se ha realizado la modificación!','success').then(()=>{
            window.location.reload();
          });        
        })
        .catch(error => {
          console.log(error);
        });
      }else if(this.formService.title == 'Crear Nuevo'){
        let object:ProductoBD = {
          productoId:0,
          nombre:this.form.controls['nombre'].value,
          descripcion:this.form.controls['descripcion'].value,
          precio:this.form.controls['precio'].value,
          imagen:this.form.controls['imagen'].value,
          categoriaId:1,          
          estado:true,
        }
        this.api.Post('Productos', object)
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
