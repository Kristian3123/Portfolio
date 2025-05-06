import { Component, Input, ChangeDetectorRef, HostListener, Output, EventEmitter, Renderer2, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/Project';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  //@Input() project: any;
  @Input() project!: Project;
//@Input() project={} as Project;
isModalOpen: boolean = false ;//as const
//selectedProject: Project | null = null;
//showModal
//@Input() project!: Project;
//@Output() viewMore = new EventEmitter<void>();
//@Output() viewMore = new EventEmitter<Project>();

constructor(private cdr: ChangeDetectorRef) {}

openModal(event: Event): void {
  event.preventDefault();
  this.isModalOpen = true;
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

closeModal(): void {
  this.isModalOpen = false;
  document.body.style.overflow = ''; // Restore scrolling
}

/*private isClosing = false;
openModal(event: MouseEvent) {
  event.stopPropagation();
  if (this.isModalOpen || this.isClosing) return;
  
  this.isModalOpen = true;
  document.body.style.overflow = 'hidden';
}

closeModal() {
  this.isClosing = true;
  setTimeout(() => {
    this.isModalOpen = false;
    this.isClosing = false;
    document.body.style.overflow = '';
  }, 300); // Синхронизирано с анимацията
}
*/
}
