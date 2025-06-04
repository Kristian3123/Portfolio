import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
//import { AboutComponent } from './about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { trigger, transition, style, animate, query, group } from '@angular/animations';



export const routes: Routes = [
    { path: '', component: HomeComponent,  pathMatch: 'full',  data: { animation: 'Home' }},
    { path: 'projects', component: ProjectsComponent, data: { animation: 'Projects' }},
    { path: 'resume', component: ResumeComponent, data: { animation: 'Resume' }},
    { path: 'contact', component: ContactComponent, data: { animation: ' Contact' }},

   
     

     {
        path: '**',
        redirectTo: '', 
        pathMatch: 'full'
      }
];
