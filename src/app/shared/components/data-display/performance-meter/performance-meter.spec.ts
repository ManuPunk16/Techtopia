import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMeter } from './performance-meter';

describe('PerformanceMeter', () => {
  let component: PerformanceMeter;
  let fixture: ComponentFixture<PerformanceMeter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceMeter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceMeter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
