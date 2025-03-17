import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { 
  faClock, 
  faDumbbell, 
  faCheckCircle,
  faArrowLeft,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';

interface Program {
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  features: string[];
  detailedDescription: string;
  benefits: string[];
  requirements: string[];
  schedule: {
    sessions: string;
    frequency: string;
    duration: string;
  };
  price: string;
  isSpecial?: boolean;
  supplementProtocol?: {
    supplements: string[];
    timing: string;
    dosage: string;
  };
}

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatButtonModule, RouterLink],
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {
  program: Program | null = null;
  showScrollTop = false;

  // Icons
  faClock = faClock;
  faDumbbell = faDumbbell;
  faCheckCircle = faCheckCircle;
  faArrowLeft = faArrowLeft;
  faArrowUp = faArrowUp;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // In a real application, you would fetch the program details from a service
    // based on the route parameter
    const programId = this.route.snapshot.paramMap.get('id');
    this.loadProgramDetails(programId);
  }

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

  private loadProgramDetails(id: string | null) {
    // This is mock data - in a real application, you would fetch this from a service
    const programs: { [key: string]: Program } = {
      'weight-loss-program': {
        title: 'Weight Loss Program',
        description: 'Transform your body with our comprehensive weight loss program combining cardio, strength training, and nutrition guidance.',
        duration: '12 weeks',
        level: 'All Levels',
        image: 'assets/images/Weight_Loss_Program.jpeg',
        features: ['Personalized meal plans', 'Weekly progress tracking', 'One-on-one coaching'],
        detailedDescription: 'Our Weight Loss Program is designed to help you achieve sustainable results through a combination of effective workouts and proper nutrition. This comprehensive program includes personalized meal planning, regular progress tracking, and expert guidance every step of the way.',
        benefits: [
          'Sustainable weight loss through proper nutrition and exercise',
          'Improved energy levels and overall fitness',
          'Better understanding of healthy eating habits',
          'Increased metabolism and muscle tone',
          'Reduced risk of chronic diseases'
        ],
        requirements: [
          'No previous fitness experience required',
          'Basic workout equipment or gym membership',
          'Commitment to regular exercise and meal planning',
          'Medical clearance for physical activity'
        ],
        schedule: {
          sessions: '3-4 sessions per week',
          frequency: 'Alternate days',
          duration: '45-60 minutes per session'
        },
        price: '$299 for 12 weeks'
      },
      'muscle-building': {
        title: 'Muscle Building',
        description: 'Build lean muscle mass with our scientifically designed strength training program and expert coaching.',
        duration: '16 weeks',
        level: 'Intermediate',
        image: 'assets/images/Muscle_Building.jpeg',
        features: ['Progressive overload training', 'Supplement guidance', 'Form correction'],
        detailedDescription: 'Our Muscle Building program is designed for those looking to increase muscle mass and strength. Using proven progressive overload techniques and proper form, you\'ll achieve your muscle-building goals safely and effectively.',
        benefits: [
          'Increased muscle mass and strength',
          'Improved body composition',
          'Enhanced metabolism',
          'Better bone density',
          'Increased confidence and self-esteem'
        ],
        requirements: [
          'Basic understanding of weight training',
          'Access to gym equipment',
          'Proper nutrition plan',
          'Recovery time between sessions'
        ],
        schedule: {
          sessions: '4-5 sessions per week',
          frequency: 'Split routine',
          duration: '60-90 minutes per session'
        },
        price: '$399 for 16 weeks'
      },
      'hiit-training': {
        title: 'HIIT Training',
        description: 'High-intensity interval training designed to maximize fat burn and improve cardiovascular fitness.',
        duration: '8 weeks',
        level: 'Advanced',
        image: 'assets/images/HIIT_Training.jpeg',
        features: ['Metabolic conditioning', 'Fat burning workouts', 'Performance tracking'],
        detailedDescription: 'Our HIIT Training program combines short bursts of intense exercise with brief recovery periods to maximize calorie burn and improve cardiovascular fitness. This time-efficient program is perfect for those looking to get maximum results in minimum time.',
        benefits: [
          'Increased calorie burn and fat loss',
          'Improved cardiovascular fitness',
          'Enhanced metabolic rate',
          'Time-efficient workouts',
          'Better endurance and stamina'
        ],
        requirements: [
          'Good cardiovascular fitness level',
          'No major joint issues',
          'Ability to perform high-intensity exercises',
          'Proper recovery between sessions'
        ],
        schedule: {
          sessions: '3-4 sessions per week',
          frequency: 'Alternate days',
          duration: '30-45 minutes per session'
        },
        price: '$249 for 8 weeks'
      },
      'yoga-flexibility': {
        title: 'Yoga & Flexibility',
        description: 'Improve flexibility, reduce stress, and enhance mind-body connection with our yoga program.',
        duration: '10 weeks',
        level: 'All Levels',
        image: 'assets/images/Yoga_Flexibility.jpeg',
        features: ['Mind-body balance', 'Stress reduction', 'Improved flexibility'],
        detailedDescription: 'Our Yoga & Flexibility program combines traditional yoga practices with modern flexibility training to improve your overall well-being. This program focuses on enhancing flexibility, reducing stress, and developing a stronger mind-body connection.',
        benefits: [
          'Increased flexibility and mobility',
          'Reduced stress and anxiety',
          'Better posture and alignment',
          'Improved balance and coordination',
          'Enhanced mind-body awareness'
        ],
        requirements: [
          'No previous yoga experience required',
          'Comfortable clothing',
          'Yoga mat',
          'Open mind and willingness to learn'
        ],
        schedule: {
          sessions: '2-3 sessions per week',
          frequency: 'Flexible scheduling',
          duration: '60-75 minutes per session'
        },
        price: '$279 for 10 weeks'
      },
      'senior-fitness': {
        title: 'Senior Fitness',
        description: 'Specially designed program for seniors focusing on mobility, balance, and overall wellness.',
        duration: 'Ongoing',
        level: 'Beginner',
        image: 'assets/images/Senior_Fitness.jpeg',
        features: ['Low-impact exercises', 'Balance training', 'Social community'],
        detailedDescription: 'Our Senior Fitness program is specifically designed to help older adults maintain and improve their physical health, mobility, and overall well-being. This gentle yet effective program focuses on exercises that are safe and beneficial for seniors.',
        benefits: [
          'Improved balance and stability',
          'Enhanced mobility and flexibility',
          'Better bone health and strength',
          'Reduced risk of falls',
          'Social interaction and community support'
        ],
        requirements: [
          'Medical clearance for physical activity',
          'Comfortable, supportive footwear',
          'Basic mobility',
          'Willingness to participate in group activities'
        ],
        schedule: {
          sessions: '2-3 sessions per week',
          frequency: 'Flexible scheduling',
          duration: '45-60 minutes per session'
        },
        price: '$199 per month'
      },
      'sports-performance': {
        title: 'Sports Performance',
        description: 'Elite training program for athletes looking to enhance their performance and prevent injuries.',
        duration: '12 weeks',
        level: 'Advanced',
        image: 'assets/images/Sports_Performance.jpeg',
        features: ['Sport-specific training', 'Recovery protocols', 'Performance analytics'],
        detailedDescription: 'Our Sports Performance program is designed for athletes and serious fitness enthusiasts who want to take their performance to the next level. This comprehensive program includes sport-specific training, injury prevention strategies, and advanced performance monitoring.',
        benefits: [
          'Enhanced athletic performance',
          'Improved speed and power',
          'Better injury prevention',
          'Advanced recovery techniques',
          'Performance tracking and analytics'
        ],
        requirements: [
          'Previous athletic experience',
          'Good overall fitness level',
          'Access to sports equipment',
          'Commitment to regular training'
        ],
        schedule: {
          sessions: '4-5 sessions per week',
          frequency: 'Structured program',
          duration: '60-90 minutes per session'
        },
        price: '$499 for 12 weeks'
      },
      'rapid-weight-loss-program': {
        title: 'Rapid Weight Loss Program',
        description: 'Intensive 9-day program designed to help you lose 3-9 kgs through specialized training and supplement protocol.',
        duration: '9 days',
        level: 'Intermediate',
        image: 'assets/images/Rapid_Weight_Loss_Program.jpeg',
        features: ['Supplement protocol', 'Intensive training', 'Strict meal plan'],
        detailedDescription: 'Our Rapid Weight Loss Program is an intensive 9-day transformation program that combines specialized training with a carefully designed supplement protocol. This program is perfect for those looking to achieve quick results while maintaining muscle mass and energy levels.',
        benefits: [
          'Lose 3-9 kgs in 9 days',
          'Maintain muscle mass while losing fat',
          'Boost metabolism with specialized supplements',
          'Improve energy levels and vitality',
          'Learn sustainable healthy habits'
        ],
        requirements: [
          'Medical clearance for intense exercise',
          'Commitment to strict meal plan',
          'Willingness to follow supplement protocol',
          'No major health conditions',
          'Previous fitness experience recommended'
        ],
        schedule: {
          sessions: '2 sessions per day',
          frequency: 'Daily',
          duration: '45-60 minutes per session'
        },
        price: '$499 for 9 days',
        isSpecial: true,
        supplementProtocol: {
          supplements: [
            'Metabolic booster',
            'Fat burner complex',
            'BCAA powder',
            'Pre-workout formula',
            'Protein powder'
          ],
          timing: 'Specific timing for each supplement throughout the day',
          dosage: 'Customized dosage based on body weight and goals'
        }
      },
      'extreme-weight-loss-program': {
        title: 'Extreme Weight Loss Program',
        description: 'Comprehensive 24-day program targeting significant weight loss of 10-20 kgs with advanced supplement integration.',
        duration: '24 days',
        level: 'Advanced',
        image: 'assets/images/Extreme_Weight_Loss_Program.jpeg',
        features: ['Advanced supplement protocol', 'Intensive cardio', 'Strict nutrition plan'],
        detailedDescription: 'The Extreme Weight Loss Program is our most intensive transformation program, designed for those seeking significant weight loss results. This comprehensive program combines advanced training techniques with a sophisticated supplement protocol to help you achieve dramatic results safely and effectively.',
        benefits: [
          'Lose 10-20 kgs in 24 days',
          'Significant body composition improvement',
          'Enhanced metabolic rate',
          'Improved cardiovascular fitness',
          'Long-term lifestyle transformation'
        ],
        requirements: [
          'Medical clearance required',
          'Previous fitness experience necessary',
          'Commitment to strict program guidelines',
          'No major health conditions',
          'Willingness to follow supplement protocol'
        ],
        schedule: {
          sessions: '2-3 sessions per day',
          frequency: 'Daily',
          duration: '60-90 minutes per session'
        },
        price: '$999 for 24 days',
        isSpecial: true,
        supplementProtocol: {
          supplements: [
            'Advanced fat burner',
            'Thermogenic complex',
            'BCAA + Glutamine',
            'Pre-workout formula',
            'Protein powder',
            'CLA supplement',
            'Green tea extract'
          ],
          timing: 'Structured supplement schedule throughout the day',
          dosage: 'Progressive dosage based on program phase'
        }
      },
      'weight-gain-program': {
        title: 'Weight Gain Program',
        description: 'Structured program for healthy weight gain with supplement guidance and strength training focus.',
        duration: '12 weeks',
        level: 'All Levels',
        image: 'assets/images/Weight_Gain_Program.jpeg',
        features: ['Supplement protocol', 'Calorie surplus plan', 'Strength training'],
        detailedDescription: 'Our Weight Gain Program is designed to help you achieve healthy weight gain through a combination of proper nutrition, strategic supplement use, and targeted strength training. This program focuses on building lean muscle mass while minimizing fat gain.',
        benefits: [
          'Healthy weight gain',
          'Increased muscle mass',
          'Improved strength and power',
          'Better body composition',
          'Enhanced overall fitness'
        ],
        requirements: [
          'Medical clearance for physical activity',
          'Access to gym equipment',
          'Commitment to nutrition plan',
          'Willingness to follow supplement protocol',
          'Regular training schedule'
        ],
        schedule: {
          sessions: '4-5 sessions per week',
          frequency: 'Split routine',
          duration: '60-90 minutes per session'
        },
        price: '$399 for 12 weeks',
        isSpecial: true,
        supplementProtocol: {
          supplements: [
            'Mass gainer protein',
            'Creatine monohydrate',
            'BCAA powder',
            'Pre-workout formula',
            'Multivitamin complex',
            'Omega-3 fatty acids'
          ],
          timing: 'Strategic timing around workouts and meals',
          dosage: 'Customized based on body weight and goals'
        }
      }
    };

    if (id && programs[id]) {
      this.program = programs[id];
    }
  }
} 