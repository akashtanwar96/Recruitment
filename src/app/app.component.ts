import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecruitmentPortal';
  componentName: string = 'home';
  onComponentClick(evt: string) {
    this.componentName = evt;
  }
}

