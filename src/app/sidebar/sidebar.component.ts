import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() componentEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onMenuClick(val: string) {
    if (val.toLowerCase() == 'home') {
      this.componentEmitter.emit('home');
    } else if (val.toLowerCase() == 'candidatelist') {
      this.componentEmitter.emit('candidatelist')
    } else if (val.toLowerCase() == 'rrf') {
      this.componentEmitter.emit('rrf')
    }else if (val.toLowerCase() == 'rrflist') {
      this.componentEmitter.emit('rrflist')
    }
    else if (val.toLowerCase() == 'candidateregistration') {
      this.componentEmitter.emit('candidateregistration')
    }
    else {
      this.componentEmitter.emit('notfound')
      console.log('not found page to be created'); //TODO

    }
  }
}
