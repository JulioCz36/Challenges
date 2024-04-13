import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-buscar',
  templateUrl: './card-buscar.component.html',
  styleUrls: ['./card-buscar.component.css']
})
export class CardBuscarComponent implements OnInit {
  @Output() cerrar: EventEmitter<void> = new EventEmitter<void>();

  // ... Resto del código ...

  cerrarComponente() {
    // Agrega cualquier lógica de cierre necesaria aquí

    // Emite el evento de cerrar al componente padre
    this.cerrar.emit();
  }

  ngOnInit() {
    // Lógica de inicialización si es necesario
  }
}
