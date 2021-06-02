import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVaccinComponent } from './create-vaccin.component';

describe('CreateVaccinComponent', () => {
  let component: CreateVaccinComponent;
  let fixture: ComponentFixture<CreateVaccinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVaccinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
