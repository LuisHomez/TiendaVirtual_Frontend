import { Injectable } from '@angular/core';
import { OpinionMV } from '../Models/OpinionMV';
import { UsuarioMV } from '../Models/UsuarioMV';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }
  title:string;
  opinion:OpinionMV;
  usuario:UsuarioMV;
}

