import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent implements OnInit{

  constructor(public api: RestService){

  }
  ngOnInit(): void{
    this.get();
  }

public get(){
  this.api.Get("Usuarios");
}

}
