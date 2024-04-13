import { Component, OnInit } from '@angular/core';
import { HabitacionesModel } from 'src/app/models/proyect.model';
import { DATOS } from 'src/assets/accesorios/stays';

@Component({
  selector: 'app-cards-departamentos',
  templateUrl: './cards-departamentos.component.html',
  styleUrls: ['./cards-departamentos.component.css']
})
export class CardsDepartamentosComponent implements OnInit {

  datosList: HabitacionesModel[] = DATOS;
  soloHelsinki: boolean = false;
  habitacionesFiltradas: HabitacionesModel[] = [];

  ngOnInit(): void {
    this.actualizarConteoHabitaciones();
  }

  toggleSoloHelsinki() {
    this.soloHelsinki = !this.soloHelsinki;
    this.actualizarConteoHabitaciones();
  }

  getFilteredData(): HabitacionesModel[] {
    if (this.soloHelsinki) {
      // Filtrar solo los elementos con ciudad igual a "Helsinki"
      return this.datosList.filter(habitacion => habitacion.city === 'Helsinki');
    } else {
      // Si soloHelsinki es falso, mostrar todos los elementos
      return this.datosList;
    }
  }

  private actualizarConteoHabitaciones() {
    // Obtener las habitaciones filtradas
    this.habitacionesFiltradas = this.getFilteredData();
    // Actualizar el conteo de habitaciones
    const conteo = this.habitacionesFiltradas.length;
    console.log('Número de habitaciones:', conteo);
  }
}

