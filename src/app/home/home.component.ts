import { AfterViewInit, Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import Typed from 'typed.js';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { RouterModule } from '@angular/router';
interface Social {
  icon: string;
  link: string;
}

interface Project {
  titre: string;
  description: string;
  link: string;
}

interface Contact {
  icon: string;
  link: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule, FontAwesomeModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  constructor(library: FaIconLibrary) {
    library.addIcons(faLinkedin, faGithub, faTwitter, faFacebook);
  }
  aboutImage = 'edit-min.webp';
  topImage = 'top-image.png';

  About: string = `Passionate and versatile Fullstack Software Engineer with a knack for
        crafting efficient, scalable, and user-centric applications. With a
        strong background in Business Intelligence, I bring data to life,
        transforming raw information into actionable insights. My expertise in
        web design ensures that every project not only functions seamlessly but
        also captivates with visually compelling and intuitive interfaces.
        Dedicated to continuous learning and innovation, I thrive on challenges
        and consistently strive to push the boundaries of technology, delivering
        solutions that exceed expectations.`;
  socials: Social[] = [
    {
      icon: `fa-brands fa-linkedin-in`,
      link: `https://www.linkedin.com/in/oussama-hdidou-426930268/`,
    },
    {
      icon: `fa-brands fa-github`,
      link: `https://www.github.com/oussamahdidou/`,
    },
    {
      icon: `fa-brands fa-twitter`,
      link: `https://x.com/OussamaHdidou1`,
    },
    {
      icon: `bi bi-instagram`,
      link: `https://www.instagram.com/oussamahdidou/`,
    },
  ];
  CV: string = `/document/OUSSAMA_HDIDOU_CV.pdf`;
  projects: Project[] = [
    {
      titre: 'Rh System Management',
      description: `A streamlined tool for managing HR tasks like employee tracking, payroll, and performance evaluations,
          enhancing
          organizational efficiency and decision-making capabilities.`,
      link: `https://github.com/oussamahdidou/RH-system-management-and-ChatBot`,
    },
    {
      titre: `Plastic Pollution Detection`,
      description: `A machine learning-based system that detects and monitors plastic waste, providing real-time pollution data
          for
          environmental protection and proactive cleanup efforts.`,
      link: `https://github.com/oussamahdidou/plastic-pollution-detection`,
    },
    {
      titre: `Cloud-Native Integrated Solution for Inventory, Marketplace & Accounting Services`,
      description: `A cloud-native, event-driven solution built with microservices architecture and ECST principles,
       integrating inventory management, marketplace operations, and accounting services. 
       It enables asynchronous communication between services, real-time event propagation, scalable workflows, and seamless business process automation.
       `,
      link: `https://github.com/oussamahdidou/microservices`,
    },
  ];
  contacts: Contact[] = [
    { icon: `bi bi-envelope`, link: `mailto:oussama.hdidou.pro@gmail.com` },
    {
      icon: `fa-brands fa-linkedin-in`,
      link: `https://www.linkedin.com/in/oussama-hdidou-426930268/`,
    },
    { icon: `fa-brands fa-whatsapp`, link: `tel:+212651755423` },
    {
      icon: `fa-brands fa-x-twitter`,
      link: `https://twitter.com/OussamaHdidou1`,
    },
    {
      icon: `fa-brands fa-facebook-f`,
      link: `https://www.facebook.com/oussama.hdidou.1`,
    },
    {
      icon: `fa-brands fa-instagram`,
      link: `https://www.instagram.com/oussamahdidou/`,
    },
    {
      icon: `fa-brands fa-discord`,
      link: `https://discordapp.com/users/937172777016918018`,
    },
    { icon: `fa-brands fa-github`, link: `https://github.com/oussamahdidou/` },
    {
      icon: `fa-brands fa-stack-overflow`,
      link: `https://stackoverflow.com/users/21627058/oussama-hdidou`,
    },
  ];
  ngAfterViewInit() {
    const options = {
      strings: [
        'Full Stack Developer',
        'Software Engineer',
        'BI Engineer',
        'Web Designer',
        'Microsoft Expert',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };
    new Typed('#typed-output', options);
  }
  AiTools: string[] = [
    `devicon-tensorflow-original`,
    `devicon-opencv-plain-wordmark`,
    `devicon-scikitlearn-plain`,
    `devicon-pytorch-original`,
    `devicon-keras-plain`,
  ];
  DbTools: string[] = [
    `devicon-mysql-plain-wordmark`,
    `devicon-microsoftsqlserver-plain-wordmark`,
    `devicon-postgresql-plain-wordmark`,
    `devicon-azuresqldatabase-plain`,
    `devicon-mongodb-plain-wordmark`,
    `devicon-redis-plain`,
  ];
  Devops: string[] = [
    `devicon-docker-plain-wordmark`,
    `devicon-kubernetes-plain`,
    `devicon-azure-plain`,
    `devicon-amazonwebservices-plain-wordmark`,
    `devicon-digitalocean-original`,
  ];
  Frameworks: string[] = [
    `devicon-dotnetcore-plain`,
    `devicon-spring-original`,
    `devicon-laravel-original`,
    `devicon-nodejs-plain-wordmark`,
    `devicon-flask-original`,
    `devicon-angular-plain`,
    `devicon-react-original-wordmark`,
    `devicon-tailwindcss-original`,
    `devicon-bootstrap-plain`,
    `devicon-jquery-plain-wordmark`,
    `devicon-flutter-plain`,
  ];
  Languages: string[] = [
    `devicon-csharp-line-wordmark`,
    `devicon-html5-plain-wordmark`,
    `devicon-css3-plain-wordmark`,
    `devicon-javascript-plain`,
    `devicon-typescript-plain`,
    `devicon-java-plain-wordmark`,
    `devicon-dart-plain-wordmark`,
    `devicon-python-plain-wordmark`,
    `devicon-php-plain`,
  ];
}
