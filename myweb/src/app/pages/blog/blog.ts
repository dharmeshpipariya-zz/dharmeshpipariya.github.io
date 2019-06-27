import { Component, OnInit, NgModule } from '@angular/core';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss']
})
export class Blog implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle) { }

  ngOnInit(): void {
    this._componentPageTitle.title = 'Blog';
  }
}

@NgModule({
  exports: [Blog],
  declarations: [Blog]
})
export class BlogModule { }
