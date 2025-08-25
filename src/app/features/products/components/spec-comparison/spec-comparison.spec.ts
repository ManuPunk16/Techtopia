import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecComparison } from './spec-comparison';

describe('SpecComparison', () => {
  let component: SpecComparison;
  let fixture: ComponentFixture<SpecComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecComparison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecComparison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
