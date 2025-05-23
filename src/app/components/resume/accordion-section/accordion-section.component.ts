import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sections } from '../../../models/resume-data';
import { RESUME } from '../../../models/resume-data';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-accordion-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-section.component.html',
  styleUrl: './accordion-section.component.scss',

  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0',
          opacity: '0',
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          maxHeight: '500px',
          // height: '*',
          opacity: '1',
          overflow: 'visible',
        })
      ),
      transition('collapsed <=> expanded', [animate('300ms ease-out')]),
    ]),
  ],
})
export class AccordionSectionComponent {
  @Input() title!: string;
  @Input() sections: Sections[] = [];
  @Input() multiOpenEnabled = false;

  resumeData = RESUME;

  activeSections: string[] = [];

  toggleSection(sectionTitle: string): void {
    if (this.multiOpenEnabled) {
      const index = this.activeSections.indexOf(sectionTitle);
      index === -1
        ? this.activeSections.push(sectionTitle)
        : this.activeSections.splice(index, 1);
    } else {
      this.activeSections = this.activeSections.includes(sectionTitle)
        ? []
        : [sectionTitle];
    }
  }

  isSectionActive(sectionTitle: string): string {
    return this.activeSections.includes(sectionTitle)
      ? 'expanded'
      : 'collapsed';
  }
}
