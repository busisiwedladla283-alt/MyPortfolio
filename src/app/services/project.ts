import { Injectable, signal } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: 'fullstack' | 'java' | 'frontend';
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly projectList: Project[] = [
    {
      id: 'cityfix',
      title: 'CityFix - Municipal Service Request App',
      tagline: 'Civic issue reporting & real-time resident-admin messaging web application',
      description: 'A full-stack collaborative application designed to help residents report municipal infrastructure issues (water leaks, potholes, power outages) and allow municipal staff to track ticket statuses.',
      image: '/images/projects/cityfix.jpg',
      category: 'fullstack',
      featured: true,
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'WebSocket', 'STOMP', 'Tailwind CSS'],
      features: [
        'Real-time resident-to-admin live messaging feature using WebSocket & STOMP protocol',
        'Issue reporting forms with category selection and visual status badges',
        'Admin dashboard interface to view, update, and manage service requests',
        'Spring Boot backend with PostgreSQL database for handling requests and data storage'
      ],
      github: 'https://github.com/The-DigitalAcademy/city-fix.git',
      demo: '#'
    }
  ];

  readonly projects = signal<Project[]>(this.projectList);

  getFeaturedProjects(): Project[] {
    return this.projectList.filter(p => p.featured);
  }

  getProjectsByCategory(category: string): Project[] {
    if (category === 'all') return this.projectList;
    return this.projectList.filter(p => p.category === category);
  }
}
