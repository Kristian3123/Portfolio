import { Component, Input, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/Project';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',

})

export class ModalComponent {
  @Input() project!: Project;
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
    this.isOpen = false;
  }

  currentImageIndex = 0;

  nextImage(event: MouseEvent) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
  }


  prevImage(event: MouseEvent) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
  }

}
