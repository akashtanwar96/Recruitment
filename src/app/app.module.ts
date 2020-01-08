import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DisplayComponent } from './display/display.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { CandidateviewComponent } from './candidateview/candidateview.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RrfComponent } from './rrf/rrf.component';
import { RrflistComponent } from './rrflist/rrflist.component';
import { RrfdetailsComponent } from './rrfdetails/rrfdetails.component';
import { ScheduleinterviewComponent } from './scheduleinterview/scheduleinterview.component';
import { CandidateregisterationComponent } from './candidateregisteration/candidateregisteration.component';

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      DisplayComponent,
      CandidatelistComponent,
      CandidateviewComponent,
      HomeComponent,
      ErrorpageComponent,
      RrfComponent,
      RrflistComponent,
      RrfdetailsComponent,
      ScheduleinterviewComponent,
      CandidateregisterationComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
