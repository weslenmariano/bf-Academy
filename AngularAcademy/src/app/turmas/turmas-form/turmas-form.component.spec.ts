import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasFormComponent } from './turmas-form.component';

describe('TurmasFormComponent', () => {
  let component: TurmasFormComponent;
  let fixture: ComponentFixture<TurmasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurmasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
