import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonBuilder } from './comparison-builder';

describe('ComparisonBuilder', () => {
  let component: ComparisonBuilder;
  let fixture: ComponentFixture<ComparisonBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
