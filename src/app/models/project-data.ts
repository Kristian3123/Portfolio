import { Project } from './Project';
import { Tag } from './Tag';

export const PROJECTS: Project[] =[
      {
        id:0,
      title: 'Portfolio Website',
      summary: 'An Angular project showcasing projects, skills, and results — highlighting expertise and impact',
      description: 'Acurated collection of my most impactful projects, showcasing skills, expertise, and achievements across my field of programming. Demonstrates problem-solving, creativity, and measurable results. ',
      
      tags:[Tag.Angular, Tag.TypeScript],
      images: ['assets/projects/Portfolio/Portfolio_Home.PNG','assets/projects/Portfolio/Portfolio_Projects.PNG','assets/projects/Portfolio/Portfolio_Resume.PNG'],
      link: 'https://github.com/Kristian3123/Portfolio',
      demo: 'https://Kristian3123.github.io/Portfolio',
       
        
  },
  {
    id:1,
  title: 'Transport Compаny',
  summary: 'A Java Project that track what’s  hapening in a Transport Compаny - monitoring vehicles, shipments and more',
  description: 'A Java-based Transport Company Management System for managing vehicles, drivers, routes, and shipments. Features include CRUD operations, route optimization, and shipment tracking.',
  
  tags:[Tag.Java],

  link: 'https://github.com/Kristian3123/Graduation',
  demo: 'https://Kristian3123.github.io/Graduation',
    images: ['../assets/projects/portfolio.png'],
  },
  {
    id:2,
  title: 'Graduation',
  summary: 'A',
  description: 'A ',
  link: 'https://github.com/Kristian3123/Graduation',
  tags:[Tag.Java, Tag.HTML],
  
  demo: 'https://Kristian3123.github.io/Graduation',
    images: ['../assets/projects/portfolio.png'],
  },
  {
    id:3,
  title: 'Restaurant',
  summary: 'A web page for a restaurant',
  description: 'A ',
  link: 'https://github.com/Kristian3123/Graduation',
  tags:[Tag.JavaScript],
  
  demo: 'https://Kristian3123.github.io/Graduation',
    images: ['../assets/projects/portfolio.png'],
  },
  {
    id:3,
  title: '',
  summary: 'A online magazine',
  description: 'A ',
  link: 'https://github.com/Kristian3123/Graduation',
  tags:[Tag.Php, Tag.AspNet],
  
  demo: 'https://Kristian3123.github.io/Graduation',
    images: ['../assets/projects/portfolio.png'],
  },
 
  
    ];
  
   