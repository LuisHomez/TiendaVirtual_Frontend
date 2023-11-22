import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private validatorLoginSubject = new BehaviorSubject<boolean>(false);
  validatorLogin$ = this.validatorLoginSubject.asObservable();  

  setValidatorLogin(value : boolean){
    this.validatorLoginSubject.next(value);
  }

  getValidatorLogin(){
    return this.validatorLoginSubject.value;
  }

  constructor() {}
}
