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
interface Certificate {
  title: string;
  image: string;
  link: string;
  issuingDate: string;
  issuedBy?: string;
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
      titre: `Cloud-Native Integrated Solution `,
      description: `An event-driven, cloud-native microservices solution integrating inventory, marketplace, and accounting services for scalable and real-time business workflows.
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
    'devicon-terraform-plain-wordmark',
    'devicon-githubactions-plain-wordmark',
    'devicon-azuredevops-plain',
    'devicon-sentry-original',
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
  certificates: Certificate[] = [
    {
      title: 'Create cloud-native apps and services with .NET and ASP.NET Core',
      image:
        'https://learn.microsoft.com/en-us/training/achievements/create-microservices-with-dotnet.svg',
      link: 'https://learn.microsoft.com/api/achievements/share/en-us/oussamahdidou-8261/QS2VHFBE?sharingId=AEA5DC9F5342F315',
      issuingDate: '11/9/2025',
      issuedBy: 'Microsoft',
    },

    {
      title: 'Cloud Advanced: Architecture and Technologies',
      image:
        'https://images.credly.com/images/88170d5e-429f-4367-b138-ffe80cec19dc/image.png',
      link: 'https://www.credly.com/badges/6a50b966-7542-49a6-bc9b-9f222f1c9c95/public_url',
      issuingDate: '9/10/2024',
      issuedBy: 'Huawei',
    },
    {
      title: 'Data Management and Analytics',
      image:
        'https://images.credly.com/size/80x80/images/1dd40c7c-c99f-4393-a734-70f90b547bdb/image.png',
      link: 'https://www.credly.com/badges/3088079b-7d40-4bcc-abe0-5688b6953872/public_url',
      issuingDate: '9/13/2024',
      issuedBy: 'Huawei',
    },
  ];
}
