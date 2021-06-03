import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinovacComponent } from './sinovac.component';

describe('SinovacComponent', () => {
  let component: SinovacComponent;
  let fixture: ComponentFixture<SinovacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinovacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinovacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
