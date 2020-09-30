import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyInfoComponent } from './key-info.component';

describe('KeyInfoComponent', () => {
  let component: KeyInfoComponent;
  let fixture: ComponentFixture<KeyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
