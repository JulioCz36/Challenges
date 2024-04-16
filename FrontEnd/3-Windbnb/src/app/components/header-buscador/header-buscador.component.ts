import { Component, OnInit } from '@angular/core';
import { SelectedLocationService } from '../../servis/selected-location.service';

@Component({
  selector: 'app-header-buscador',
  templateUrl: './header-buscador.component.html',
  styleUrls: ['./header-buscador.component.css']
})
export class HeaderBuscadorComponent implements OnInit {
  isMenuActive = false;
  originalScrollPosition = 0;

  selectedLocation: string | null = null; // Corrección del nombre de la variable

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

  constructor(private selectedLocationService: SelectedLocationService) { }

  ngOnInit(): void {
    this.selectedLocationService.selectedLocation$.subscribe(location => {
      this.selectedLocation = location;
    });
  }

  
}
