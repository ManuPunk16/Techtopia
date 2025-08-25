import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSimulator } from './build-simulator';

describe('BuildSimulator', () => {
  let component: BuildSimulator;
  let fixture: ComponentFixture<BuildSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildSimulator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildSimulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
