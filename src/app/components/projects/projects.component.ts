import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { Project } from '../../models/Project';
import { Tag } from '../../models/Tag';


/*interface Project {
  title: string;
  summаry:string;
  description: string;
  //languages: string[];
  //frameworks: string[];
  tags:string[];
  link: string;
  demo: string;
  images: string[];
  //github?: string;
}*/

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projects: Project[] =[
    {
      id:0,
    title: 'Portfolio Website',
    summary: 'A',
    description: 'A ',
    link: 'https://github.com/Kristian3123/Graduation',
    tags:[Tag.Angular, Tag.TypeScript],
    
    demo: 'https://Kristian3123.github.io/Graduation',
      images: ['../assets/projects/portfolio.png'],
},
{
  id:1,
title: 'Transport Compаny',
summary: 'A Java Project that track wats hapening in a TransportCompаny',
description: 'A ',
link: 'https://github.com/Kristian3123/Graduation',
tags:[Tag.Java],

demo: 'https://Kristian3123.github.io/Graduation',
  images: ['../assets/projects/portfolio.png'],
},
{
  id:2,
title: 'Graduation',
summary: 'A',
description: 'A ',
link: 'https://github.com/Kristian3123/Graduation',
tags:[Tag.Java, Tag.HTMl],

demo: 'https://Kristian3123.github.io/Graduation',
  images: ['../assets/projects/portfolio.png'],
},
{
  id:3,
title: 'A',
summary: 'A',
description: 'A ',
link: 'https://github.com/Kristian3123/Graduation',
tags:[Tag.Java, Tag.HTMl],

demo: 'https://Kristian3123.github.io/Graduation',
  images: ['../assets/projects/portfolio.png'],
},
{
  id:4,
title: 'A',
summary: 'A',
description: 'A ',
link: 'https://github.com/Kristian3123/Graduation',
tags:[Tag.Java, Tag.HTMl],

demo: 'https://Kristian3123.github.io/Graduation',
  images: ['../assets/projects/portfolio.png'],
},
{
  id:5,
title: 'A',
summary: 'A',
description: 'A ',
link: 'https://github.com/Kristian3123/Graduation',
tags:[Tag.Java, Tag.HTMl],

demo: 'https://Kristian3123.github.io/Graduation',
  images: ['../assets/projects/portfolio.png'],
},
{
  id:6,
title: 'Graduation',
summary: 'A',
description: 'A ',
link: 'https://github.com/Kristian3123/Graduation',
tags:[Tag.Java, Tag.HTMl],

demo: 'https://Kristian3123.github.io/Graduation',
  images: ['../assets/projects/portfolio.png'],
},
  ];
 /* filterText: string = '';

  projects: Project[] = [
    {
      title: 'Portfolio Website',
      summаry: 'A',
      description: 'A ',
     // languages: ['TypeScript'],
      //frameworks: ['Angular'],
      tags:['Angular', 'TypeScript'],
      link: 'https://github.com/Kristian3123/Graduation',
      demo: 'https://Kristian3123.github.io/Graduation',
      images: ['../assets/projects/portfolio.png'],
    },
    {
      title: 'E-Commerce App',
      summаry: 'A',
      description: 'A ',
      //languages: ['TypeScript'],
      //frameworks: ['Angular'],
      tags:['Angular'],
      link: 'https://github.com/yourname/ecommerce-app',
      demo: 'https://Kristian3123.github.io/TransportComp',
      images: ['../assets/projects/ecommerce.png'],
    },
    {
      title: 'TransportComp',
      summаry: 'A',
      description: 'A',
      //languages: ['Java'],
      //frameworks: [''],
      tags:['Java'],
      link: 'https://github.com/Kristian3123/TransportComp',
      demo: 'https://Kristian3123.github.io/TransportComp',
      images: ['../assets/projects/task-manager.png'],
    },
    
  ];*/


/*  selectedLanguages: string[] = [];
  selectedFrameworks: string[] = [];

  availableLanguages: string[] = ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java'];
  availableFrameworks: string[] = ['Angular', 'React', 'ASP.NET', 'Node.JS'];

  get filteredProjects(): Project[] {
    if (this.selectedLanguages.length === 0 && this.selectedFrameworks.length === 0) {
      return this.projects;
    }

    return this.projects.filter(project =>
      (this.selectedLanguages.length === 0 || project.languages.some(lang => this.selectedLanguages.includes(lang))) &&
      (this.selectedFrameworks.length === 0 || project.frameworks.some(fw => this.selectedFrameworks.includes(fw)))
    );
  }

  toggleSelection(arr: string[], item: string): void {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
    else arr.push(item);
  }

  resetFilters(): void {
    this.selectedLanguages = [];
    this.selectedFrameworks = [];
  }*/ 


}
