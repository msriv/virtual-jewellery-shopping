import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonMenuComponent } from './action-button-menu.component';

describe('ActionButtonMenuComponent', () => {
  let component: ActionButtonMenuComponent;
  let fixture: ComponentFixture<ActionButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionButtonMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
