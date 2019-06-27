import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(router: Router) {
    let previousRoute = router.routerState.snapshot.url;

    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((data: NavigationEnd) => {
        if (!isNavigationWithinComponentView(previousRoute, data.urlAfterRedirects)) {
          resetScrollPosition();
        }
        previousRoute = data.urlAfterRedirects;
      });
  }
  //$(document).on('click', '#backToTop', function() {
  //  $('html, body').animate({
  //    scrollTop: 0
  //  }, 800);
  //});
}

function isNavigationWithinComponentView(previousUrl: string, newUrl: string) {
  const componentViewExpression = /(cdk|components)\/(\w+)/;

  const previousUrlMatch = previousUrl.match(componentViewExpression);
  const newUrlMatch = newUrl.match(componentViewExpression);

  return previousUrl && newUrl && previousUrlMatch && newUrlMatch
    && previousUrlMatch[0] === newUrlMatch[0]
    && previousUrlMatch[1] === newUrlMatch[1];
}

function resetScrollPosition() {
  if (typeof document === 'object' && document) {
    const sidenavContent = document.querySelector('body');
    if (sidenavContent) {
      sidenavContent.scrollTop = 0;
    }
  }
}
