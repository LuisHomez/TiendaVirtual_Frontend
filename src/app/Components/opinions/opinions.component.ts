import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatColumnDef, MatTableDataSource} from '@angular/material/table';
import { FormularioOpinionsComponent } from 'src/app/Forms/formulario-opinions/formulario-opinions.component';
import { ApiService } from 'src/app/services/api.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
  
})
export class OpinionsComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<any>;

  constructor(public api:RestService, public dialog: MatDialog){
  this.dataSource= new MatTableDataSource();
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormularioOpinionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void{
    this.api.Get("Opinions").then((res)=>{

    for (let index = 0; index < res.length; index++){
        this.loadTable([res[index]])
    }
      
      this.dataSource.data=res;

      console.log(res);
    })
    
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

borrar(usuario:any){

  Swal.fire({
    title: '¿Esta seguro de eliminar esta categoría?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.api.Delete("Opinions", usuario.opinionId);      
      Swal.fire('La categoría fue eliminada', '', 'success')
      this.ngOnInit();
    } else if (result.isDenied) {
      Swal.fire('No se realizaron cambios', '', 'info')
    }
  })

}
}





// import { Component, OnInit } from '@angular/core';
// import { RestService } from 'src/app/services/rest.service';


// @Component({
//   selector: 'app-opinions',
//   templateUrl: './opinions.component.html',
//   styleUrls: ['./opinions.component.css']
// })
// export class OpinionsComponent implements OnInit{

//   constructor(public api: RestService){

//   }
//   ngOnInit(): void{
//     this.get();
//   }

// public get(){
//   this.api.Get("Opinions");
// }

// }
