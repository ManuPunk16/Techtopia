import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceComparison } from './performance-comparison';

describe('PerformanceComparison', () => {
  let component: PerformanceComparison;
  let fixture: ComponentFixture<PerformanceComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceComparison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceComparison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
