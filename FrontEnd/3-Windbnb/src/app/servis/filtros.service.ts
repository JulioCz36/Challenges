import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {
  

  private selectedLocationSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  selectedLocation$: Observable<string | null> = this.selectedLocationSubject.asObservable();

  private totalGuestsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalGuests$: Observable<number> = this.totalGuestsSubject.asObservable();

  setSelectedLocation(location: string) {
    this.selectedLocationSubject.next(location);
  }

  setTotalGuests(totalGuests: number) {
    this.totalGuestsSubject.next(totalGuests);
  }
}
