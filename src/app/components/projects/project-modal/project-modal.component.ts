import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  @Input() title: string = '';
  @Input() show: boolean = false;
  @Output() closed = new EventEmitter<void>();

closeModal() {
    this.closed.emit();
  }

  // Optional: close on Escape key
  @HostListener('document:keydown.escape', ['$event'])
  onEscKey(event: KeyboardEvent) {
    if (this.show) {
      this.closeModal();
    }
  }

}
