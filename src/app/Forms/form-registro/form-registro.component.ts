import { Component } from '@angular/core';
import { UsuarioBD } from 'src/app/Models/UsuarioBD';
import { LoginService } from 'src/app/services/login.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {

  user:string;
  pass:string;
  confirmpass:string;
  email:string;
  emailconfirm:string;
  firstname:string;
  lastname:string;

  
  result:any;

  constructor(public api:RestService, public login:LoginService){}

  onSubmit(){      
    //this.result = this.api.Post("Usuarios",element);          
    if (this.validarContraseña() && this.validarCorreos()) {
      var usuarioBD = new UsuarioBD(0, this.user, this.pass, "Usuario", this.email, this.firstname, this.lastname, true);
      console.log(usuarioBD);    
      var result = this.api.Post("Usuarios", usuarioBD);
      console.log(result);
      if (result) {
        this.login.setRegistro(false);
      }
    }else{
      console.log("Datos erroneos:")
    }
  }

  validarContraseña(){
    if (this.pass===this.confirmpass) {
      return true;
    }
    alert("Las contraseñas no coinciden");
    return false;
  }

  validarCorreos(){
    if (this.email===this.emailconfirm) {
      return true;
    }
    alert("Los correos no coinciden");
    return false;
  }

  cancel(){
    this.login.setRegistro(false);
  }
}
