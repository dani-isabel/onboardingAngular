import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsInfoComponent } from './panels-info.component';

describe('PanelsInfoComponent', () => {
  let component: PanelsInfoComponent;
  let fixture: ComponentFixture<PanelsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
