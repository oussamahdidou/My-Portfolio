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
  ngAfterViewInit() {
    const options = {
      strings: [
        'FullStack Developper',
        'Software Engineer',
        'BI Engineer',
        'Web Designer',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };
    new Typed('#typed-output', options);
  }
}
