import { Injectable } from '@angular/core';
import { OpinionMV } from '../Models/OpinionMV';
import { UsuarioMV } from '../Models/UsuarioMV';
import { ClienteBD } from '../Models/ClienteBD';
import { ProductoBD } from '../Models/ProductoBD';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }
  title:string;
  opinion:OpinionMV;
  usuario:UsuarioMV;
  cliente:ClienteBD;
  producto:ProductoBD;
}

