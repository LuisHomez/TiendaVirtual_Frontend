import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsuarioBD } from '../Models/UsuarioBD';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private usuarioSubject = new BehaviorSubject<UsuarioBD | null>(null);
  usuarioLogin$ = this.usuarioSubject.asObservable();
  
  private validatorLoginSubject = new BehaviorSubject<boolean>(false);
  validatorLogin$ = this.validatorLoginSubject.asObservable();  
  
  private registroSubject = new BehaviorSubject<boolean>(false);
  registro$ = this.registroSubject.asObservable();
  
  private recuperarPassSubject = new BehaviorSubject<boolean>(false);
  recuperarPass$ = this.recuperarPassSubject.asObservable();

  setValidatorLogin(value: boolean): void {
    this.validatorLoginSubject.next(value);
    localStorage.setItem('validatorLogin', JSON.stringify(value));
    console.log("soy el validador observable, mi valor es: " + this.validatorLoginSubject.value);
  }

  setUserLogin(element:UsuarioBD):void{    
    this.usuarioSubject.next(element); 
    localStorage.setItem('nombresUsuario', JSON.stringify(element));
    console.log("Porque putas no funcionó: "+this.usuarioSubject.value);
  }

  setRegistro(value:boolean):void{
    this.registroSubject.next(value);
    localStorage.setItem('registro', JSON.stringify(value));
    console.log("soy el formulario de registro: "+this.registroSubject.value);
  }

  setRecuperarPass(value:boolean):void{
    this.recuperarPassSubject.next(value);
    localStorage.setItem('recuperar', JSON.stringify(value));
    console.log("soy el formulario de recuperar contraseña"+this.recuperarPassSubject.value);
  }

  getValidatorLogin(): boolean {
    const storedValue = localStorage.getItem('validatorLogin');
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }
    return this.validatorLoginSubject.value;
  }

  getUserLogin():UsuarioBD{
    const storedValue = localStorage.getItem('nombresUsuario');
    if(storedValue !== null){
      return JSON.parse(storedValue);
    }
    return this.usuarioSubject.value;
  }

  getRegistro():boolean{
    const storedValue = localStorage.getItem('registro');
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }
    return this.registroSubject.value
  }

  getRecuperarPass():boolean{
    const storedValue = localStorage.getItem('recuperar');
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }
    console.log("Soy recuperar pass mi valor es: ", this.recuperarPassSubject.value);
    return this.recuperarPassSubject.value;
  }

  logout(): void {
    // Limpiar información sensible del localStorage
    localStorage.removeItem('validatorLogin');
    localStorage.removeItem('registro');
    localStorage.removeItem('recuperar');
  
    // Setea el estado del inicio de sesión a falso
    this.setValidatorLogin(false);
    this.setRegistro(false);
    this.setRecuperarPass(false);
  
    // Puedes realizar otras acciones según tus necesidades
    console.log('Cerrando sesión...');
  }

  constructor() {}
}
