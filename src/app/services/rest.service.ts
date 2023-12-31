import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
constructor(public api: HttpClient) { }
Url="https://localhost:7271/api/"

public async Get (controller: string){
  var response:any;
  await this.api.get(this.Url+controller).toPromise().then((res)=>{
    console.log(res);
    response = res;
  });
  return response;
}

public async getLogin (controller: string, user:string, pass:string){
  var response:any;
  await this.api.get(this.Url+controller+"/"+user+","+pass).toPromise().then((res)=>{
    console.log(res);
    response = res;
  });
  return response;
}

// async Post(controlador:string, body:any){
//   var response:any  
//    await this.api.post(this.Url+controlador,body).subscribe(res=>{
//       response=res
//    }
//    );
//     return response
// }

async Post(controlador: string, body: any) {
  try {
    const response = await this.api.post(this.Url + controlador, body).toPromise();
    return response;
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    throw error; // Puedes manejar el error según tus necesidades
  }
}

async Put(controlador:string, id:string, body:any){
  var response:any
   await this.api.put(this.Url+controlador+"/"+id,body).subscribe(res=>{
      response=res
   }
   );
    return response
}
async Delete(controlador:string, id:string){
  var response:any
   await this.api.delete(this.Url+controlador+"/"+id).subscribe(res=>{
      response=res
   }
   );
    return response  
}
}
