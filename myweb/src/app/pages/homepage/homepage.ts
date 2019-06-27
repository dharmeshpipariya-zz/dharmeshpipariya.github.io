import { Component, OnInit, NgModule } from '@angular/core';
import { ComponentPageTitle } from '../page-title/page-title';
import { TyperModule } from '../../shared/typer/typer';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements OnInit {

  typer = ['Web Designer.', 'UI / UX Designer.', 'Front - end Developer.', 'Free Thinker.'];
  expandContactMap: boolean = false;
  constructor(public _componentPageTitle: ComponentPageTitle) { }

  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }

  toggleContactMap() { this.expandContactMap = !this.expandContactMap; }
}

@NgModule({
  imports: [TyperModule],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule { }
