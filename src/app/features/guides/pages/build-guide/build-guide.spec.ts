import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildGuide } from './build-guide';

describe('BuildGuide', () => {
  let component: BuildGuide;
  let fixture: ComponentFixture<BuildGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
