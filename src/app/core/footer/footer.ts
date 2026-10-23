import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIcons } from '../../shared/social-icons/social-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialIcons],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  scrollToSection(href: string): void {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
