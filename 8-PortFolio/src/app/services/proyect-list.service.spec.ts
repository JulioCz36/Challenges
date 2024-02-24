import { TestBed } from '@angular/core/testing';

import { ProyectListService } from './proyect-list.service';

describe('ProyectListService', () => {
  let service: ProyectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
