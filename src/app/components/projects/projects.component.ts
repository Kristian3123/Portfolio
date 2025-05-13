import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModalComponent } from './modal/modal.component';
import { FilterComponent } from './filter/filter.component';
import { Project } from '../../models/Project';
import { PROJECTS } from '../../models/project-data';

import { Tag } from '../../models/Tag';

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
  projects: Project[] = PROJECTS;
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
