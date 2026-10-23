import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  stats = [
    { value: 'CityFix', label: 'Featured Web Project' },
    { value: 'Full Stack', label: 'Angular & Spring Boot' },
    { value: 'Real-Time', label: 'WebSocket & STOMP' },
    { value: 'Foundations', label: 'Java & OOP Principles' }
  ];

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}