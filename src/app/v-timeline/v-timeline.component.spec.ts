import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTimelineComponent } from './v-timeline.component';

describe('VTimelineComponent', () => {
  let component: VTimelineComponent;
  let fixture: ComponentFixture<VTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
