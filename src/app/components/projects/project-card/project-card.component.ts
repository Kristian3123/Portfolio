import { Component, Input, ChangeDetectorRef, HostListener, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/Projects/ProjectData';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  isModalOpen: boolean = false;

  @Output() openModal = new EventEmitter<Project>();

  constructor(private cdr: ChangeDetectorRef) { }

  onOpenModal(event: MouseEvent) {
    event.stopPropagation();
    this.openModal.emit(this.project);
  }

}
