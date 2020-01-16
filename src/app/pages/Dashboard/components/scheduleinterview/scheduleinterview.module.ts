import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScheduleinterviewComponent } from './scheduleinterview.component';


const routes = [
  { path: '', component: ScheduleinterviewComponent },

];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)

  ],
  declarations: [
    ScheduleinterviewComponent
]
})
export class ScheduleInterviewModule { }
