import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RestService } from 'src/app/services/rest.service';

  @Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.css']
  })
  export class FormLoginComponent {
    
    user:string = '';
    pass:string = '';

    constructor(private login:LoginService, public api:RestService){}

   async onSubmit(user:string, pass:string){      
      var val:any;
      val = await this.api.getLogin("Usuarios",user,pass);
      if(val && val.length > 0){
        console.log("val es diferente de null");
        console.log(val[0]);
        this.login.setValidatorLogin(true);
      }else{
        console.log("val no entra en la condición");
      }
    }
  }
