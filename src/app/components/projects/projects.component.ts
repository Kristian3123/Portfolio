import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { FilterComponent } from "./filter/filter.component";
import { Project } from '../../models/Project';
import { PROJECTS } from '../../models/project-data';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { Tag } from '../../models/Tag';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectCardComponent, FilterComponent, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projects: Project[] = PROJECTS;


filteredProjects: Project[] = this.projects;
selectedTags: Tag[] = [];

onFiltersChanged(selectedTags: Tag[]) {
  if (selectedTags.length === 0) {
    this.filteredProjects = this.projects;
    return;
  }

  this.filteredProjects = this.projects.filter(project => 
    selectedTags.some(selectedTag => 
      project.tags.some(projectTag => 
        projectTag.toString() === selectedTag.toString()
      )
    )
  );
}

/*onFiltersChanged(selectedTags: Tag[]) {
  this.selectedTags = selectedTags;
  this.filterProjects();
}



private filterProjects() {
  if (this.selectedTags.length === 0) {
    this.filteredProjects = this.projects;
    return;
  }

  // Филтрираме проектите, които съдържат ВСИЧКИ избрани тагове
  this.filteredProjects = this.projects.filter(project => 
    this.selectedTags.every(selectedTag => 
      project.tags.some(projectTag => projectTag.toString() === selectedTag.toString()|| 
      projectTag === selectedTag)
    )
  );
}*/



}
