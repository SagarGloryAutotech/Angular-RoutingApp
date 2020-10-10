import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HComponent1Component } from './hcomponent1.component';

describe('HComponent1Component', () => {
  let component: HComponent1Component;
  let fixture: ComponentFixture<HComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
