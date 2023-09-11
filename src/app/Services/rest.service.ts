import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public api:HttpClient) { }

  public async Get(url:String){
    
    await this.api.get("https://localhost:7199/api/"+url).toPromise().then((res)=>{
      console.log(res);
    });
  }
}
