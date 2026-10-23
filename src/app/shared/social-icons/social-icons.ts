import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
  iconSvg?: string;
  ariaLabel: string;
  isScroll?: boolean;
}

@Component({
  selector: 'app-social-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-icons.html',
  styleUrl: './social-icons.css'
})
export class SocialIcons {
  @Input() layout: 'horizontal' | 'vertical' | 'hero' = 'horizontal';
  @Input() showLabels: boolean = false;

  socials: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/The-DigitalAcademy/city-fix',
      icon: 'devicon-github-original',
      ariaLabel: 'Busisiwe Dladla on GitHub'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/busisiwe-dladla',
      icon: 'devicon-linkedin-plain',
      ariaLabel: 'Busisiwe Dladla on LinkedIn'
    },
    {
      name: 'Email',
      url: '#contact',
      iconSvg: 'email',
      ariaLabel: 'Get in touch with Busisiwe Dladla',
      isScroll: true
    }
  ];

  handleClick(item: SocialLink, event: Event): void {
    if (item.isScroll) {
      event.preventDefault();
      const targetId = item.url.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        if (typeof window !== 'undefined' && window.history) {
          window.history.pushState(null, '', item.url);
        }
      }
    }
  }
}
