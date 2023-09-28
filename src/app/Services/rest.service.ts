import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  constructor(public api: HttpClient) { }
  Url = "https://localhost:7199/api/"
  public async Get(controller: string) {
    var result:any;
    await this.api.get(this.Url + controller).toPromise().then(res => {
      result = res;      
    })
    return result;
  }
}
