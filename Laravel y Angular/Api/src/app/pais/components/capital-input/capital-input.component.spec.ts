import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalInputComponent } from './capital-input.component';

describe('CapitalInputComponent', () => {
  let component: CapitalInputComponent;
  let fixture: ComponentFixture<CapitalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
