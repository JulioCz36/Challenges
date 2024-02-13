// En tu componente de Angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent {
  selectedButton: string | null = null;
  cambiarColor(boton: string) {
    this.selectedButton = boton;
  }
  
}
