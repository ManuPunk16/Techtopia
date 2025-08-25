import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkChart } from './benchmark-chart';

describe('BenchmarkChart', () => {
  let component: BenchmarkChart;
  let fixture: ComponentFixture<BenchmarkChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenchmarkChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
