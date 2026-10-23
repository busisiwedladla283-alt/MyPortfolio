import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillItem {
  name: string;
  icon: string;
  isSvg?: boolean;
  level: 'Advanced' | 'Proficient' | 'Working Knowledge';
  category: 'frontend' | 'backend' | 'database' | 'realtime' | 'tools';
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  readonly activeCategory = signal<string>('all');

  categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'realtime', label: 'Real-Time' },
    { id: 'tools', label: 'Development Tools' }
  ];

  allSkills: SkillItem[] = [
    // Frontend
    {
      name: 'Angular',
      icon: 'devicon-angularjs-plain colored',
      level: 'Proficient',
      category: 'frontend',
      description: 'Building modular components, reactive forms, page routing, and connecting to REST APIs'
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored',
      level: 'Proficient',
      category: 'frontend',
      description: 'Writing type-safe JavaScript with interfaces, basic data structures, and ES6+ features'
    },
    {
      name: 'HTML5',
      icon: 'devicon-html5-plain colored',
      level: 'Proficient',
      category: 'frontend',
      description: 'Semantic page structure, form elements, accessible tags, and responsive layouts'
    },
    {
      name: 'CSS3 / Tailwind',
      icon: 'devicon-tailwindcss-original colored',
      level: 'Proficient',
      category: 'frontend',
      description: 'Styling with Flexbox, CSS Grid, custom properties, and Tailwind utility classes'
    },

    // Backend
    {
      name: 'Java',
      icon: 'devicon-java-plain colored',
      level: 'Proficient',
      category: 'backend',
      description: 'Object-Oriented Programming (OOP) fundamentals, Collections framework, and clean class structure'
    },
    {
      name: 'Spring Boot',
      icon: 'devicon-spring-plain colored',
      level: 'Proficient',
      category: 'backend',
      description: 'Building REST APIs, dependency injection, and CRUD operations with Spring Data JPA'
    },
    {
      name: 'RESTful APIs',
      icon: 'devicon-fastapi-plain colored',
      level: 'Proficient',
      category: 'backend',
      description: 'Creating and consuming API endpoints using standard HTTP methods and JSON data'
    },

    // Database
    {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain colored',
      level: 'Proficient',
      category: 'database',
      description: 'Relational database basics, table creation, primary/foreign keys, and SQL queries'
    },
    {
      name: 'SQL & Data Modeling',
      icon: 'devicon-mysql-plain colored',
      level: 'Proficient',
      category: 'database',
      description: 'Writing SQL queries (SELECT, INSERT, UPDATE, JOINs) and designing relational schemas'
    },

    // Real-Time
    {
      name: 'WebSocket',
      icon: 'devicon-socketio-original colored',
      level: 'Proficient',
      category: 'realtime',
      description: 'Real-time bidirectional event communication for live chat in web applications'
    },
    {
      name: 'STOMP Protocol',
      icon: 'devicon-network-plain',
      isSvg: true,
      level: 'Proficient',
      category: 'realtime',
      description: 'Publish-subscribe messaging over WebSocket for real-time notifications and messages'
    },

    // Development Tools
    {
      name: 'Git',
      icon: 'devicon-git-plain colored',
      level: 'Proficient',
      category: 'tools',
      description: 'Version control basics: staging, committing, branching, and pushing code'
    },
    {
      name: 'GitHub',
      icon: 'devicon-github-original',
      level: 'Proficient',
      category: 'tools',
      description: 'Hosting repositories, tracking issues, managing commits, and sharing project code'
    },
    {
      name: 'Postman',
      icon: 'devicon-postman-plain colored',
      level: 'Proficient',
      category: 'tools',
      description: 'Testing API endpoints, checking response status codes, and verifying JSON payloads'
    },
    {
      name: 'VS Code & IntelliJ',
      icon: 'devicon-vscode-plain colored',
      level: 'Proficient',
      category: 'tools',
      description: 'Primary IDEs for writing, running, and debugging Java and Angular applications'
    }
  ];

  setCategory(categoryId: string): void {
    this.activeCategory.set(categoryId);
  }

  get filteredSkills(): SkillItem[] {
    const cat = this.activeCategory();
    if (cat === 'all') return this.allSkills;
    return this.allSkills.filter(s => s.category === cat);
  }
}
