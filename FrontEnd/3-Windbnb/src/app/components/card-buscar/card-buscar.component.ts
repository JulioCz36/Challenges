import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-buscar',
  templateUrl: './card-buscar.component.html',
  styleUrls: ['./card-buscar.component.css']
})
export class CardBuscarComponent {
  @Output() cerrar = new EventEmitter<void>();

  cerrarComponente(): void {
    this.cerrar.emit();
  }
}
