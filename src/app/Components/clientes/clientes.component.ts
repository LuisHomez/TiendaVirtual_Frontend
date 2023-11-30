import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormularioClientesComponent } from 'src/app/Forms/formulario-clientes/formulario-clientes.component';
import { ClienteBD } from 'src/app/Models/ClienteBD';
import { ApiService } from 'src/app/services/api.service';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
  
})
export class ClientesComponent implements OnInit, AfterViewInit{
  
  loading = true;
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<any>;

  constructor(public formService:FormsService, public api:RestService, public dialog: MatDialog){
  this.dataSource= new MatTableDataSource();
  }

  nuevoRegistro(){
    this.formService.title = "Crear Nuevo";
    const dialogRef = this.dialog.open(FormularioClientesComponent);

    dialogRef.afterClosed().subscribe(result =>{
      console.log('Dialog result: ${result}');
    })
  }

  openDialog() {    
    const dialogRef = this.dialog.open(FormularioClientesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void{

    console.log("soy ngOnInit desde clientes:");

    setTimeout(() => {
      this.api.Get("Clientes").then((res) => {
        for (let index = 0; index < res.length; index++) {
          this.loadTable([res[index]]);
        }

        this.dataSource.data = res;
        this.loading = false; // Indica que la carga ha terminado
        console.log(res);
      });
    }, 2000);
    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadTable(data:any[]){
    this.displayedColumns=[];
    if(data.length>0){
      for (let column in data[0]){
        this.displayedColumns.push(column)
      }
      this.displayedColumns.push('Acciones')
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  borrar(element:any){
    console.log("hola soy borrar de clientes:"),
    Swal.fire({
      title: '¿Esta seguro de eliminar este registro?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        let object:ClienteBD = element;
        object.estado = false;
        this.api.Put("Clientes", String(object.clienteId), object);

        Swal.fire('Registro eliminado', '', 'success')
        this.ngOnInit();
      } else if (result.isDenied) {
        Swal.fire('No se realizaron cambios', '', 'info')
      }
    })
    this.ngOnInit(); 

  }

  editar(element:any){
    this.formService.title = "Editar";
    this.formService.cliente = element;
    const dialogRef = this.dialog.open(FormularioClientesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }



}
