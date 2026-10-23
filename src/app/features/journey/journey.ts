import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Milestone {

  year: string;

  badge: string;

  title: string;

  subtitle: string;

  description: string;

  highlights: string[];

  technologies: string[];

}

@Component({

  selector: 'app-journey',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './journey.html',

  styleUrl: './journey.css'

})

export class Journey {

  milestones: Milestone[] = [

    {
      year: '2014 – 2018',

      badge: 'Professional Foundation',

      title: 'Office Administration & Quality Control',

      subtitle: 'Prismo South Africa',

      description:
        'Built a strong professional foundation through office administration, reception, imports coordination, procurement, logistics and quality control responsibilities.',

      highlights: [

        'Managed calls, customer enquiries, messages and stakeholder communication',

        'Maintained filing, databases, inventory and documentation systems',

        'Processed documents, invoices and purchase orders using Sage',

        'Coordinated stock orders, deliveries and logistics tracking',

        'Conducted quality inspections and reported quality issues to management'

      ],

      technologies: [
        'Office Administration',
        'Data Entry',
        'Record Keeping',
        'Sage',
        'Quality Control'
      ]

    },

    {
      year: '2019 – 2020',

      badge: 'Customer & Business Experience',

      title: 'Sales Agent',

      subtitle: 'First National Bank',

      description:
        'Developed customer service, communication and relationship management experience while working in a sales environment and using CRM systems.',

      highlights: [

        'Generated and captured sales for unsecured personal and student loans',

        'Handled inbound and outbound customer calls and queries',

        'Used Hogan CRM to manage customer interactions',

        'Provided customer service while working towards sales targets',

        'Strengthened communication, time management and problem-solving skills'

      ],

      technologies: [
        'Customer Service',
        'CRM',
        'Communication',
        'Sales',
        'Time Management'
      ]

    },

    {
      year: '2021 – 2024',

      badge: 'IT & Systems Support',

      title: 'IT Department Intern',

      subtitle: 'Pendula',

      description:
        'Transitioned into the IT field and gained practical experience providing technical support and troubleshooting hardware, software and network-related issues.',

      highlights: [

        'Provided technical support to customers and end users',

        'Diagnosed and resolved hardware, software and network-related issues',

        'Responded to technical support requests via telephone and email',

        'Created and maintained user accounts and system access',

        'Assisted with network troubleshooting and system maintenance',

        'Escalated complex technical issues when necessary'

      ],

      technologies: [
        'IT Support',
        'Hardware',
        'Software',
        'Networking',
        'Help Desk'
      ]

    },

    {
      year: 'Current',

      badge: 'Software Development',

      title: 'Junior Full Stack Developer Intern',

      subtitle: 'Shaper',

      description:
        'Currently developing practical full-stack software development experience by building and maintaining web applications using modern frameworks, tools and development practices.',

      highlights: [

        'Develop responsive user interfaces using Angular and related frontend technologies',

        'Work with backend technologies and databases as part of full-stack development',

        'Participate in the software development lifecycle including planning, coding, testing, debugging and deployment',

        'Use Git and GitHub for version control and team collaboration',

        'Collaborate with team members on project tasks, features and improvements',

        'Apply clean code, responsive design and UI/UX principles',

        'Build real-world projects while continuously strengthening software development skills'

      ],

      technologies: [
        'Angular',
        'JavaScript',
        'HTML',
        'CSS',
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Git & GitHub'
      ]

    }

  ];

}