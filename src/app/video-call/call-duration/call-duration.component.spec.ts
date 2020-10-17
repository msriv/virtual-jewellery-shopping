import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDurationComponent } from './call-duration.component';

describe('CallDurationComponent', () => {
  let component: CallDurationComponent;
  let fixture: ComponentFixture<CallDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallDurationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
