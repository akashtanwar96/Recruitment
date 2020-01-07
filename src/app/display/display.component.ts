import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() component: string = 'home';

  constructor() { }

  ngOnInit() {
  }
  scheduleInterview() {
    this.component = 'scheduleinterview'
  }
}
