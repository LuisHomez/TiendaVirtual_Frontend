import { Component, OnInit,  } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(public login:LoginService){}
  
  ngOnInit(): void {
    console.log("soy oninit me estoy ejecutando desde app.component");    
    this.login.validatorLogin$.subscribe((value)=>{
      this.validatorLogin = value;
    });
    console.log(this.login.getValidatorLogin());
  }
  validatorLogin:boolean;
  title = 'TiendaVirtual';  
}
