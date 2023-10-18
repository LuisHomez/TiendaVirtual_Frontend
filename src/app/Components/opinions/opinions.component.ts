import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormularioOpinionsComponent } from 'src/app/Forms/formulario-opinions/formulario-opinions.component';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(public api:ApiService, public dialog: MatDialog){
  this.dataSource= new MatTableDataSource();
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormularioOpinionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void{
    this.api.get("Opinions").then((res)=>{

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
