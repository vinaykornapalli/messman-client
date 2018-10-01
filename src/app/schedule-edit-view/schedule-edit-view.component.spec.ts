import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEditViewComponent } from './schedule-edit-view.component';

describe('ScheduleEditViewComponent', () => {
  let component: ScheduleEditViewComponent;
  let fixture: ComponentFixture<ScheduleEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
