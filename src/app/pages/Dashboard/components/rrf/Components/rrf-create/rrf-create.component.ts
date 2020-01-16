import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UploadFilter, UploadFile, NzMessageService } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-rrf',
  templateUrl: './rrf-create.component.html',
  styleUrls: ['./rrf-create.component.scss']
})
export class RrfCreateComponent implements OnInit {
  validateForm: FormGroup;
  constructor(private fb: FormBuilder,
    private msg: NzMessageService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      project: [null, [Validators.required]],
      position: [null, [Validators.required]],
      billable: [false, [Validators.required]],
      billingp: [null],
      skills: [null, [Validators.required]],
      location: [null, [Validators.required]],
      salary: [null, [Validators.required]],
      other: [null, [Validators.required]],

      // email: [null, [Validators.email, Validators.required]],
      // attachments: [{}, [Validators.required]],
    });
  }
  
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
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
