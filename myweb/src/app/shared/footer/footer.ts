import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  currentYear: number = new Date().getFullYear();
}

@NgModule({
  exports: [Footer],
  declarations: [Footer],
})
export class FooterModule { }
