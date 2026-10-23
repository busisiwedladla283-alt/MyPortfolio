import { Injectable, signal } from '@angular/core';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly isSubmitting = signal<boolean>(false);
  readonly submitSuccess = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);

  readonly contactInfo = {
    name: 'Busisiwe Dladla',
    title: 'Aspiring Full Stack Developer',
    email: 'busisiwedladla.dev@gmail.com',
    location: 'Johannesburg, South Africa',
    availability: 'Open to Full-Time, Junior Roles & Internships',
    github: 'https://github.com/The-DigitalAcademy/city-fix',
    linkedin: 'https://linkedin.com/in/busisiwe-dladla'
  };

  async sendMessage(formData: ContactMessage): Promise<boolean> {
    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.errorMessage.set(null);

    try {
      // Simulate network request for robust UX demonstration
      await new Promise(resolve => setTimeout(resolve, 1200));

      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields.');
      }

      this.submitSuccess.set(true);
      return true;
    } catch (err: any) {
      this.errorMessage.set(err.message || 'An error occurred while sending your message.');
      return false;
    } finally {
      this.isSubmitting.set(false);
    }
  }

  resetStatus(): void {
    this.submitSuccess.set(false);
    this.errorMessage.set(null);
  }
}
