import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionOutputComponent } from './region-output.component';

describe('RegionOutputComponent', () => {
  let component: RegionOutputComponent;
  let fixture: ComponentFixture<RegionOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
