import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CandidatelistComponent } from './components/candidatelist/candidatelist.component';
import { CandidateviewComponent } from './components/candidateview/candidateview.component';
import { CandidateregisterationComponent } from './components/candidateregisteration/candidateregisteration.component';

const routes = [
	{ path: '', component: CandidatelistComponent },
	{ path: 'register', component: CandidateregisterationComponent },
];

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes)

	],
	declarations: [CandidatelistComponent,
		CandidateviewComponent,
	CandidateregisterationComponent]
})
export class CandidateModule { }
