import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/Project';
import { ProjectModalComponent } from '../project-modal/project-modal.component';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
@Input() project={} as Project;
showModal: boolean = false ;//as const
//@Input() project!: Project;
//@Output() viewMore = new EventEmitter<void>();
//@Output() viewMore = new EventEmitter<Project>();

OpenModal(event: MouseEvent) {
  event.preventDefault();
  event.stopPropagation(); // Prevent event bubbling
  this.showModal = true;

  setTimeout(() => {
    this.showModal = true;
  }, 10);
}
  closeModal() {
    this.showModal = false;
  }
}
