import { Component, OnInit } from '@angular/core';
import { FiltrosService } from '../../servis/filtros.service';


@Component({
  selector: 'app-header-buscador',
  templateUrl: './header-buscador.component.html',
  styleUrls: ['./header-buscador.component.css']
})
export class HeaderBuscadorComponent implements OnInit {
  isMenuActive = false;
  originalScrollPosition = 0;

  selectedLocation: string | null = null;
  totalGuests: number = 0; // Variable para almacenar el total de huéspedes

  constructor(private filtros: FiltrosService,) { }

  toggleMenu() {
    if (!this.isMenuActive) {
      // Guarda la posición actual antes de abrir el menú
      this.originalScrollPosition = window.scrollY;
    }

    this.isMenuActive = !this.isMenuActive;
  }

  closeMenu() {
    this.isMenuActive = false;
    // Vuelve a la posición original después de cerrar el menú
    window.scrollTo({ top: this.originalScrollPosition, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.filtros.selectedLocation$.subscribe(location => {
      this.selectedLocation = location;
    });

    this.filtros.totalGuests$.subscribe(totalGuests => {
      this.totalGuests = totalGuests; // Actualiza el total de huéspedes
    });
  }

  
}
