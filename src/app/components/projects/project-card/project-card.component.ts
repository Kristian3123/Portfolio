import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/Project';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
@Input() project={} as Project;
showModal: boolean = false;
OpenModal(){
this.showModal = true;
}

closeModal() {
  this.showModal = false;
}
}
