import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponent1Component } from './acomponent1.component';

describe('AComponent1Component', () => {
  let component: AComponent1Component;
  let fixture: ComponentFixture<AComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
