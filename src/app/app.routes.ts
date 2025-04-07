import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Home' }},
    { path: 'projects', component: ProjectsComponent, data: { title: 'Projects' }},
    { path: 'resume', component: ResumeComponent, data: { title: 'Resume' }},
    { path: 'contact', component: ContactComponent, data: { title: ' Contact' }},

   
      {
        path: '**',
        redirectTo: '', 
        pathMatch: 'full'
      }
];
