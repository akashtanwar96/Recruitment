import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorpageComponent } from './errorpage.component';


const routes = [
  { path: '', component: ErrorpageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)

  ],
  declarations: [ErrorpageComponent]
})
export class ErrorPageModule { }
