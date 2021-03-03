import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalOutputComponent } from './capital-output.component';

describe('CapitalOutputComponent', () => {
  let component: CapitalOutputComponent;
  let fixture: ComponentFixture<CapitalOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
