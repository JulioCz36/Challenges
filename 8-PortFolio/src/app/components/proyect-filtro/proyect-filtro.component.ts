import { Component, OnInit, HostListener } from '@angular/core';
import { ProyectModel } from 'src/app/models/proyect.model';
import { ProyectListService } from 'src/app/services/proyect-list.service';

@Component({
  selector: 'app-proyect-filtro',
  templateUrl: './proyect-filtro.component.html',
  styleUrls: ['./proyect-filtro.component.css']
})
export class ProyectFiltroComponent implements OnInit { 
  selectedButton: string | null = null;
  title: string = 'Projects (6)';
  proyectList: ProyectModel[] = [];
  visibleProyects: ProyectModel[] = [];
  visibleColumns: number = 3;
  startIndex: number = 0;

  constructor(private proyectListService: ProyectListService) {}

  ngOnInit(): void {
    this.getProyectList();
    this.moverColumnasInicio();  
  }

  getProyectList(): void {
    this.proyectList = this.proyectListService.getProyects();
  }

  cambiarColor(boton: string) {
    this.selectedButton = boton;
  }

  moverColumnasInicio() {
    this.actualizarColumnas();
  }

  moverColumnas() {
    this.startIndex = (this.startIndex + this.visibleColumns) % this.proyectList.length;
    this.actualizarColumnas();
  }

  moverColumnasAtras() {
    this.startIndex = (this.startIndex - this.visibleColumns + this.proyectList.length) % this.proyectList.length;
    this.actualizarColumnas();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.actualizarColumnas();
  }

  private actualizarColumnas() {
    const totalColumns = this.proyectList.length;
    
    // Ajustar visibleColumns en función del tamaño de la pantalla
    this.visibleColumns = window.innerWidth <= 769 ? 1 : 3;

    // Obtener las columnas visibles
    this.visibleProyects = this.proyectList.slice(this.startIndex, this.startIndex + this.visibleColumns);
  }
}
