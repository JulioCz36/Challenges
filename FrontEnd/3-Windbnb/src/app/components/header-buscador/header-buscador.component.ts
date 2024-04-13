import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-buscador',
  templateUrl: './header-buscador.component.html',
  styleUrls: ['./header-buscador.component.css']
})
export class HeaderBuscadorComponent implements OnInit {
  isMenuActive = false;
  originalScrollPosition = 0;

  constructor() { }

  ngOnInit(): void {
  }

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
}
