import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEndDisplayComponent } from './schedule-end-display.component';

describe('ScheduleEndDisplayComponent', () => {
  let component: ScheduleEndDisplayComponent;
  let fixture: ComponentFixture<ScheduleEndDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleEndDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEndDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
