import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']

})
export class UsuariosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<any>;

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.api.get("Usuarios").then((res) => {

      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]])
      }

      this.dataSource.data = res;

      console.log(res);
    })

    // const usuario = {
    //   nombreUsuario: "Juan Suarez",
    //   contraseña: "123abc",
    //   rol: "Admin"
    // }
    // this.post("https://localhost:7199/api/Usuarios" ,usuario);
    // this.put();
    // this.delete();
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
  // public get(){
  //   this.api.Get("Usuarios");
  // }

  // public put(){
  //   this.api.Put("Usuarios", "usuarioId","")
  // }

  // public post(controller: string, body: any){
  //   this.api.Post(controller, body)
  // }

  // public delete(){
  //   this.api.Post("Usuarios", "usuarioId")
  // }

}
