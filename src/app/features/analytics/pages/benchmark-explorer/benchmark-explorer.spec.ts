import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkExplorer } from './benchmark-explorer';

describe('BenchmarkExplorer', () => {
  let component: BenchmarkExplorer;
  let fixture: ComponentFixture<BenchmarkExplorer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenchmarkExplorer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkExplorer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
