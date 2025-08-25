import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatibilityGuide } from './compatibility-guide';

describe('CompatibilityGuide', () => {
  let component: CompatibilityGuide;
  let fixture: ComponentFixture<CompatibilityGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompatibilityGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompatibilityGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
