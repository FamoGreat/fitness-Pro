import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faLocationDot, 
  faPhone, 
  faEnvelope,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, RouterLink],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
  export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  // Social Media Icons
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  // Contact Icons
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faClock = faClock;
} 