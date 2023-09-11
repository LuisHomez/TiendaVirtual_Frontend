import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit{

  constructor(public api:RestService){}

  ngOnInit(): void{
    this.get();
  }

  public get(){
    this.api.Get("MetodoPagoes");
  }


}
