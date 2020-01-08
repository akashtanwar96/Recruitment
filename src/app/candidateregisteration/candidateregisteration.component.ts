import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { UploadFile, UploadFilter } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-candidateregisteration',
  templateUrl: './candidateregisteration.component.html',
  styleUrls: ['./candidateregisteration.component.scss']
})
export class CandidateregisterationComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private msg: NzMessageService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      position: [null, [Validators.required]],
      notice: [null, [Validators.required]],
      currentctc: [null, [Validators.required]],
      expectedctc: [null, [Validators.required]],
      phoneNumberPrefix: ['+91'],
      phoneNumber: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      // attachments: [{}, [Validators.required]],
      agree: [false]
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value,'hello')
  }
  

  filters: UploadFilter[] = [
    {
      name: 'type',
      fn: (fileList: UploadFile[]) => {
        const filterFiles = fileList.filter(w => ~['image/png'].indexOf(w.type));
        if (filterFiles.length !== fileList.length) {
          this.msg.error(`HEllo`);
          return filterFiles;
        }
        return fileList;
      }
    },
    {
      name: 'async',
      fn: (fileList: UploadFile[]) => {
        return new Observable((observer: Observer<UploadFile[]>) => {
          // doing
          observer.next(fileList);
          observer.complete();
        });
      }
    }
  ];
  fileList = [
  ];

  handleChange(info: any): void {
    const fileList = info.fileList;
    // 2. read from response and show file link
    if (info.file.response) {
      info.file.url = info.file.response.url;
    }
    // 3. filter successfully uploaded files according to response from server
    // tslint:disable-next-line:no-any
    this.fileList = fileList.filter((item: any) => {
      if (item.response) {
        return item.response.status === 'success';
      }
      return true;
    });
  }

}
