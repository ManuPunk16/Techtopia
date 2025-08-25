import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsDisplay } from './vs-display';

describe('VsDisplay', () => {
  let component: VsDisplay;
  let fixture: ComponentFixture<VsDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VsDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
