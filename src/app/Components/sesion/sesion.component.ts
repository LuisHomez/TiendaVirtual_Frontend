import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements  OnInit{

  constructor (public api:RestService){

  }
  ngOnInit(): void{
    this.get();
  }

public get(){
  this.api.Get("Productoes");
}
}