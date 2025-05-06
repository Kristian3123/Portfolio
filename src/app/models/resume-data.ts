//import { text } from "stream/consumers";

export interface Sections{
    title: string;
    content: string[];
}

export const RESUME = {
    contacts: {
    //  imageUrl: 'assets/your-photo.jpg', // Добавете снимка в assets/
      email: 'kris.dev.worke@gmail.com',
      //linkedIn: 'linkedin.com/in/your-profile'
    },
    
    sections: [
   
      {
        title: 'Education',
        content: [
          'Informatics, New Bulgarian University (NBU)',
          
        ]
      },
      {
        title: 'Skills',
        content: [
            '<strong>Programming Languages:</strong> C++, Java, JavaScript, TypeScript and I have basic knowledge of PHP and Python',
        '<strong>Frameworks:</strong> basic knowledge of Angular, ASP.NET, Node.js',
        '<strong>Other:</strong> Git, experience working with MySQL database design, queries, and optimization'

        ]
      },
      {
        title: 'Certifications',
        content: [
          ''

        ]
      }
    ] as Sections[]
  };