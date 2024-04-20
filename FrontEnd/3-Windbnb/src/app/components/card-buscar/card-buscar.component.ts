import { Component, EventEmitter, Output } from '@angular/core';
import { FiltrosService } from '../../servis/filtros.service';

@Component({
  selector: 'app-card-buscar',
  templateUrl: './card-buscar.component.html',
  styleUrls: ['./card-buscar.component.css']
})
export class CardBuscarComponent {
  constructor(private filtro: FiltrosService) { }
  @Output() cerrar = new EventEmitter<void>();

  cerrarComponente(): void {
    this.cerrar.emit();
  }
}
