import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioBD } from 'src/app/Models/UsuarioBD';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  userLogin:UsuarioBD;
  nombreUsuario:string;

  constructor(private login:LoginService){}
  
  ngOnInit(): void {
    console.log("Este es el ngOnInit. Me estoy ejecutando desde el componente:");

    this.login.usuarioLogin$
      .subscribe((value: UsuarioBD) => {
        // Asegúrate de que el array tenga al menos un elemento
        if (value) {
          this.userLogin = value[0];
          console.log("Nuevo valor del usuario login: ", this.userLogin);

          // Ahora puedes acceder a los atributos del usuario
          console.log("Nuevo valor de nombreUsuario del usuario login: ", this.userLogin.nombreUsuario);
          console.log("Nuevo valor de contraseña del usuario login: ", this.userLogin.contraseña);
          this.nombreUsuario = this.userLogin.nombres+" "+this.userLogin.apellidos;
          // ... continua con los demás atributos
        } else {
          console.log("El array de usuarios está vacío o es null/undefined.");
        }
      });
      
      const jsonString =  JSON.stringify(this.login.getUserLogin());
      console.log("El jason: ");
      console.log(jsonString);
      const jsonObject = JSON.parse(jsonString);
      console.log("El otro jason: ");
      console.log(jsonObject[0]);

      const usuarioBD = new UsuarioBD(
        jsonObject[0].usuarioId,
        jsonObject[0].nombreUsuario,
        jsonObject[0].contraseña,
        jsonObject[0].rol,
        jsonObject[0].correoElectronico,
        jsonObject[0].nombres,
        jsonObject[0].apellidos,
        jsonObject[0].estado
      );
      
      // Imprimir la instancia de UsuarioBD
      console.log("El retorno de jason: ");
      console.log(usuarioBD);
      
      this.nombreUsuario = usuarioBD.getNombreCompleto();


  }

  logOut(){
    this.login.logout();
    console.log("Cerrando sesión...")
  }

}
