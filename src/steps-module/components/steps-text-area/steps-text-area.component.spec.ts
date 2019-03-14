import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsTextAreaComponent } from './steps-text-area.component';

describe('StepsTextAreaComponent', () => {
  let component: StepsTextAreaComponent;
  let fixture: ComponentFixture<StepsTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
