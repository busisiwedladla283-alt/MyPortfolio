import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Journey } from '../journey/journey';
import { Resume } from '../resume/resume';
import { Contact } from '../contact/contact';
import { Footer } from '../../core/footer/footer';
import { SocialIcons } from '../../shared/social-icons/social-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    About,
    Skills,
    Projects,
    Journey,
    Resume,
    Contact,
    Footer,
    SocialIcons
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
