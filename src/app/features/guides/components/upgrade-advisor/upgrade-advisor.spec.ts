import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeAdvisor } from './upgrade-advisor';

describe('UpgradeAdvisor', () => {
  let component: UpgradeAdvisor;
  let fixture: ComponentFixture<UpgradeAdvisor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeAdvisor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeAdvisor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
