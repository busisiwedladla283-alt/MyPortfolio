import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {
  readonly activeTab = signal<'education' | 'skills' | 'certifications'>('education');

  educationList = [
    {
      degree: 'IT Systems Support & Software Development',
      institution: 'Information Technology & Systems Academy',
      period: '2023 - Present',
      description: 'Comprehensive software development, networking, database architecture, and full-stack application lifecycle.',
      coursework: ['Object-Oriented Programming (Java)', 'Database Management (PostgreSQL, SQL)', 'Web Architecture & Frontends (Angular, TypeScript)', 'RESTful APIs & Microservices (Spring Boot)', 'Systems Security & Testing']
    }
  ];

  competencyGroups = [
    {
      category: 'Core Programming & Principles',
      items: ['Object-Oriented Programming (OOP)', 'Clean Code Practices', 'Modular Component Structure', 'MVC Architecture Basics', 'Logic & Problem Solving']
    },
    {
      category: 'Backend & Database',
      items: ['Spring Boot REST API Basics', 'CRUD with Spring Data JPA', 'PostgreSQL & Relational Tables', 'WebSocket & STOMP Messaging', 'HTTP Request & Response Handling']
    },
    {
      category: 'Frontend Development',
      items: ['Angular Components & Routing', 'TypeScript & JavaScript (ES6+)', 'Responsive Layouts (CSS & Tailwind)', 'HTML5 Semantic Markup', 'Form Handling & Event Binding']
    },
    {
      category: 'Tools & Collaboration',
      items: ['Git & GitHub Version Control', 'Postman API Testing', 'VS Code & IntelliJ IDEs', 'Agile & Scrum Teamwork', 'Continuous Learning & Adaptability']
    }
  ];

  certifications = [
    {
      title: 'Full Stack Web Development & Java Specialization',
      issuer: 'Digital Academy / Technical Program',
      year: '2024 - 2025',
      badge: 'Verified'
    },
    {
      title: 'Object-Oriented Programming in Java',
      issuer: 'Systems Engineering Coursework',
      year: '2023 - 2024',
      badge: 'Completed'
    },
    {
      title: 'Real-Time Web Applications & STOMP Messaging',
      issuer: 'CityFix Engineering Project Practical',
      year: '2025 - 2026',
      badge: 'Applied Project'
    }
  ];

  setTab(tab: 'education' | 'skills' | 'certifications'): void {
    this.activeTab.set(tab);
  }
}
