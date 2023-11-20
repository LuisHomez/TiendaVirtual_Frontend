import { Injectable } from '@angular/core';
import { OpinionMV } from '../Models/OpinionMV';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }
  title:string;
  opinion:OpinionMV;
}

