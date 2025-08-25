import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideCard } from './guide-card';

describe('GuideCard', () => {
  let component: GuideCard;
  let fixture: ComponentFixture<GuideCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
