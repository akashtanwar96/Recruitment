import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RrflistComponent } from './Components/rrflist/rrflist.component';
import { RrfdetailsComponent } from './Components/rrfdetails/rrfdetails.component';
import { RrfCreateComponent } from './Components/rrf-create/rrf-create.component';


const routes = [
  { path: '', component: RrflistComponent },
  { path: 'create', component: RrfCreateComponent },

];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)

  ],
  declarations: [RrflistComponent,
    RrfdetailsComponent,
    RrfCreateComponent
]
})
export class RRFModule { }
