import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fci3Component } from './fci3.component';

describe('Fci3Component', () => {
  let component: Fci3Component;
  let fixture: ComponentFixture<Fci3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fci3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fci3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
