import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayComponent } from './components/display/display.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
   {
     path: '',
     component: CoreComponent,
     children: [
       {
         path: '', redirectTo: 'home', pathMatch: 'full'
       },
       {
         path: 'home',
         loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
       },
       {
         path: 'rrf',
         loadChildren: () => import('./components/rrf/rrf.module').then(m => m.RRFModule),
       },
      {
        path: 'candidate',
        loadChildren: () => import('./components/candidate/candidate.module').then(m => m.CandidateModule),
      },
      {
        path: 'schedule',
        loadChildren: () => import('./components/scheduleinterview/scheduleinterview.module').then(m => m.ScheduleInterviewModule),
      },
      
     ]
   },
   
 ];

@NgModule({
   declarations: [
    CoreComponent,
      DisplayComponent,
   ],
   imports: [
      RouterModule.forChild(routes),
      SharedModule,
      CommonModule
   ],
   providers: [],
})
export class DashBoardModule { }
