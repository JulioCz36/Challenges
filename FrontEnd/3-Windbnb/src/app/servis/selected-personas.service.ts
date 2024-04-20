import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedPersonasService {

  private totalGuestsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalGuests$: Observable<number> = this.totalGuestsSubject.asObservable();

  setTotalGuests(totalGuests: number) {
    this.totalGuestsSubject.next(totalGuests);
  }
}
