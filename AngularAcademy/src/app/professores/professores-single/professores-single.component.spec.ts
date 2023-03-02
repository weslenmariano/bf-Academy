import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresSingleComponent } from './professores-single.component';

describe('ProfessoresSingleComponent', () => {
  let component: ProfessoresSingleComponent;
  let fixture: ComponentFixture<ProfessoresSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessoresSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessoresSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
