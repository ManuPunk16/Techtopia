import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTrends } from './price-trends';

describe('PriceTrends', () => {
  let component: PriceTrends;
  let fixture: ComponentFixture<PriceTrends>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceTrends]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceTrends);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
