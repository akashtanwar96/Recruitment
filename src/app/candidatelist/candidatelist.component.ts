import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candidatelist',
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.scss']
})
export class CandidatelistComponent implements OnInit {
  @Output() scheduleinterview = new EventEmitter<string>();
  isVisible = false;
  displaypopup = false;
  isOkLoading = false;
  scheduleFlag = false;
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  constructor() { }

  ngOnInit() {
  }


  onView() {
    this.displaypopup = true;
  }

  onPopupClose(val: Event) {
    this.displaypopup = false;
  }
  onInterviewView(data: any) {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  onScheduleInterview() {
    this.scheduleinterview.emit('scheduleinterview');
  }
}
