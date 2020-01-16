import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rrflist',
  templateUrl: './rrflist.component.html',
  styleUrls: ['./rrflist.component.scss']
})
export class RrflistComponent implements OnInit {
  @Output() rrflist = new EventEmitter<string>();
  displayrrf: boolean = false;
  listOfData = [
    {
      key: '1',
      recruiter: 'John Brown',
      project: 'New York No. 1 Lake Park',
      startdate: '12-sep-2019',
      skills: 'i dont know',
      status: 'dummy'
    },
    {
      key: '2',
      recruiter: 'Jim Green',
      project: 'London No. 1 Lake Park',
      startdate: '12-sep-2019',
      skills: 'i dont know',
      status: 'dummy'
    },
    {
      key: '3',
      recruiter: 'Joe Black',
      project: 'Sidney No. 1 Lake Park',
      startdate: '12-sep-2019',
      skills: 'i dont know',
      status: 'dummy'
    },
    {
      key: '1',
      recruiter: 'John Brown',
      project: 'New York No. 1 Lake Park',
      startdate: '12-sep-2019',
      skills: 'i dont know',
      status: 'dummy'
    },
    {
      key: '2',
      recruiter: 'Jim Green',
      project: 'London No. 1 Lake Park',
      startdate: '12-sep-2019',
      skills: 'i dont know',
      status: 'dummy'
    },
    {
      key: '3',
      recruiter: 'Joe Black',
      project: 'Sidney No. 1 Lake Park',
      startdate: '12-sep-2019',
      skills: 'i dont know',
      status: 'dummy'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onViewRRF() {
    this.displayrrf = true;
  }

  drawerconfig(evt : string) {
    console.log(evt,'hello baymax');
    if(evt == 'false') {
      this.displayrrf = false;
    }
    else if(evt == 'viewcandidate') {
      this.displayrrf = false
      this.rrflist.emit('viewcandidatelist')
    }
  }
}
