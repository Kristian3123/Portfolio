import { Component, Input, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/Project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  //@Input() project={} as Project;
  @Input() project: any;
  @Input() show: boolean = false;
  @Output() closed = new EventEmitter<void>();

  ngOnChanges() {
    if (this.show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

closeModal() {
    this.closed.emit();
  }

   @HostListener('document:keydown.escape')
  onEscKey() {
    if (this.show) {
      this.closeModal();
    }
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    if (this.show) {
      this.closeModal();
    }
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

}
