import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { FormularioUsuariosComponent } from 'src/app/Forms/formulario-usuarios/formulario-usuarios.component';
import { MatDialog } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, AfterViewInit {
  
  loading = true;
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<any>;

  constructor(public formService:FormsService, public api: RestService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  //Esto es lo mismo que hay en opendialog
  nuevoRegistro(){
    this.formService.title = "Crear Nuevo";    
    const dialogRef = this.dialog.open(FormularioUsuariosComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    })
  }

  ngOnInit(): void {    
    
    console.log("soy ngOnInit desde usuarios: ")

    setTimeout(() => {
      this.api.Get("Usuarios").then((res) => {
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

  loadTable(data: any[]) {
    this.displayedColumns = [];
    if (data.length > 0) {
      for (let column in data[0]) {
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

    Swal.fire({
      title: '¿Esta seguro de eliminar este registro?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.api.Delete("Usuarios", element.usuarioId);      
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
    this.formService.usuario = element;
    const dialogRef = this.dialog.open(FormularioUsuariosComponent);    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });        
  }

  openDialog() {
    this.formService.title = "Crear Nuevo";
    const dialogRef = this.dialog.open(FormularioUsuariosComponent);    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });        
  }

}
