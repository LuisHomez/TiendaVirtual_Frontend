import { Component, OnInit,  } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(public login:LoginService){}
  
  recuperarPassword:boolean = false;
  registrarse:boolean;
  validatorLogin:boolean;
  title = 'TiendaVirtual';

  ngOnInit(): void {
    // console.log("Limpiando el local storage");
    // this.cleanLocalStorage();
    
    console.log("soy oninit me estoy ejecutando desde app.component");

    this.login.validatorLogin$
      .subscribe((value: boolean) => {
        this.validatorLogin = value;
        console.log("Nuevo valor del validador:", this.validatorLogin);
        // Coloca aquí el código que deseas ejecutar cuando se actualiza el validador
      });

    this.validatorLogin = this.login.getValidatorLogin();
    
      console.log("valor de validatorLogin: ", this.validatorLogin);

    this.login.registro$
      .subscribe((value:boolean) =>{
        this.registrarse = value;
        console.log("Nuevo valor del registro:", this.registrarse);
      });
    
    this.registrarse = this.login.getRegistro();

    console.log("valor de registro: ", this.registrarse);

    this.login.recuperarPass$
      .subscribe((value:boolean) =>{
        this.recuperarPassword = value;
        console.log("Nuevo valor del password:", this.recuperarPassword);
      });

    this.recuperarPassword = this.login.getRecuperarPass();

    console.log("valor de recuperarPassword: ", this.recuperarPassword);
  }

  cleanLocalStorage(){
    localStorage.removeItem('recuperar');
  }


}
