import { Component, OnInit } from '@angular/core';
import { FiltrosService } from '../../servis/filtros.service';

@Component({
  selector: 'app-filtro-localidad',
  templateUrl: './filtro-localidad.component.html',
  styleUrls: ['./filtro-localidad.component.css']
})
export class FiltroLocalidadComponent implements OnInit {

  isMenuOpen = false;
  selectedLocation: string | null = null;

  constructor(private selectedLocationService: FiltrosService) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectLocation(location: string) {
    this.selectedLocation = location;
    this.selectedLocationService.setSelectedLocation(location);
    this.isMenuOpen = false; // Cerrar el menú después de seleccionar la ubicación
  }

  ngOnInit(): void {
  }

}
