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
    registrarse:boolean;
    recuperarPassword:boolean;

    constructor(private login:LoginService, public api:RestService){}

   async onSubmit(user:string, pass:string){      
      var val:any;
      val = await this.api.getLogin("Usuarios",user,pass);
      ;
      if(val && val.length > 0){
        var u:any;
        u = val;
        this.login.setUserLogin(u);
        this.login.setValidatorLogin(true);
      }else{
        console.log("val no entra en la condición");
      }
    }

    registrarUsuario(){
      this.login.setRegistro(true);
    }  

    recuperarPass(){
      this.login.setRecuperarPass(true);
    }

  }
