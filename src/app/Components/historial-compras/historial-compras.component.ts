import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit{

  constructor(public api:RestService){}

  ngOnInit(): void{
    this.get();
  }

  public get(){
    this.api.Get("HistorialCompras");
  }


}
