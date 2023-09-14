import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{

  constructor (public api:RestService ){

  }
  ngOnInit(): void{
    this.get();
  }

public get(){
  this.api.Get("Categoriums");
}

}
