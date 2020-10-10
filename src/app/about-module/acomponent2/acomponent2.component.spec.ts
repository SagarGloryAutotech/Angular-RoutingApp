import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponent2Component } from './acomponent2.component';

describe('AComponent2Component', () => {
  let component: AComponent2Component;
  let fixture: ComponentFixture<AComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
