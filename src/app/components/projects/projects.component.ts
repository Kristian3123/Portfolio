import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModalComponent } from './modal/modal.component';
import { FilterComponent } from './filter/filter.component';
import { Project } from '../../models/Projects/ProjectData';
import { PROJECTS_FULLSTACK } from '../../models/Projects/Projects-fullstack';

import { Tag } from '../../models/Projects/Tags';
import { PROJECTS_BACKEND } from '../../models/Projects/Projects-backend';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProjectCardComponent,
    FilterComponent,
    ModalComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [...PROJECTS_FULLSTACK, ...PROJECTS_BACKEND];
  selectedProject: Project | null = null; // Track which project is selected for the modal

  filteredProjects: Project[] = this.projects;
  selectedTags: Tag[] = [];

  openModal(project: Project) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

  onFiltersChanged(selectedTags: Tag[]) {
    if (selectedTags.length === 0) {
      this.filteredProjects = this.projects;
      return;
    }

    this.filteredProjects = this.projects.filter((project) =>
      selectedTags.some((selectedTag) =>
        project.tags.some(
          (projectTag) => projectTag.toString() === selectedTag.toString()
        )
      )
    );
  }
}
