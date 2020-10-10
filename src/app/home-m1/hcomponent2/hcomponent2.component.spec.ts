import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HComponent2Component } from './hcomponent2.component';

describe('HComponent2Component', () => {
  let component: HComponent2Component;
  let fixture: ComponentFixture<HComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
