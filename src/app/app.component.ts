import { filter, map, mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute, ChildrenOutletContexts} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ModalComponent  } from './components/projects/modal/modal.component';

import { trigger, transition,style,animate,query,group,sequence,state} from '@angular/animations';






@Component({
  selector: 'app-root',
  //template: '<router-outlet></router-outlet>',
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',


})

export class AppComponent {
  title = 'portfolio-website';

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contexts: ChildrenOutletContexts
  ) {
    this.setPageTitleFromRoutes();
  }

  setPageTitleFromRoutes() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        if (data['title']) {
          this.titleService.setTitle(data['title']);
        }
      });
  }


  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
