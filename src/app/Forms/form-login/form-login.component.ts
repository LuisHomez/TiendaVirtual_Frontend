  import { Component } from '@angular/core';
  import { LoginService } from 'src/app/services/login.service';

  @Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.css']
  })
  export class FormLoginComponent {
    
    constructor(private login:LoginService){}

    onSubmit(){
      console.log("Inicio de la función:");
      this.login.setValidatorLogin(true);
      console.log(this.login.getValidatorLogin());
    }
  }
