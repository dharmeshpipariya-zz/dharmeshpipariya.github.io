import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBar {
  isNavExpanded: boolean = false;
  toggleNav() {
    this.isNavExpanded = !this.isNavExpanded;
    document.body.classList.toggle('navbar-expanded');
  }
}

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [NavBar],
  declarations: [NavBar],
})
export class NavBarModule { }
