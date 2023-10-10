import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit, AfterViewInit {  
  
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
    this.api.Get("Carritoes").then((res)=>{

        for(let index = 0; index < res.length; index++){
          this.loadTable([res[index]]);
        }

        this.dataSource.data=res;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;

        console.log(res);

    });
  }

  loadTable(data:any[]){
    this.displayedColumns = [];
    if (data.length>0){
      for(let column in data[0]){
        this.displayedColumns.push(column);
      }
      this.displayedColumns.push("Acciones");
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
