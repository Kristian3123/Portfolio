import { Tag } from "./Tags";

export interface Project {
    id:number;
    title: string;
    summary: string;
    description: string;
    tags:Tag[];
    
    link: string;
    demo: string;
    images: string[];
    
    //github?: string;
    //languages: string[];
    //frameworks: string[];
  }

  