import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingGuide } from './buying-guide';

describe('BuyingGuide', () => {
  let component: BuyingGuide;
  let fixture: ComponentFixture<BuyingGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyingGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyingGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
