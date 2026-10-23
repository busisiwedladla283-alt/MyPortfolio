import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectService } from '../../services/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  private readonly projectService = inject(ProjectService);
  readonly activeFilter = signal<string>('all');
  readonly selectedProject = signal<Project | null>(null);

  filterOptions: { id: string; label: string }[] = [];

  setFilter(filterId: string): void {
    this.activeFilter.set(filterId);
  }

  get displayedProjects(): Project[] {
    return this.projectService.getProjectsByCategory(this.activeFilter());
  }

  openProjectModal(project: Project): void {
    this.selectedProject.set(project);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeProjectModal(): void {
    this.selectedProject.set(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }
}