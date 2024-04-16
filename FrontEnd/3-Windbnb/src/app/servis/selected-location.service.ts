import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedLocationService {

  private selectedLocationSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  selectedLocation$: Observable<string | null> = this.selectedLocationSubject.asObservable();

  setSelectedLocation(location: string) {
    this.selectedLocationSubject.next(location);
  }
}
