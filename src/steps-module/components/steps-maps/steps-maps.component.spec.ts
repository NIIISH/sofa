import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsMapsComponent } from './steps-maps.component';

describe('StepsMapsComponent', () => {
  let component: StepsMapsComponent;
  let fixture: ComponentFixture<StepsMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
