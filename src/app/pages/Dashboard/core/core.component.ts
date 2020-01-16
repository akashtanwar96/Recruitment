import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  title = 'RecruitmentPortal';
  componentName: string = 'home';
  sidebarName: string ;

  constructor( 
    private router: Router,

  ) {

  }
  onComponentClick(evt: string) {
    this.componentName = evt;
  }
  onDisplayComp(evt: string) {
    console.log(evt,'test 22');
    this.sidebarName = evt;
  }

  onMenuClick(url: string) {
    if(url.toLowerCase() == 'home') {
      this.router.navigate([`/dashboard/home`]);
    } else if (url.toLowerCase() == 'register') {
      this.router.navigate([`/dashboard/candidate/register`]);
    } else if (url.toLowerCase()=='candidate') {
      this.router.navigate([`/dashboard/candidate`]);
    } else if (url.toLowerCase() == 'create') {
      this.router.navigate([`/dashboard/rrf/create`]);
    } else if (url.toLowerCase() == 'rrf') {
      this.router.navigate([`/dashboard/rrf`]);
    } else {
      this.router.navigate([`/error`]);
    }
  }
}

