import { Component, OnInit} from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  constructor(public api: RestService){

  }
  ngOnInit(): void{
    this.get();
  }

public get(){
  this.api.Get("Clientes");
}

}
