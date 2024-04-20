import { TestBed } from '@angular/core/testing';

import { SelectedPersonasService } from './selected-personas.service';

describe('SelectedPersonasService', () => {
  let service: SelectedPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
