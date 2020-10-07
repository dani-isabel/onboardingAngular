import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagTriforceComponent } from './tag-triforce.component';

describe('TagTriforceComponent', () => {
  let component: TagTriforceComponent;
  let fixture: ComponentFixture<TagTriforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagTriforceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagTriforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
