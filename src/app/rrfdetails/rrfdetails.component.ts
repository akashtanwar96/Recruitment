import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rrfdetails',
  templateUrl: './rrfdetails.component.html',
  styleUrls: ['./rrfdetails.component.scss']
})
export class RrfdetailsComponent implements OnInit {
  @Input() visible = false;
  @Output() rrfdetails = new EventEmitter();
  validateForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      project: ['HOMEX'],
      billable: [true],
      skills: ['C / C + +, data structures, software engineering'],
      location: ['DELHI'],
      salary: ['800000'],
      approver: ['ABC'],
      jobdescription: ['C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.'],
    });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.rrfdetails.emit('false');
  }
}
