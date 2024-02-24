import { Injectable } from '@angular/core';
import { ProyectModel } from '../models/proyect.model';
import { PROYECTS } from 'src/assets/file/mok-proyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectListService {

  constructor() { }

  proyect:ProyectModel[] = PROYECTS;

  getProyects():ProyectModel[]{
    return this.proyect;
  }
}
