import { Component, EventEmitter, Output } from '@angular/core';
import { FiltrosService } from '../../servis/filtros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-buscar-movil',
  templateUrl: './card-buscar-movil.component.html',
  styleUrls: ['./card-buscar-movil.component.css']
})
export class CardBuscarMovilComponent{
  localidadFiltroAbierto = false;
  personasFiltroAbierto = false;
  localidadSubscription: Subscription;
  personasSubscription: Subscription;

  constructor(private filtrosService: FiltrosService) {
    this.localidadSubscription = this.filtrosService.localidadFiltroAbiertoChange.subscribe(
      (estado: boolean) => {
        this.localidadFiltroAbierto = estado;
        // Cerrar el filtro de personas si se abre el filtro de localidad
        if (estado) {
          this.personasFiltroAbierto = false;
        }
      }
    );

    this.personasSubscription = this.filtrosService.personasFiltroAbiertoChange.subscribe(
      (estado: boolean) => {
        this.personasFiltroAbierto = estado;
        // Cerrar el filtro de localidad si se abre el filtro de personas
        if (estado) {
          this.localidadFiltroAbierto = false;
        }
      }
    );
  }

  ngOnDestroy() {
    this.localidadSubscription.unsubscribe();
    this.personasSubscription.unsubscribe();
  }

  @Output() cerrar = new EventEmitter<void>();

  cerrarComponente(): void {
    this.cerrar.emit();
  }

}
