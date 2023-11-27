import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormularioClientesComponent } from 'src/app/Forms/formulario-clientes/formulario-clientes.component';
import { ApiService } from 'src/app/services/api.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
  
})
export class ClientesComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<any>;

  constructor(public api:RestService, public dialog: MatDialog){
  this.dataSource= new MatTableDataSource();
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormularioClientesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void{
    this.api.Get("Clientes").then((res)=>{

    for (let index = 0; index < res.length; index++){
        this.loadTable([res[index]])
    }
      
      this.dataSource.data=res;
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
}
