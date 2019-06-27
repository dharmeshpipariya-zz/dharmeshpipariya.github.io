import { Component, OnInit, NgModule } from '@angular/core';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle) { }

  ngOnInit(): void {
    this._componentPageTitle.title = 'Projects';
  }
}

@NgModule({
  exports: [Projects],
  declarations: [Projects],
})
export class ProjectsModule { }
