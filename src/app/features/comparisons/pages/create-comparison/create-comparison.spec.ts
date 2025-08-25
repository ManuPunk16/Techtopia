import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComparison } from './create-comparison';

describe('CreateComparison', () => {
  let component: CreateComparison;
  let fixture: ComponentFixture<CreateComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateComparison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComparison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
