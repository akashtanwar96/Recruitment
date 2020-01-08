import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candidatelist',
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.scss']
})
export class CandidatelistComponent implements OnInit {
  @Output() scheduleinterview = new EventEmitter<string>();
  substatus : string = null;
  isStatus = false;
  isVisible = false;
  displaypopup = false;
  isOkLoading = false;
  scheduleFlag = false;
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      position: 'Analyst',
      age: 800000,
      status: 'CV Submitted',
      email: 'abc@yopmail.com',
      phone: 9999999990,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      position: 'Analyst',
      age: 800000,
      status: 'CV Submitted',
      email: 'abc@yopmail.com',
      phone: 9999999990,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      position: 'Analyst',
      age: 800000,
      status: 'CV Submitted',
      email: 'abc@yopmail.com',
      phone: 9999999990,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '1',
      name: 'John Brown',
      position: 'Analyst',
      age: 800000,
      status: 'CV Submitted',
      email: 'abc@yopmail.com',
      phone: 9999999990,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      position: 'Analyst',
      age: 800000,
      status: 'CV Submitted',
      email: 'abc@yopmail.com',
      phone: 9999999990,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      position: 'Analyst',
      age: 800000,
      status: 'CV Submitted',
      email: 'abc@yopmail.com',
      phone: 9999999990,
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
  onTechnicalClick() {
    this.isStatus = true;
  }
  handleStatusCancel() {
    this.isStatus = false;

  }
}
