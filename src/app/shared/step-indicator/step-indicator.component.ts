import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-indicator',
  templateUrl: './step-indicator.component.html',
  styleUrls: ['./step-indicator.component.scss'],
})
export class StepIndicatorComponent implements OnInit {
  @Input() step: number;
  stage1: boolean = true;
  stage1complete: boolean = false;
  stage2: boolean = false;
  stage2complete: boolean = false;
  stage3: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.step);
    if (this.step == 1) {
      this.stage1 = true;
      this.stage2 = false;
      this.stage3 = false;
      this.stage1complete = false;
      this.stage2complete = false;
    } else if (this.step == 2) {
      this.stage1 = false;
      this.stage2 = true;
      this.stage3 = false;
      this.stage1complete = true;
      this.stage2complete = false;
    } else if (this.step == 3) {
      this.stage1 = false;
      this.stage2 = false;
      this.stage3 = true;
      this.stage1complete = true;
      this.stage2complete = true;
    }
  }
}
