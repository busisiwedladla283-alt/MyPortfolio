import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactMessage, ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  readonly contactService = inject(ContactService);

  formData: ContactMessage = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  copiedEmail = signal<boolean>(false);

  contactCards = [
    {
      title: 'Email Address',
      value: 'busisiwedladla.dev@gmail.com',
      action: 'mailto:busisiwedladla.dev@gmail.com',
      actionLabel: 'Send Direct Email',
      icon: 'email'
    },
    {
      title: 'Primary Location',
      value: 'Johannesburg, South Africa',
      action: '',
      actionLabel: 'Available for Remote & Hybrid',
      icon: 'location'
    },
    {
      title: 'Professional Profiles',
      value: 'GitHub & LinkedIn',
      action: 'https://github.com/The-DigitalAcademy/city-fix',
      actionLabel: 'Explore Repositories',
      icon: 'profile'
    }
  ];

  async onSubmit(): Promise<void> {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    const success = await this.contactService.sendMessage(this.formData);
    if (success) {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }

  copyEmailToClipboard(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('busisiwedladla.dev@gmail.com');
      this.copiedEmail.set(true);
      setTimeout(() => {
        this.copiedEmail.set(false);
      }, 3000);
    }
  }
}
