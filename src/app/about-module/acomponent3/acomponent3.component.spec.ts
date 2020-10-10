import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponent3Component } from './acomponent3.component';

describe('AComponent3Component', () => {
  let component: AComponent3Component;
  let fixture: ComponentFixture<AComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AComponent3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
