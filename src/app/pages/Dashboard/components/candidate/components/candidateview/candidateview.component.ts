import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candidateview',
  templateUrl: './candidateview.component.html',
  styleUrls: ['./candidateview.component.scss']
})
export class CandidateviewComponent implements OnInit {
  @Input() visible = false;
  @Input() userData : any = [];
  @Output() visibleChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  
}
