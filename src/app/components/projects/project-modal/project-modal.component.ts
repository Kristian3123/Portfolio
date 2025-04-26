import { Component, Input, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/Project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',

})

export class ProjectModalComponent {
  //@Input() project={} as Project;
  @Input() project: any;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal(){
this.close.emit();
  }
  /*@Input() show: boolean = false;
   @HostListener('document:keydown.escape')
  onEscKey() {
    if (this.show) {
      this.closeModal();
    }
  }

    ngOnChanges() {
    if (this.show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }*/

}
