import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HComponent0Component } from './hcomponent0.component';

describe('HComponent0Component', () => {
  let component: HComponent0Component;
  let fixture: ComponentFixture<HComponent0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HComponent0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HComponent0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
