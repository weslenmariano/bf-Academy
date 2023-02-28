import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosSingleComponent } from './cursos-single.component';

describe('CursosSingleComponent', () => {
  let component: CursosSingleComponent;
  let fixture: ComponentFixture<CursosSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
