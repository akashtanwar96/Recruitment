import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() component: string = 'home';
  @Output() displaycomp = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  scheduleInterview() {
    this.component = 'scheduleinterview';
  }
  onCancelSchedule(evt: Event) {
    this.component = 'candidatelist';
  }
  onRrfList(evt: Event) {
    this.component = 'candidatelist';
    this.displaycomp.emit('candidateList')
  }
  
}
