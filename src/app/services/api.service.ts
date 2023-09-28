import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Url="https://localhost:7199/api/"

  constructor(public http:HttpClient) { }

  public async get(controller: string){
    var result:any
await this.http.get(this.Url+controller).toPromise().then(x=>{
  result=x
})
return result;
  }
}
