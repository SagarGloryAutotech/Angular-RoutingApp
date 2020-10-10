import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HComponent3Component } from './hcomponent3.component';

describe('HComponent3Component', () => {
  let component: HComponent3Component;
  let fixture: ComponentFixture<HComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HComponent3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
