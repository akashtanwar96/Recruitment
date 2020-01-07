import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduleinterview',
  templateUrl: './scheduleinterview.component.html',
  styleUrls: ['./scheduleinterview.component.scss']
})
export class ScheduleinterviewComponent implements OnInit {
  validateForm: FormGroup;
  dateMode = 'time';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      type: [null, [Validators.required]],
      date: [null, [Validators.required]],
      interviewer:[null, [Validators.required]],
      other: [null]
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  handleDateOpenChange(open: boolean): void {
    if (open) {
      this.dateMode = 'time';
    }
  }

  handleDatePanelChange(mode: string): void {
    console.log('handleDatePanelChange: ', mode);
  }
  
}
