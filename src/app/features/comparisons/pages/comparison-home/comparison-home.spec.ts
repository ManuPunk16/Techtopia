import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonHome } from './comparison-home';

describe('ComparisonHome', () => {
  let component: ComparisonHome;
  let fixture: ComponentFixture<ComparisonHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
