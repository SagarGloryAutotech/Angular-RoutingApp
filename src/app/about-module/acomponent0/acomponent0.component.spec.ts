import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acomponent0Component } from './acomponent0.component';

describe('Acomponent0Component', () => {
  let component: Acomponent0Component;
  let fixture: ComponentFixture<Acomponent0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acomponent0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acomponent0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
