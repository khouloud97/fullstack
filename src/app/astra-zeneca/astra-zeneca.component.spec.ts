import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstraZenecaComponent } from './astra-zeneca.component';

describe('AstraZenecaComponent', () => {
  let component: AstraZenecaComponent;
  let fixture: ComponentFixture<AstraZenecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstraZenecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstraZenecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
