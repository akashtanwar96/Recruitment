import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrflist',
  templateUrl: './rrflist.component.html',
  styleUrls: ['./rrflist.component.scss']
})
export class RrflistComponent implements OnInit {
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

  drawerconfig() {
    this.displayrrf = false
  }
}
