import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser'
import { AccordionSectionComponent } from "./accordion-section/accordion-section.component";
import { Sections } from '../../models/resume-data';
import { RESUME } from '../../models/resume-data';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterModule, AccordionSectionComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  resumeData = RESUME;
sections: Sections[] = this.resumeData.sections;
  constructor(private titleService: Title, private renderer: Renderer2){
this.titleService.setTitle('')
  }
  
DownloadFile(){
  const link = this.renderer.createElement('a');//inserts element in the site
  link.setAttribute('target','_blank');
  link.setAttribute('href','../../assets/Resume.pdf');
  link.setAttribute('download','Resume.pdf');
  link.click();//starting the download
  link.remove();//removing from the site
//all hapens imeadiatly
}



multiOpenEnabled = false;

toggleMultiOpen() {
  this.multiOpenEnabled = !this.multiOpenEnabled;
}
/*workExperience = [
  'Internship at XYZ Company (2024)',
  'Freelance Web Development Projects'
];

education = [
  'Bachelor of Informatics, NBU (2021 - Present)',
  'Professional Diploma in System Programming, PGEA (2016 - 2021)'
];

certifications = [
  'Certificate in Web Development (2023)',
  'System Programming Diploma (2021)'
];

skills = [
  'C++', 'Java', 'JavaScript', 'HTML/CSS', 'PHP', 'Python', 'Angular', 'Spring Boot', 'Git', 'MySQL'
];*/

}

