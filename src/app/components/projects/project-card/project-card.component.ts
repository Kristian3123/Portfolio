import { Component, Input, HostListener, Output, EventEmitter, Renderer2, ElementRef  } from '@angular/core';
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
  @Input() project: any;
//@Input() project={} as Project;
showModal: boolean = false ;//as const

//@Input() project!: Project;
//@Output() viewMore = new EventEmitter<void>();
//@Output() viewMore = new EventEmitter<Project>();

openModal(){
  this.showModal= true;
}

closeModal(){
  this.showModal= false;
}

}
