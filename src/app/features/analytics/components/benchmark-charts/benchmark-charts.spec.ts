import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkCharts } from './benchmark-charts';

describe('BenchmarkCharts', () => {
  let component: BenchmarkCharts;
  let fixture: ComponentFixture<BenchmarkCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenchmarkCharts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkCharts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
