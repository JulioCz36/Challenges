import { Component, OnInit } from '@angular/core';
import { FiltrosService } from '../../servis/filtros.service';

@Component({
  selector: 'app-filtro-personas',
  templateUrl: './filtro-personas.component.html',
  styleUrls: ['./filtro-personas.component.css']
})
export class FiltroPersonasComponent implements OnInit {

  isMenuOpen = false;
  selectedLocation: string | null = null;
  contadorAdultos: number = 0;
  contadorNinos: number = 0;
  totalGuests: number = 0;

  constructor(private selectedPersonasService: FiltrosService) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  incrementCounter(type: number) {
    if (type === 1) {
      this.contadorAdultos++;
    } else if (type === 2) {
      this.contadorNinos++;
    }
    this.updateTotalGuests();
  }

  decrementCounter(type: number) {
    if (type === 1 && this.contadorAdultos > 0) {
      this.contadorAdultos--;
    } else if (type === 2 && this.contadorNinos > 0) {
      this.contadorNinos--;
    }
    this.updateTotalGuests();
  }

  updateTotalGuests() {
    this.totalGuests = this.contadorAdultos + this.contadorNinos;
    this.selectedPersonasService.setTotalGuests(this.totalGuests); // Actualiza el total de huéspedes en el servicio
  }
  

  ngOnInit(): void {
  }

}
