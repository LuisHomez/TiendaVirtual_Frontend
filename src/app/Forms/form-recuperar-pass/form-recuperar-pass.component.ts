import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-recuperar-pass',
  templateUrl: './form-recuperar-pass.component.html',
  styleUrls: ['./form-recuperar-pass.component.css']
})
export class FormRecuperarPassComponent {

  user:string;
  pass:string;
  confirmpass:string;

  constructor(private login:LoginService){}

  onSubmit(){
    localStorage.removeItem('recuperar');
    this.login.setRecuperarPass(false);
  }

  cancel(){
    localStorage.removeItem('recuperar');
    this.login.setRecuperarPass(false);
  }

}
