import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { 
  faDumbbell, 
  faHeart, 
  faUsers, 
  faCheckCircle,
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

interface Program {
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  features: string[];
  isSpecial?: boolean;
}

interface Trainer {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

interface Schedule {
  time: string;
  classes: {
    [key: string]: {
      name: string;
      trainer: string;
      duration: string;
      level: string;
    } | null;
  };
}

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  errors: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

interface FormFeedback {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    RouterModule,
    FooterComponent,
    FormsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Current year for footer copyright
  currentYear: number = new Date().getFullYear();

  // Font Awesome Icons
  faDumbbell = faDumbbell;
  faHeart = faHeart;
  faUsers = faUsers;
  faCheckCircle = faCheckCircle;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faClock = faClock;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faArrowUp = faArrowUp;

  // Features list
  features = [
    {
      icon: this.faDumbbell,
      title: 'Professional Training',
      description: 'Expert-led fitness programs tailored to your goals',
      benefits: ['Customized workout plans', 'Nutritional guidance', 'Progress tracking']
    },
    {
      icon: this.faHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive approach to your overall well-being',
      benefits: ['Personalized meal plans', 'Supplement advice', 'Regular consultations']
    },
    {
      icon: this.faUsers,
      title: 'Community Support',
      description: 'Join a motivated community of fitness enthusiasts',
      benefits: ['High-energy group sessions', 'Social interaction', 'Motivating environment']
    }
  ];

  programs: Program[] = [
    {
      title: 'Weight Loss Program',
      description: 'Transform your body with our comprehensive weight loss program combining cardio, strength training, and nutrition guidance.',
      duration: '12 weeks',
      level: 'All Levels',
      image: 'assets/images/Weight_Loss_Program.jpeg',
      features: ['Personalized meal plans', 'Weekly progress tracking', 'One-on-one coaching']
    },
    {
      title: 'Muscle Building',
      description: 'Build lean muscle mass with our scientifically designed strength training program and expert coaching.',
      duration: '16 weeks',
      level: 'Intermediate',
      image: 'assets/images/Muscle_Building.jpeg',
      features: ['Progressive overload training', 'Supplement guidance', 'Form correction']
    },
    {
      title: 'HIIT Training',
      description: 'High-intensity interval training designed to maximize fat burn and improve cardiovascular fitness.',
      duration: '8 weeks',
      level: 'Advanced',
      image: 'assets/images/HIIT_Training.jpeg',
      features: ['Metabolic conditioning', 'Fat burning workouts', 'Performance tracking']
    },
    {
      title: 'Yoga Flexibility',
      description: 'Improve flexibility, reduce stress, and enhance mind-body connection with our yoga program.',
      duration: '10 weeks',
      level: 'All Levels',
      image: 'assets/images/Yoga_Flexibility.jpeg',
      features: ['Mind-body balance', 'Stress reduction', 'Improved flexibility']
    },
    {
      title: 'Senior Fitness',
      description: 'Specially designed program for seniors focusing on mobility, balance, and overall wellness.',
      duration: 'Ongoing',
      level: 'Beginner',
      image: 'assets/images/Senior_Fitness.jpeg',
      features: ['Low-impact exercises', 'Balance training', 'Social community']
    },
    {
      title: 'Sports Performance',
      description: 'Elite training program for athletes looking to enhance their performance and prevent injuries.',
      duration: '12 weeks',
      level: 'Advanced',
      image: 'assets/images/Sports_Performance.jpeg',
      features: ['Sport-specific training', 'Recovery protocols', 'Performance analytics']
    },
    {
      title: 'Rapid Weight Loss Program',
      description: 'Intensive 9-day program designed to help you lose 3-9 kgs through specialized training and supplement protocol.',
      duration: '9 days',
      level: 'Intermediate',
      image: 'assets/images/Rapid_Weight_Loss_Program.jpeg',
      features: ['Supplement protocol', 'Intensive training', 'Strict meal plan'],
      isSpecial: true
    },
    {
      title: 'Extreme Weight Loss Program',
      description: 'Comprehensive 24-day program targeting significant weight loss of 10-20 kgs with advanced supplement integration.',
      duration: '24 days',
      level: 'Advanced',
      image: 'assets/images/Extreme_Weight_Loss_Program.jpeg',
      features: ['Advanced supplement protocol', 'Intensive cardio', 'Strict nutrition plan'],
      isSpecial: true
    },
    {
      title: 'Weight Gain Program',
      description: 'Structured program for healthy weight gain with supplement guidance and strength training focus.',
      duration: '12 weeks',
      level: 'All Levels',
      image: 'assets/images/Weight_Gain_Program.jpeg',
      features: ['Supplement protocol', 'Calorie surplus plan', 'Strength training'],
      isSpecial: true
    }
  ];

  trainers: Trainer[] = [
    {
      name: 'Sarah Johnson',
      role: 'Head Trainer',
      bio: 'NASM certified trainer with 10+ years of experience in strength training and weight loss.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      specialties: ['Strength Training', 'Weight Loss', 'Nutrition'],
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Yoga Specialist',
      bio: 'Certified yoga instructor specializing in vinyasa flow and meditation techniques.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      specialties: ['Yoga', 'Meditation', 'Flexibility'],
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Emma Rodriguez',
      role: 'HIIT Expert',
      bio: 'CrossFit Level 2 trainer with expertise in high-intensity interval training and group fitness.',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      specialties: ['HIIT', 'CrossFit', 'Group Training'],
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'James Wilson',
      role: 'Sports Performance',
      bio: 'Former athlete turned trainer, specializing in sports-specific training and injury prevention.',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      specialties: ['Sports Training', 'Rehabilitation', 'Performance'],
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];

  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  schedule: Schedule[] = [
    {
      time: '06:00 AM',
      classes: {
        Monday: { name: 'HIIT', trainer: 'Emma Rodriguez', duration: '45 min', level: 'Advanced' },
        Tuesday: { name: 'Yoga Flow', trainer: 'Michael Chen', duration: '60 min', level: 'All Levels' },
        Wednesday: { name: 'HIIT', trainer: 'Emma Rodriguez', duration: '45 min', level: 'Advanced' },
        Thursday: { name: 'Strength', trainer: 'Sarah Johnson', duration: '60 min', level: 'Intermediate' },
        Friday: { name: 'HIIT', trainer: 'Emma Rodriguez', duration: '45 min', level: 'Advanced' },
        Saturday: { name: 'Yoga Flow', trainer: 'Michael Chen', duration: '60 min', level: 'All Levels' },
        Sunday: null
      }
    },
    {
      time: '08:00 AM',
      classes: {
        Monday: { name: 'Strength', trainer: 'Sarah Johnson', duration: '60 min', level: 'Intermediate' },
        Tuesday: { name: 'HIIT', trainer: 'Emma Rodriguez', duration: '45 min', level: 'Advanced' },
        Wednesday: { name: 'Yoga Flow', trainer: 'Michael Chen', duration: '60 min', level: 'All Levels' },
        Thursday: { name: 'HIIT', trainer: 'Emma Rodriguez', duration: '45 min', level: 'Advanced' },
        Friday: { name: 'Strength', trainer: 'Sarah Johnson', duration: '60 min', level: 'Intermediate' },
        Saturday: { name: 'HIIT', trainer: 'Emma Rodriguez', duration: '45 min', level: 'Advanced' },
        Sunday: null
      }
    },
    {
      time: '10:00 AM',
      classes: {
        Monday: { name: 'Senior Fitness', trainer: 'James Wilson', duration: '45 min', level: 'Beginner' },
        Tuesday: { name: 'Senior Fitness', trainer: 'James Wilson', duration: '45 min', level: 'Beginner' },
        Wednesday: { name: 'Senior Fitness', trainer: 'James Wilson', duration: '45 min', level: 'Beginner' },
        Thursday: { name: 'Senior Fitness', trainer: 'James Wilson', duration: '45 min', level: 'Beginner' },
        Friday: { name: 'Senior Fitness', trainer: 'James Wilson', duration: '45 min', level: 'Beginner' },
        Saturday: null,
        Sunday: null
      }
    },
    {
      time: '04:00 PM',
      classes: {
        Monday: { name: 'Sports Performance', trainer: 'James Wilson', duration: '90 min', level: 'Advanced' },
        Tuesday: { name: 'Strength', trainer: 'Sarah Johnson', duration: '60 min', level: 'Intermediate' },
        Wednesday: { name: 'Sports Performance', trainer: 'James Wilson', duration: '90 min', level: 'Advanced' },
        Thursday: { name: 'Strength', trainer: 'Sarah Johnson', duration: '60 min', level: 'Intermediate' },
        Friday: { name: 'Sports Performance', trainer: 'James Wilson', duration: '90 min', level: 'Advanced' },
        Saturday: null,
        Sunday: null
      }
    },
    {
      time: '06:00 PM',
      classes: {
        Monday: { name: 'Yoga Flow', trainer: 'Michael Chen', duration: '60 min', level: 'All Levels' },
        Tuesday: { name: 'HIIT', trainer: 'Emma Rodriguez', duration: '45 min', level: 'Advanced' },
        Wednesday: { name: 'Yoga Flow', trainer: 'Michael Chen', duration: '60 min', level: 'All Levels' },
        Thursday: { name: 'HIIT', trainer: 'Emma Rodriguez', duration: '45 min', level: 'Advanced' },
        Friday: { name: 'Yoga Flow', trainer: 'Michael Chen', duration: '60 min', level: 'All Levels' },
        Saturday: null,
        Sunday: null
      }
    }
  ];

  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
    errors: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  };

  isSubmitting = false;
  formFeedback: FormFeedback | null = null;
  showScrollTop = false;

  constructor() { }

  ngOnInit() { }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToPrograms() {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit() {
    // Reset previous errors
    this.contactForm.errors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.formFeedback = null;

    // Basic validation
    if (!this.contactForm.name.trim()) {
      this.contactForm.errors.name = 'Name is required';
      return;
    }

    if (!this.contactForm.email.trim()) {
      this.contactForm.errors.email = 'Email is required';
      return;
    }

    if (!this.isValidEmail(this.contactForm.email)) {
      this.contactForm.errors.email = 'Please enter a valid email address';
      return;
    }

    if (!this.contactForm.subject.trim()) {
      this.contactForm.errors.subject = 'Subject is required';
      return;
    }

    if (!this.contactForm.message.trim()) {
      this.contactForm.errors.message = 'Message is required';
      return;
    }

    // Simulate form submission
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.formFeedback = {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      };
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      };
    }, 1500);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  getProgramId(title: string): string {
    // Convert to lowercase and replace spaces with hyphens
    const id = title.toLowerCase().replace(/\s+/g, '-');
    
    // Special cases to match our program keys exactly
    switch (id) {
      case 'weight-loss-program':
        return 'weight-loss-program';
      case 'muscle-building':
        return 'muscle-building';
      case 'hiit-training':
        return 'hiit-training';
      case 'yoga-flexibility':
        return 'yoga-flexibility';
      case 'senior-fitness':
        return 'senior-fitness';
      case 'sports-performance':
        return 'sports-performance';
      case 'rapid-weight-loss-program':
        return 'rapid-weight-loss-program';
      case 'extreme-weight-loss-program':
        return 'extreme-weight-loss-program';
      case 'weight-gain-program':
        return 'weight-gain-program';
      default:
        return id;
    }
  }
}
