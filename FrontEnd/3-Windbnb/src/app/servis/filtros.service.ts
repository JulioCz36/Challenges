import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  selectedLocationSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  selectedLocation$: Observable<string | null> = this.selectedLocationSubject.asObservable();

  totalGuestsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalGuests$: Observable<number> = this.totalGuestsSubject.asObservable();

  // Propiedades públicas para controlar el estado de los filtros
  localidadFiltroAbierto = false;
  personasFiltroAbierto = false;

  localidadFiltroAbiertoChange = new Subject<boolean>();
  personasFiltroAbiertoChange = new Subject<boolean>();

  constructor() {}

  setSelectedLocation(location: string) {
    this.selectedLocationSubject.next(location);
  }

  setTotalGuests(totalGuests: number) {
    this.totalGuestsSubject.next(totalGuests);
  }

  toggleLocalidadFiltro(abrir: boolean) {
    this.localidadFiltroAbierto = abrir;
    this.localidadFiltroAbiertoChange.next(this.localidadFiltroAbierto);
  }

  togglePersonasFiltro(abrir: boolean) {
    this.personasFiltroAbierto = abrir;
    this.personasFiltroAbiertoChange.next(this.personasFiltroAbierto);
  }

}
