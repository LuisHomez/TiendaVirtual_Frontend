import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public api: HttpClient) { }
  url="https://localhost:7199/api/"

  async Get(controlador:string){
    var response:any
     await this.api.get(this.url+controlador).toPromise().then(res=>{
        response=res
        console.log(res);
     }
     );
      return response
  }
  async Post(controlador:string, body:any){
    var response:any
     await this.api.post(this.url+controlador,body).subscribe(res=>{
        response=res
     }
     );
      return response
  }
  async Put(controlador:string, id:string, body:any){
    var response:any
     await this.api.put(this.url+controlador+"/"+id,body).subscribe(res=>{
        response=res
     }
     );
      return response
  }
  async Delete(controlador:string, id:string){
    var response:any
     await this.api.delete(this.url+controlador+"/"+id).subscribe(res=>{
        response=res
     }
     );
      return response
  }

}
