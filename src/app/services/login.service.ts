import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private validatorLoginSubject = new BehaviorSubject<boolean>(false);
  validatorLogin$ = this.validatorLoginSubject.asObservable();  

  setValidatorLogin(value: boolean): void {
    this.validatorLoginSubject.next(value);
    localStorage.setItem('validatorLogin', JSON.stringify(value));
    console.log("soy el validador observable, mi valor es: " + this.validatorLoginSubject.value);
  }

  getValidatorLogin(): boolean {
    const storedValue = localStorage.getItem('validatorLogin');
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }
    return this.validatorLoginSubject.value;
  }

  logout(): void {
    // Limpiar información sensible del localStorage
    localStorage.removeItem('validatorLogin');
  
    // Setea el estado del inicio de sesión a falso
    this.setValidatorLogin(false);
  
    // Puedes realizar otras acciones según tus necesidades
    console.log('Cerrando sesión...');
  }

  constructor() {}
}
