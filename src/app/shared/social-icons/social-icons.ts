import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  socials = [
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
      url: 'bucydladla590421@gmail.com',
      iconSvg: 'email',
      ariaLabel: 'Send email to Busisiwe Dladla'
    }
  ];
}
