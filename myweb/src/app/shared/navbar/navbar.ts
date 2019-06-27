import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar { }

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [NavBar],
  declarations: [NavBar],
})
export class NavBarModule { }
