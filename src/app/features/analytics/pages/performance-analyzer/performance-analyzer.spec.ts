import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAnalyzer } from './performance-analyzer';

describe('PerformanceAnalyzer', () => {
  let component: PerformanceAnalyzer;
  let fixture: ComponentFixture<PerformanceAnalyzer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceAnalyzer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceAnalyzer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
