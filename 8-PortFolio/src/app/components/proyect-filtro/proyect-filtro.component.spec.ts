import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectFiltroComponent } from './proyect-filtro.component';

describe('ProyectFiltroComponent', () => {
  let component: ProyectFiltroComponent;
  let fixture: ComponentFixture<ProyectFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
