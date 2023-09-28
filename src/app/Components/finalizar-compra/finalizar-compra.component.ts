import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
  dataSource: MatTableDataSource<any>;
  constructor(public api:RestService){    
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void{
    this.get();
  }

  public get(){
    this.api.Get("MetodoPagoes").then((res)=>{

        for(let index = 0; index < res.length; index++){
          this.loadTable([res[index]]);
        }

        this.dataSource.data=res;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;

        console.log(res);
      }

    });
  }

  loadTable(data:any[]){
    this.displayedColumns = [];
    if (data.length>0){
      for(let column in data[0]){
        this.displayedColumns.push(column);
      }
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

}
