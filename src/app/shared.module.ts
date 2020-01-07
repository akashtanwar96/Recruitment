import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';



@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    HttpClientModule,
    NzIconModule,
    NzTableModule,
    NzDrawerModule,
    NzGridModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzCheckboxModule,
    NzTimelineModule,
    NzSelectModule,
    NzTimePickerModule,
    NzDatePickerModule
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    HttpClientModule,
    NzIconModule,
    NzTableModule,
    NzDrawerModule,
    NzGridModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzCheckboxModule,
    NzTimelineModule,
    NzSelectModule,
    NzTimePickerModule,
    NzDatePickerModule
  ]
})
export class SharedModule { }
