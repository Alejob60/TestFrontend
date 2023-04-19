import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarEstudiantesComponent } from './borrar-estudiantes.component';

describe('BorrarEstudiantesComponent', () => {
  let component: BorrarEstudiantesComponent;
  let fixture: ComponentFixture<BorrarEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
